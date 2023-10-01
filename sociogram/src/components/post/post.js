import React, {useState} from 'react';

const Post =() => {
   const [description,SetDescription]=useState("")
   const handleDescription=(e)=>{
    SetDescription(e.target.value)
   }
   const handleSubmit=(description)=>{
    
        
   }
    return(
        <div>
            <form>
                <div>
                    <label>Post</label>
                    <input onChange={handleDescription} className="input"value={description} type="text" />
                </div>
                <div>
                <input type="file" name="poster" accept="image/png, image/jpeg" />
                </div>
                <button onClick={handleSubmit} className="btn" type="submit">Submit</button>
            </form>
        </div>
    )
}


export default Post;