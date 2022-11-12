import React from 'react';
import'./write.css'
import Modal from '../../modal';
function write(){
  return (

    <div className='main-container'>










      {/* end here  */}
      <Modal/>
<form action="http://localhost:5000/fileupload" method='post' encType="multipart/form-data">


<div>
  <input type="file" name="" id=""  placeholder='upload a file here' />
</div>
<div>
  <input type="submit"  />
</div>
  
</form>
        <form onSubmit={(e)=>e.preventDefault()}>
          <div className='lab'>
          <label htmlFor="">Story Details</label>
          </div>
          <div className='lab'>

          <label htmlFor="">Title
          </label></div>
          <div className='lab'><input type="text" name="" id=""  placeholder='Untitled Story'/></div>
          
          <div className='lab'>
            Description
          </div>
          <div className='description'>
          <textarea name="" id="" cols="50" rows="10"></textarea></div>
          
            <div className='lab'><label htmlFor="">Main Characters</label></div>
            <div className='lab'><input type="text" placeholder='type main characters' />
          </div>
          <div className='lab'> <label htmlFor="">Category</label>
          </div>
          <div className='lab'><input type="text" placeholder='select a category' /></div>
          <button>Submit</button>
        


        </form>
    </div>
    
  )
}

export default write