import React, {Component} from 'react'
import BasicInfo from './components/BasicInfo'


export default class Medium extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {
                name: "Sergio Quintero",
                email: "yuyisq@gmail.com",
                dob: "June 8, 1997",
                city: "Charlotte, NC"
            },
        }
    }
  render() {
    return (
      <div>
        <BasicInfo person={this.state.person}></BasicInfo>
      </div>
    )
  }
}
