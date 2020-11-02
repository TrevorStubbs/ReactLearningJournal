# Section 12 Notes
- React Hooks System

## Hooks
- useState - make use of state
- useEffect - life cycle methods
- useRef - make a reference to element created by react

## 'Primitive' hooks
- useState
- useEffect
- useContext
- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue

## Custom Hook
- building a hook from primitive hooks

 ## useEffect
 - Allows function components to use 'something like' lifecycle methods <s>`componentDidMount()`</s>
 - We configure the hook to run some code automatically:
    - When the component is rendered for the first time only
        - `useEffect(callback, [])`
    - When the component is rendered for the first time and whenever it rerenders
        - `useEffect(callback)`
    - When the component is rendered for the first time and (whenever it rerenders and some piece of data has changed)
        - `useEffect(callback, [something])`
- cannot use `async` and `await` in `useEffect()`   
 
