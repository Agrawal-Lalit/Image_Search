import React from 'react';
import axios from 'axios';
import './App.css';

const id='X90pt6oipcVMjX8-ZKI92yJpq3ZiHc7Xz3ZuX9P3aG4';
class SearchBar extends React.Component{
    
    state={searchItem: '',imageUrl:[]}
    handlerForChange = async (e)=>{
    
        this.setState({ searchItem: e.target.value});
        console.log(this.state.searchItem);
        const response= await axios.get(
         'https://api.unsplash.com/search/photos',{
            params:{query: this.state.searchItem},
            headers:{Authorization: `Client-ID ${id}`}
         }
        );
        this.setState({imageUrl :response.data.results});
    }
    render() {
        return(
        <div>
            <h2>Search for photos</h2>
            <input type="text" onChange={this.handlerForChange}></input>
            <div className="image-list">
                {this.state.imageUrl.map(imageObj => {
                    const {width, height}=imageObj;
                    return <img src={imageObj.urls.regular} 
                    key={imageObj.id}
                    style={{gridRowEnd:`span ${Math.ceil(20 *height/width)}`}}/>;
                })}
            </div>
        </div>
        );
    }
}
export default SearchBar;