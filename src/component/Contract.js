import React, {Component} from 'react'
import Create from './Create'
import Popup from 'reactjs-popup'
import Axios from 'axios';

class Contract extends Component {
    constructor() {
        super();
        this.state = {
            contractArray: [],
        }
    }
    componentDidMount () {
        
        Axios.get('/api/contractor').then(res => {
            this.setState({contractArray: res.data})
        }).catch((err)=>{console.log('err',err)})
    }
        addNew = (newContact) => {
        Axios.post('/api/contractor',newContact).then(res => {
            this.setState({contractArray: res.data})
        }).catch((err)=>{console.log('err',err)})
    }
        deleteUser = (id) => {
            Axios.delete(`/api/contractor/${id}`).then( res => {
                this.setState({contractArray: res.data})
            }).catch((err)=>{console.log('err',err)})
        }

    render() {
        let displayArray = this.state.contractArray.map((elem,index)=> 
            {return <div key={index}>
            <h2>{elem.name}</h2>
            <h3>{elem.company}</h3>
            <h4>{elem.experience}</h4>
            <h4>{elem.skills + ' , '}</h4>
            <h4>{elem.rate}</h4>
            <button onClick={() => this.deleteUser(elem.id)}>Delete</button>
            <Popup trigger={<button>Edit</button>} position="right center">
            <div>Popup content here !!</div>
             </Popup>
            </div>})
        
            return (
            <div>
                {displayArray}
                <Create addNew={this.addNew}/>
            </div>
        )
        
    }
}
export default Contract