# Section 8

## axios vs fetch
- axios
    - stand alone 3rd party
- fetch
    - built in function in modern browsers

## Using axios
``` JavaScript
axios.get('[apiURL]', {
    params: {[Required by api]: [yourVarName]},
    headers: {
        Authorization : 'What the api is expecting'
    }
});
```

## Expected Flow
- Component renders itself one time with no list of images
- onSearchSubmit method called
- Request made to unsplash
- [Wait]
- Request complete
- Set image data on state of App component
- App component rerenders and shows images