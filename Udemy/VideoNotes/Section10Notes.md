# Section 10 Notes

## Image Render Flow
- Let the ImageCard render itself and its image
- React into the DOM figure out the height of the image
- Set the image height on state to get the component to rerender
- When rerendering, assign a 'grid-row-end' to make sure the image takes up the appropriate space

## React Refs
- Gives access to a single DOM element
- Create refs in the constructor 
    - assign them to instance variables 
    - then pass to a particular JSX element as props 