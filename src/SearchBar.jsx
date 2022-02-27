import React from 'react';
import axios from 'axios';

const id='X90pt6oipcVMjX8-ZKI92yJpq3ZiHc7Xz3ZuX9P3aG4';
class SearchBar extends React.Component{
    
    state={searchItem: '',imageUrl: ''}
    handlerForChange = async (e)=>{
        this.setState({ searchItem: e.target.value});
        console.log(this.state.searchItem);
        const response= await axios.get(
         'https://api.unsplash.com/search/photos',{
            params:{query: this.state.searchItem},
            headers:{Authorization: `Client-ID ${id}`}
         }
        );
        this.setState({imageUrl :response.data.results[0].urls.regular});
    }
    render() {
        return(<div>
            <h2>Search for photos</h2>
            <input type="text" onChange={this.handlerForChange}></input>
            <img src={this.state.imageUrl} style={{width:'50vh',height:'30vh'}}/>
            </div>);
    }
}
export default SearchBar;