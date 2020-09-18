# Section 1 Notes

## JS versions and Babel
- ES5
- ES2015 - Almost completely supported
- ES2016-18 - Poor support
- Babel turns your version of ES so the browser can read it.

## npx create-react-app folders
- src 
    - Folder where we put all the source code we write
- public
    - stores static files, like images
- node_modules
    - contains all of the project dependencies
- package.json  
    - Records our project dependencies and configures the project
- package-lock.json
    - Records the exact version of packages that we install
- README.md
    - its a readme

## JavaScript Module system
- Webpack - bundler system

- import - command to import code from another file or a dependency
- "VarName" - the variable we want to assign the import to
- from - We are about to specify the name of the library or file we are importing
- "PackageName" - The name of the dependency or path to the file we are importing.

## Require vs Import
- import - reference to ES2015 module
- require - CommonJS modules

## What is a Component
- Either a:
    - Function
    - Class
- that produces HTML to show the user
- and handles feedback from the user