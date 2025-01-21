import React from "react";

export default function BasicInfo({ person }) {
  return (
    <div class="BasicInfo">
      <h1 className="name-css">{person.name}</h1>
      <p className="info-css">{person.email}</p>
      <p className="info-css">{person.dob}</p>
      <p className="info-css">{person.city}</p>
    </div>
  );
}
