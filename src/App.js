import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import TableData from "./components/Table/Table";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { Grid } from "@mui/material";
import Search from "./components/Searchbar/index";
import { cityFilter } from "./Data/cityFilter";
import { filterDepartment } from "./Data/filterDepartment";
import { filterGender } from "./Data/filterGender";

function App() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState(data);
  const [newData,setNewData] = useState(data)
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("");
  const [city, setCity] = useState("");
  const [input, setInput] = useState("");
  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((res) => {
      setData(res.data.users);
    });
  }, []);

  useEffect(() => {
    setFilterData(data);
    setNewData(data)
  }, [data]);

  useEffect(() => {

    const arr = newData
    if (gender === "All") {
      setFilterData(data);
    } else {
      let tempdata = arr.filter((item) => item.gender == gender);
      setFilterData(tempdata);
      console.log(gender);
    }
  }, [gender]);

 

  useEffect(() => {
    const arr = newData
    if (department === "All") {
      setFilterData(data);
    } else {
      let tempdata = arr.filter(
        (item) => item.company.department == department
      );
      setFilterData(tempdata);
    }
  }, [department]);

  useEffect(() => {
    const arr = newData
    if (city === "All") {
      setFilterData(data);
    } else {
      let tempdata = arr.filter((item) => item.address.city == city);
      setFilterData(tempdata);
      console.log(gender);
    }
  }, [city]);

  return (
    <div className="container">
      <Search input={input} setInput={setInput} />
      <div className="filter-bar">
        <FormControl variant="filled" sx={{ m: 1 }} className="select-box">
          <InputLabel id="demo-simple-select-filled-label">
            Filter By Gender
          </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            {filterGender.map((item,index) => {
              return <MenuItem value={item} key={index}>{item}</MenuItem>;
            })}
          </Select>
        </FormControl>

        <FormControl variant="filled" sx={{ m: 1 }} className="select-box">
          <InputLabel id="demo-simple-select-filled-label">
            Filter By Department
          </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value);
            }}
          >
            {filterDepartment.map((item,index) => {
              return <MenuItem value={item} key={index}>{item}</MenuItem>;
            })}
          </Select>
        </FormControl>

        <FormControl variant="filled" sx={{ m: 1 }} className="select-box">
          <InputLabel id="demo-simple-select-filled-label">
            Filter By City
          </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          >
            {cityFilter.map((item, index) => {
              return (
                <MenuItem value={item} key={index}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
      <Grid item xs={12}>
        <TableData data={filterData} input={input} />
      </Grid>
    </div>
  );
}

export default App;
