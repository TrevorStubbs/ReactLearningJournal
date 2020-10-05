# Section 7 Notes
## App Overview
### Things to Still Figure out
- How do we get feedback from the user?
- How do we fetch data from some outside API or server?
- How do we show lists of records?

### Common Event Handlers
- onClick
    - user clicks on something
- onChange
    - User changes text in an input
- onSubmit
    - User submits a form

### Event Handler Callback method naming convention
- onInputClick - `on[ElementName][Action]` - `on` could be `handle`

## Controlled or Uncontrolled Elements
### Code Flow of a Controlled Element
- User types in input
- Callback gets invoked
- We call setState with the new value
- Component rerenders
- Input is told what its value is (coming from state)

## Undefined
- What is 'this' used for in a class?
    - the current instance of the class
- How is the value of 'this' determined in a function?
    - Look at where we call the method to determine `this`