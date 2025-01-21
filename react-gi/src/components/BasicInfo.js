import React from 'react'

export default function BasicInfo({ person }) {
  return (
    <div class="BasicInfo">
      <h1>{person.name}</h1>
      <p>{person.email}</p>
      <p>{person.dob}</p>
      <p>{person.city}</p>
    </div>
  )
}
