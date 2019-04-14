import React, { Component } from 'react'
import Toggle from 'react-toggle'
import "react-toggle/style.css"

class Settings extends Component {
    constructor() {
        super();
        this.state = {
            color: false,
        }
    }
   handleToggle = () => 
   { this.setState({color:!this.state.color})
        this.props.updateColor(this.state.color)}
    render() {
        console.log('set',this.state.color)
        return (
            <div className="settings">
            <h2>Settings</h2>
            <label>
                <Toggle
                    defaultChecked={this.state.color}
                    onChange={this.handleToggle}/>
                <span>Color Mode</span>
            </label>
            </div>
          
            )
    }
}
export default Settings