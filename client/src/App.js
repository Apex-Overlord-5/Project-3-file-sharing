import { useRef, useState, useEffect } from 'react';
// import logo from './logo.svg';

import './App.css';
import { uploadFile } from './services/api';



function App() {
  const [file, setFile]= useState('');
  const [result , setResult]= useState('');
const fileInputRef =useRef();

  const logo='https://images.unsplash.com/photo-1504711331083-9c895941bf81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80';

  useEffect(()=>{
    const getImage=async()=>{
      if(file){
        const data= new FormData();
        data.append("name",file.name);
        data.append("file", file);

      let response= await uploadFile(data);
      setResult(response.path);
      }
    }
    getImage();
  }, [file])
  const onUploadClick = ()=>{
    fileInputRef.current.click();
  }
  console.log(file);
  return (
   <div className='container'>
    <img src={logo} alt="banner" />
    <div className='wrapper'>
      <h1 >File Sharing :) </h1>
      <p>Upload your file and get a Link to share :D </p>
      
      <button onClick={()=>onUploadClick()}>Upload File</button>
      <input type="file"
      ref={fileInputRef}
      style={{display: 'none'}}
      onChange={(e)=>setFile(e.target.files[0])}
      />
      <a href={result} target="blank">{result}</a>
      </div>
   </div>

  );
}

export default App;

