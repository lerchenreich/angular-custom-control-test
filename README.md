# AngularCustomControlTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:3041/`. The app will automatically reload if you change any of the source files.

1. Serve the project (VS-Code F5)

2. Press Button "Both declared in App-Module" --> hurra it works: the control shows "IN APP.MODULE IT WORKS"
(The control and the component are declared in AppModule)

3. Press Button "In different Modules declared" --> ERROR: debug-console shows the error below
(the control is declared in AppModule, the component in lazy loaded Module1)

4. Press Button "Both declared in Module 2! --> ERROR: debug-console shows the error below
(the control and the component are declared in lazy loaded Module2)


The Attribute "ngDefaultControl" heals the error "No value accessor for form control with unspecified name attribute"
An attribute like "matInput" which ist already defined in the control don't help