import React, { useCallback, useRef, useState } from 'react';
import imglyRemoveBackground from "@imgly/background-removal";
function ImageUpload() {
  const [images, setImages] = useState([]);
  const ref = useRef();
  // const handleImageUpload = async (event) => {
    // console.log(ref);
    // const file = event.target.files[0];
    // const blob = await imglyRemoveBackground(file);
    // const url = URL.createObjectURL(blob);
    // setImage(url);
  // }
   
  const handleImageUpload = (()=>{
    if (ref.current) {
      if (ref.current.files.length !=0) {
         Array.from(ref.current.files).map( async(e)=>{
          
          const blob = await imglyRemoveBackground(e)
          const url = URL.createObjectURL(blob);
          setImages([...images, {name: 'hi',url:url}]);
          console.log(images);
        })
      }
    }
  })
  return (
    <div>
      <div className="row mt-4">
        <div className="col-md-12 card mt-4">
          <form>
            <div className="form-group">
              <label htmlFor="fileInput">Select a File: </label>
              <input ref={ref}  multiple id="fileInput" className="form-control"
                type="file" />
            </div>
            <input className="btn btn-primary m-1"
              type="button" onClick={handleImageUpload}
              value="Upload" />
          </form>

          <button className="btn btn-warning"
            onClick={handleImageUpload}>
            Download
          </button>
          <div className="row">
                <table className="col-md-12 text-center" id="list-images">
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                    </tr>
                    {
                      images && images.map((i,image)=>{
                        console.log(image);
                        return(
                          <tr key={i}>
                        <td>{image.name}</td>
                        <td><img style={{width: 50, height: 50}} src={image.url} alt=""/></td>
                    </tr>
                        )
                      })
                    }
                </table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ImageUpload;