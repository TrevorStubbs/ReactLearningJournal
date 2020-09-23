# Section 5 Notes

## React State System
- Rules of State
    - Only usable with class components (can be functional used with hooks)
    - Can be confused with props with state. (feels similar but very different)
    - 'State' is a JS object that contains data relevant to a component
    - Updating 'state' on a component causes the component to (almost) instantly rerender
    - State must be initialized when a component is created
        - `constructor()`
    - **State can only be updated using the function 'setState'**   
        - `this.state = {};`

- Updating state is an additive process
    - adds or changes
    - not deleting or removing properties

- Conditionally rendering elements