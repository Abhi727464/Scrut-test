import React from 'react'
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import TextField from "@mui/material/TextField";

const index = ({input,setInput}) => {
  return (
    <div className="searchbar">
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>All User's Data</h1>
      <PeopleAltIcon
        style={{ fontSize: "30px", margin: "2px 0px 0px 4px" }}
      />
    </div>
    
    <TextField
      id="standard-basic"
      className="search-box"
      label="Search User Name"
      variant="outlined"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  </div>
  )
}

export default index