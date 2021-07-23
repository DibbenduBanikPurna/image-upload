import React from 'react';
import './App.css';
import { useState } from 'react';
import ShowPic from './Components/ShowPic';

function App() {

  const [pic,setPic]=useState('')
  const [upload,setUpload]=useState([])
  console.log(upload)

  const handleChange=(e)=>{
  
    setPic(e.target.files[0])
  }

 const  handleSubmit=(e)=>{
  e.preventDefault()
  const formData = new FormData();

		formData.append('avatar', pic);

		fetch(
			'http://localhost:4000/',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
        setUpload(result)
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};
	

  
  return (
    <div className="App">

    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="file" name="avatar"/>
      <input type="submit" value="submit"/>
    </form>
    {upload ? (
      <div className='row mt-5'>
        <div className='col-md-6 m-auto'>
          <h3 className='text-center'>{upload.fileName}</h3>
          <img style={{ width: '100%' }} src={upload.filePath} alt='' />
        </div>
      </div>
    ) : null}
    <ShowPic upload={upload} />
    </div>
   
  );
}

export default App;
