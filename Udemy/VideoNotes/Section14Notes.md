# Section 14 Notes
## Hooks in Practice
### Custom Hooks
- Best way to create reusable code in a React project (besides components)
- Created by extracting hook-related code out of a function component
- Custom hooks always make use of at least 1 primitive hook internally
- Each custom hook should have one purpose (SOLID)

### Process for Creating Custom Hooks
- Identify each line of code related to some single purpose
- Identify the inputs to that code
- Identify the outputs of that code
- Extract all of the code into a separate function, receiving the inputs as arguments, and returning the outputs
