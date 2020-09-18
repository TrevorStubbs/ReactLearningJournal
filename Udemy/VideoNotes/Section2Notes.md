# Section 2 Notes

## What is JSX?
- JSX is JS not HTML
    - But it looks like HTML
## Differences between JSX to HTML
- Adding custom styling to an element
    - use mustaches
    - `style={{ backgroundColor: 'red' }}`
        - Outer - JS var
        - Inner - JS object
        - remove dash and cap the next word
            - "background-color: red" => {{backgroundColor: 'red'}}
            - "boarder: 1px solid red" => {{border: '1px solid red'}}
- Adding a class to an element
    - class="label" => className="label"
    - class is a JS keyword
- JSX can reference JS vars
    - const buttonText = 'Click me' - {buttonText}
    - function getButtonText(){'Click me'} - {getButtonText()}
    - *React does not allow an object to be passed into the content of an html element*

