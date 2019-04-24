import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
	
	state = {text: ''}

	textChange = (e) => {
		this.setState({text: e.target.value});
	}

	textSubmit = (e) => {
		e.preventDefault() 
		this.props.textInput(this.state.text)

	}

    render() {

    	return ( 		
			
    		<div className="ui segment">

    			<form className='ui form' onSubmit={this.textSubmit}>

    				<input type="text" value={this.state.text} placeholder="Search..." onChange={this.textChange} />

    			</form>

			</div>
		)
    
    }


}

export default SearchBar