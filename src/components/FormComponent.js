import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { initializeUsers } from "../redux-store/actions/userAction";
import Select from "./Select";
import SingleInput from "./SingleInput";
import TextArea from "./TextArea";
import MyMap from "./MyMap";

function FormComponent() {
  const [data, setData] = useState({});
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [id,setId] = useState();
  const [lon, setlon] = useState();
  const [lat, setlat] = useState();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.allUsers.data);
  function getUsers() {
    axios({
      url: "https://jsonplaceholder.typicode.com/users",
    }).then((response) => {
      dispatch(initializeUsers(response.data));
    });
  }
  console.log(data);
  useEffect(() => {
    getUsers();
  }, []);

  const uservalues = users.map((value) => value.username);
  const handleChange = (event) => {
    setData(event.target.value);
    const userSelected = event.target.value;
    users.map((value) => {
      if (userSelected === value.username) {
        setId(value.id)
        const lon = value.address.geo.lng;
        const lat = value.address.geo.lat;
        setlon(lon);
        setlat(lat);
      }
    });

  };
  const payload = {
    title: title,
    body: body,
    userId: id,
  };

      
  console.log("data", payload);

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleBodyChange(event) {
    setBody(event.target.value);
  }
  
  function handleClearForm(){
    setTitle('');
    setBody('');
    setId('');
  }

  function submitPayload() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Request failed');
    }).then(data => {
      console.log(data);
    }).catch(error => {
      console.error(error);
    });
    handleClearForm();
  }
  return (
    <>
    <div>
      <Select
        name={"User Name"}
        placeholder={"Choose User Name"}
        controlFunc={handleChange}
        options={uservalues}
        selectedOption={data}
      />
      <SingleInput
        inputType={"text"}
        title={"title"}
        name={"name"}
        controlFunc={handleTitleChange}
        content={title}
        placeholder={"title"}
      />
      <TextArea
        title={"description"}
        rows={5}
        resize={false}
        content={body}
        name={"body"}
        controlFunc={handleBodyChange}
        placeholder={"description"}
      />
      <button
        type="submit"
        className="btn btn-primary float-right"
        onClick={submitPayload}
      >Submit</button>
      <button
        className="btn btn-danger float-left"
        onClick={handleClearForm}
      >
        Clear form
      </button>
    </div>
    <MyMap lat={lat} lon={lon}/>
    </>

  );
}

export default FormComponent;
