import React, { Component } from 'react'

class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.contact.name,
            company: props.contact.company,
            special: props.contact.special,
            experience: props.contact.experience,
            skills: props.contact.skills,
            rate: props.contact.rate,
            phone: props.contact.phone,
            email: props.contact.email,
            city: props.contact.city,
            id: props.contact.id
        }
    }
    handleChange = (e) => {
        let {value,name} = e.target
        this.setState({[name]: value})
        }
        handleArray = (e) => {
            let {value,name} = e.target
            this.setState({[name]: value.split(',')})
        }
        handleClick = () => {
            let updatedContact = {...this.state};
            this.props.update(updatedContact)
        }
        render() { console.log(this.state)
            return (
                <div>
                    <h4>Basic Info</h4>
                    <h5>Company:<input value={this.state.company} name='company' placeholder='Company'onChange={this.handleChange}></input></h5>
                    <h5>Name:<input value={this.state.name} name='name'placeholder='Full Name'onChange={this.handleChange}></input></h5>
                    <h5>Special Skills:<input value={this.state.special} name='special' placeholder='Notes'onChange={this.handleChange}></input></h5>
                    <h5>Experience:<input value={this.state.experience} name='experience'placeholder='Experience'onChange={this.handleChange}></input></h5>
                    <h5>Skills:<input value={this.state.skills} name='skills' placeholder='Skills'onChange={this.handleArray}></input></h5>
                    <h5>Rate:<input value={this.state.rate} name='rate' placeholder='Rate'onChange={this.handleChange}></input></h5>
                    <div>
                        <h4>Contact</h4>
                        <h5>Phone:<input value={this.state.phone} name='phone' placeholder='Phone Number' onChange={this.handleChange}></input></h5>
                        <h5>Email:<input value={this.state.email} name='email' placeholder='Email' onChange={this.handleChange}></input></h5>
                        <h5>City:<input value={this.state.city} name='city'placeholder='City' onChange={this.handleChange}></input></h5>
                    </div>
                    <button onClick={this.handleClick}>Submit</button>
        
                </div>
            ) 
}
}
export default Update