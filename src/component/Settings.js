import React, { Component } from 'react'
import Toggle from 'react-toggle'
import "react-toggle/style.css"

class Settings extends Component {
    constructor() {
        super();
        this.state = {
            toggle: false,
        }
    }
   handleToggle = () => 
   { this.setState({toggle:!this.state.toggle})
        this.props.updateColor(this.state.toggle)}
    render() {
        console.log('set',this.state.toggle)
        return (
            <div className="settings">
            <h2>Settings</h2>
            <label>
                <Toggle
                    defaultChecked={this.state.toggle}
                    onChange={this.handleToggle}/>
                <span>Color Mode</span>
            </label>
            </div>
          
            )
    }
}
export default Settings