import React, {useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './write.scss'

function Write() {
  const [value, setValue] = useState('');
  return (
    <div className='write'>
        <div className='writer-content'>
            <input type='text' placeholder='Title'/>
            <div className='editorContainer'>
            <ReactQuill theme="snow" value={value} onChange={setValue} />
            </div>
        </div>
        <button className='btnPublish'>Publish</button>
        {/* <div className='menu'>
            <div className='item'>i1</div>
            <div className='item'>i2</div>
        </div> */}
    </div>
  )
}

export default Write