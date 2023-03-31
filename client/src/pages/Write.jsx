import React, {useState} from 'react'
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './write.scss'

function Write() {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  // const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate()

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            desc: value,
            img: file ? imgUrl : "",
          })
        : await axios.post(`/posts/`, {
            title,
            desc: value,
            img: file ? imgUrl : "",
            // date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
          navigate("/")
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className='write'>
        <div className='writer-content'>
            <input type='text' placeholder='Title' name='title' onChange={e=>setTitle(e.target.value)}/>
            <div className='editorContainer'>
            <ReactQuill theme="snow" value={value} onChange={setValue} />
            </div>
        </div>
        {/* <button className='btnPublish' onClick={handleClick}>Publish</button> */}
        {/* <div className='menu'>
            <div className='item'>i1</div>
            <div className='item'>i2</div>
        </div> */}

    <div className="menu">
      <div className="item">
        <h1>Publish</h1>
        <span>
          <b>Status: </b> Draft
        </span>
        <span>
          <b>Visibility: </b> Public
        </span>
        <input
          style={{ display: "none" }}
          type="file"
          id="file"
          name=""
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label className="file" htmlFor="file">
          Upload Image
        </label>
        <div className="buttons">
          <button>Save as a draft</button>
          <button onClick={handleClick}>Publish</button>
        </div>
      </div>
    </div>
    </div>


  )
}

export default Write