import React, { Component } from 'react'
import Create from './Create'
import Update from './Update'
import Popup from 'reactjs-popup'
import Axios from 'axios';

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
        let contact = this.state
        let displayArray = this.state.contractArray.map((elem, index) => {
            return <div key={index}>
                <h2>Name: {elem.name}</h2>
                <h3>Company: {elem.company}</h3>
                <h4>Experience: {elem.experience}</h4>
                <h4>Special Skills: {elem.skills + ' , '}</h4>
                <h4>Rate:{elem.rate}</h4>
                <button onClick={() => this.deleteUser(elem.id)}>Delete</button>
                <Popup trigger={<button>Edit</button>} position="right center">
                    <div><Update contact={contact} update={this.updateContact} /></div>
                </Popup>
                <Popup trigger={<button>Contact</button>} position="right center">
                    <div><h3>Email:</h3>{elem.email}
                        <h3>Phone:</h3>Phone:{elem.phone}
                        <h3>City:</h3>City:{elem.city}
                    </div>
                </Popup>
            </div>
        })

        return (
            <div>
                {displayArray}
                <Create addNew={this.addNew} />
            </div>
        )

    }
}
export default Contract