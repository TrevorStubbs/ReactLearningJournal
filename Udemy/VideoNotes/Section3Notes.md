# Section 3

## 3 Tenentes of Components
- Component Nesting
    - A Component can be shown inside of another
- Component Reusability
    - We want to make components that can be easily reused throughout the app
- Component Configuration
    - We should be able to configure a component when it is created

## Semantic Ui
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">

## Faker js
- [Faker js](https://github.com/marak/Faker.js/)
- `npm install --save faker`

## Creating a Reusable and Configurable Component
- Identify the JSX that appears to be duplicated
- What is the purpose of that block of JSX?
    - Think of a descriptive name for what it does.
- Create a new file to house the new component
    - it should have the same name as the component
- Create a new component in the new file
    - past the JSX into it
- Make the new component configurable by using React's 'props' system.

## Export statement
- `export default [ComponentName]`
- `import [ComponentName] from 'path/[ComponentName]`

## React's props system
- System for passing data from a parent to a child
    - Goal is to customize or configure a child
    - A child cannot pass data back up to the parent directly 
- `<[ComponentName] [propName]="[value]" />`
- props is an object
- `{props.children}`
