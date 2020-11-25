# Section 13 Notes
## Navigation 
## React-Router
- Frequent breaking changes
- Learn the theroy 

``` Javascript
<Component>
   <ComponentChild />
</Component>
```

## Ideal React navigation
- User Clicks on the the link
- Change th URL, but don't do a full page refresh
- Each route could detect the URL has changed
- Route could update piece of state tracking the current pathname
- Each route rerenders, showing/hiding components appropriately
