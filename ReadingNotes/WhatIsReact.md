# What is React?
- [react.org](https://reactjs.org/)

> A JavaScript library for building user interfaces

## Declariative 
- Making interactive UIs painless to create.
- Designing simple views for each state in an app. 
- React will efficiently update and render the correct components when data changes.
- Make the app more predictable. 

## Component-Based
- Components that manage their own state.
- Built without templates.

## A Simple Component
- React components implement a `render()` method
- Input data can be accessed by `render()` via `this.props`.
``` JavaScript
class HelloMessage extends React.Component {
  render() {
    return (
      <div> 
        Hello {this.props.name}
      </div>
    );
  }
}

ReactDom.render(
  <HelloMessage name="Taylor" />
  document.getElementById('hello-example')
);
```

## A Stateful Component
- A component can maintain internal state data (`this.state`)
``` JavaScript
class Timer extends React.Component{
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };    
  }

  tick(){
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }  
}

componentDidMount(){
  this.interval = setInterval(() => this.tick(), 1000);  
}
```

## An Application
``` JavaScript
class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }  

  render(){
    return(
      <div>
        <h3>TODO</h3>
        <TodoList item={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }
}

handleChange(e){
  this.setState({ text: e.target.value });
}

handleSubmit(e){
  e.preventDefault();
  if(this.state.text.length === 0){
    return;
  }
  const newItem = {
    text: this.state.text,
    id: Date.now()
  };
  this.setState(state => ({
    items: state.items.concat(newItem),
    text: ''
  }));
}

class TodoList extends React.Component{
  render(){
    return (
      <ul>
        {this.props.items.map(item => (
          <li> key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('todo-example')
)
```

## Component Using External Plugins
``` JavaScript
class MarkdownEditor extends React.Component {
  constructor(props){
    super(props);
    this.md = new Remarkable();
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: 'Hello, **world**!' };
  }

  handleChange(e){
    this.setState({ value: e.target.value });
  }

  getRawMarkup(){
    return { _html: this.md.render(this.state.value) };
  }

  render(){
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <label htmlFor="markdown-content">
          Enter some markdown
        </label>
        <textarea
          id="markdown-content"
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <h3>Output</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}

ReactDom.render(
  <MarkdownEditor />
  document.getElementById('markdown-example')
)
```

### Package install
- npm install create-react-app
- npx create-react-app .