import React, { Component } from 'react'
import BasicInfo from './components/BasicInfo'


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: [{
                name: "Sergio Quintero",
                email: "yuyisq@gmail.com",
                dob: "June 8, 1997",
                city: "Charlotte, NC"
            }, 
            {
                name: "Aylah Bryant",
                email: "aylahbryant123@gmail.com",
                dob: "August 17, 2021",
                city: "Thomasville, NC"
            },
            {
                name: "Avaylah Bryant",
                email: "avaylahbryant123@gmail.com",
                dob: "August 17, 2021",
                city: "Thomasville, NC"
            },
            {
                name: "Cristiano Ronaldo",
                email: "Cristianoisthegoat@gmail.com",
                dob: "February 5, 1985",
                city: "Madrid, Spain"
            }
        ],  
    }
}
  render() {
    const { person } = this.state;
    
    return (
      <div>
        {person.map((people) => (
            <BasicInfo person={people} />
        ))}
      </div>
    )
  }
}
