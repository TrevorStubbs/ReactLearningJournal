# Section 6

## Component Lifecycle
- Constructor <- lifecycle method
    - Good place to do one-time setup
- Render <- lifecycle method
    - Avoid doing anything besides returning JSX
> Content visible on screen
- componentDidMount <- lifecycle method
    - Good place to do data loading
> sit and wait for updates
- componentDidUpdate <- lifecycle method
    - Good place to do more data-loading when state/props change
> sit and wait until this component is no longer shown
- componentWillUnmount <- lifecycle method
    - Do cleanup

- Others (not used much)
    - shouldComponentUpdate
    - getDerivedStateFromProps
    - getSnapshotBeforeUpdate

- Convention says do all data loading inside componentDidMount.
 2.38