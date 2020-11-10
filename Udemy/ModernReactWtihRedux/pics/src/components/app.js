import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
        params: { query: term }              
      });

    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images}/>
        <iframe src="https://trevortestbucketsmmodlers.s3-us-west-2.amazonaws.com/57532a0e-ce0f-4207-8fad-adcfdf4c5551">Thing</iframe>
      </div>
    );
  }
}

export default App;