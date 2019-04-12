import React, { Component } from 'react'
import Create from './Create'
import Update from './Update'
import Popup from 'reactjs-popup'
import Axios from 'axios';
import VideoPlayer from './ReactPlayer'


class Contract extends Component {
    constructor() {
        super();
        this.state = {
            contractArray: [],
        }
    }
    componentDidMount() {

        Axios.get('/api/contractor').then(res => {
            this.setState({ contractArray: res.data })
        }).catch((err) => { console.log('err', err) })
    }
    addNew = (newContact) => {
        Axios.post('/api/contractor', newContact).then(res => {
            this.setState({ contractArray: res.data })
        }).catch((err) => { console.log('err', err) })

    }
    deleteUser = (id) => {
        Axios.delete(`/api/contractor/${id}`).then(res => {
            this.setState({ contractArray: res.data })
        }).catch((err) => { console.log('err', err) })
    }
    updateContact = (updatedContact) => {
        Axios.put(`/api/contractor/${updatedContact.id}`, updatedContact).then(res => {
            this.setState({ contractArray: res.data })
        }).catch((err) => { console.log('err', err) })

    }

    render() {
        console.log(this.state)

        let displayArray = this.state.contractArray.map((elem, index) => {
            return <div className='Contact' key={index}>
                <VideoPlayer className='Video' video='https://www.youtube.com/watch?v=UWUYvyatLp0'/>
                <div className="info">
                
                    <h2>Name: {elem.name}</h2>
                    <h3>Company: {elem.company}</h3>
                    <h4>Experience: {elem.experience}</h4>
                    <h4>Special Skills: {elem.skills + ' , '}</h4>
                    <h4>Rate: {elem.rate}</h4>
                </div>
                <div className="navbutton">
                    <span className='button' onClick={() => this.deleteUser(elem.id)}>Delete</span>
                    <Popup trigger={<span className='button'>Edit</span>} position="right center">
                        <div><Update contact={elem} index={index} update={this.updateContact} /></div>
                    </Popup>
                    <Popup trigger={<button className='contactInfo'>Contact</button>} position="right center">
                        <div><h3>Email:</h3><a href={`mailto:${elem.email}?Subject=Video Production Job`} target="_top">{elem.email}</a>
                            <h3>Phone:</h3><a class='phone' href={`tel://${elem.phone}`}>{elem.phone}</a>
                            <h3>City:</h3>{elem.city}
                        </div>
                    </Popup>
                </div>
            </div>
        })

        return (
            <div>
                <header className='header'>
                    <div className='Username'>Production Hub</div>
                    
               
                </header>
                <div className="diplayContacts">
                {displayArray}
                </div>
                <div className="right">Find <br/>A <br/>Pro
                
                </div>
                <div className="Adding">
                <i class="fas fa-users fa-lg"></i>
                <Popup trigger={<button className='button2'>New Contact</button>} position="bottom left">
                    <div className='addNew'>
                        <h3>New Contact</h3>
                        <Create addNew={this.addNew} />
                    </div>
                </Popup>
                </div>
            </div>
        )

    }
}
export default Contract