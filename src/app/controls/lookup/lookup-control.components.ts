import { Component, Input, Output, HostBinding, ElementRef, Optional, Self, EventEmitter  } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { NgControl, FormControl, FormGroup, ControlValueAccessor } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { FocusMonitor } from '@angular/cdk/a11y'
import { coerceBooleanProperty } from  '@angular/cdk/coercion' 
import { Subject } from 'rxjs'

/**
 * Lookupcontrol which provide a lookupfunctionallity an assist-button
 * Contains a mat-input-control, a button for looking up and select in a related table of the input
 * and a button for a custom assist-function
 * @attribute placeholder see matInput
 * @attribute required    see matInput
 * @attribute disabled    see input
 * @attribute [(ngModel)] see angular material
 * @attribute lookupFor   a string that describe for which "table.fieldname" we want to lookup for 
 * @attribute (assist)    an eventhandler who handles the assist-button-click
 * @attribute (change)    an eventhandler who handles the changes in the input-field
  */
abstract class LookupControl<T> extends MatFormFieldControl<T> implements ControlValueAccessor{
  static nextId = 0
  parts         : FormGroup = new FormGroup({'inputControl': new FormControl('')});
  stateChanges  : Subject<void> = new Subject<void>()
  focused       : boolean = false
  errorState    : boolean = false
  controlType   : string = 'lookup'
  autofilled    : boolean = true
  
  abstract get empty(): boolean
  abstract toValue(val : T | null) : T

  get control() { return this.parts.controls.inputControl }
  
  @HostBinding() id: string = `${this.controlType}${LookupControl.nextId++}`;


  constructor(private focusMonitor: FocusMonitor, 
              private elRef: ElementRef<HTMLElement>,
              private lookupDialog : MatDialog,
              public ngControl: NgControl
              ){ 
    super()    
    focusMonitor.monitor(elRef.nativeElement, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }

  ngAfterViewInit() {
   /*
    const lookupButton = this.elRef.nativeElement.querySelector(`button#lookupButton`)
    if (!isUndefined(this._lookupForColumn))
      lookupButton.setAttribute('style', 'display:block') 
    const assistButton = this.elRef.nativeElement.querySelector('button#assistButton')
    assistButton.setAttribute('style', this.assist.observers.length>0? 'display:block':'display:none') 
   */
  }
  onContainerClick(event: MouseEvent): void {
    if ((event.target as Element).tagName.toLowerCase() != 'input') {
      this.elRef.nativeElement.querySelector('input').focus();
    }
  }

  propagateChange = (_: any) => {}
 
  //begin Implementation of ControlValueAccessor
  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  registerOnTouched() {}

  writeValue(value : any ){
    this.value = value || ''
  }
  //end Implementation of ControlValueAccessor
  
  
  @HostBinding('class.floating')
  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }
  @HostBinding('attr.aria-describedby') 
  describedBy = '';
  
  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  private _placeHolder : string
  @Input()
  get placeholder() : string { return this._placeHolder};
  set placeholder(ph) { this._placeHolder = ph; this.stateChanges.next() } 
 
  private _required = false;
  @Input()
  get required() { return this._required; }
  set required(req) {
    this._required = coerceBooleanProperty(req);
    this.stateChanges.next();
  }

  private _disabled = false;
  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value)
    this._disabled ? this.parts.disable() : this.parts.enable()
    this.stateChanges.next()
  }


  @Input()
  get value() : T {
    return this.control.value
  }
  set value(val : T | null) {
    val = this.toValue(val)
    if (val !== this.control.value){
      this.control.setValue(val)
      this._onChange(val)
    }
  }

  /**
   * called by manually changes
   * @param event 
   */
  onChange(event:any){
    event.stopPropagation(); //setter "value" emits to the parent
    this._onChange(this.toValue(event.target.value))
  }

  private _onChange(val : T){
    this.propagateChange(val)
    this.stateChanges.next()
    this.change.emit(val) 
  }

  @Output()
  assist = new EventEmitter()
 
  @Output()
  change = new EventEmitter()

  /**
   * here we lookup some data
   */
  onLookup() {
    
  }
 
  assistButtonClicked(){
    this.assist.emit(this.value)
  }

  ngOnDestroy(){
    this.stateChanges.complete();
    this.focusMonitor.stopMonitoring(this.elRef.nativeElement);
  }
}


@Component({
  selector: 'code-input',
  templateUrl: './lookup-control.component.html',
  styleUrls: ['./lookup-control.component.css'],
  providers: [{provide: MatFormFieldControl, useExisting: CodeControlComponent}],
  //encapsulation: ViewEncapsulation.None
})
export class CodeControlComponent extends LookupControl<string> { 
  constructor(fm: FocusMonitor, 
              elRef: ElementRef<HTMLElement>,
              lookupDialog : MatDialog,
              @Optional() @Self() public ngControl: NgControl,
              ){ 
      super(fm,elRef,lookupDialog, ngControl)  
      
      if (this.ngControl != null) {
        // Setting the value accessor directly (instead of using the providers) 
        // to avoid running into a circular import.
        this.ngControl.valueAccessor = this;
      }      
  }            
  get empty(): boolean { return (this.control.value as string).trim().length === 0}
  
  toValue(val : string | null) : string {
    return val? val.toUpperCase():''
  }
}


