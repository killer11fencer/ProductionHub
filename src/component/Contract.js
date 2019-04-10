import React, {Component} from 'react'
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
    render() {
        let displayArray = this.state.contractArray.map((elem,index)=> 
            {return <div key={index}>
            <h2>{elem.name}</h2>
            <h3>{elem.company}</h3>
            <h4>{elem.experience}</h4>
            <h4>{elem.skills}</h4>
            <h4>{elem.rate}</h4>
            </div>})
        
            return (
            <div>
                {displayArray}
            </div>
        )
        
    }
}
export default Contract