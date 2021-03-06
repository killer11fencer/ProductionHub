import React, {Component} from 'react'

class Create extends Component {
    constructor() {
    super();
    this.state = {
    name:'',
    company: '',
    special:'',
    experience: '',
    skills: [],
    rate: '',
    phone: '',
    email: '',
    city: ''
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
    let newContract = this.state;
    this.props.addNew(newContract)
}
render() {
    return (
        <div>
            <h4>Basic Info</h4>
            <h5>Company:<input name='company' placeholder='Company Name'onChange={this.handleChange}></input></h5>
            <h5>Name:<input name='name'placeholder='Full Name'onChange={this.handleChange}></input></h5>
            <h5>Special Skills:<input name='special' placeholder='Special Notes'onChange={this.handleChange}></input></h5>
            <h5>Experience:<input name='experience'placeholder='Time in Industry'onChange={this.handleChange}></input></h5>
            <h5>Skills:<input name='skills' placeholder='Preferred Positions'onChange={this.handleArray}></input></h5>
            <h5>Rate:<input name='rate' placeholder='Day or Hourly Rate'onChange={this.handleChange}></input></h5>
            <h5>Demo Reel:<input name='video' placeholder='Video URL'onChange={this.handleChange}></input></h5>
            <div>
                <h4>Contact</h4>
                <h5>Phone:<input name='phone' placeholder='Phone Number' onChange={this.handleChange}></input></h5>
                <h5>Email:<input name='email' placeholder='Email' onChange={this.handleChange}></input></h5>
                <h5>City:<input name='city'placeholder='City' onChange={this.handleChange}></input></h5>
            </div>
            <button className='button2'onClick={this.handleClick}>Submit</button>

        </div>
    )
}
}
export default Create