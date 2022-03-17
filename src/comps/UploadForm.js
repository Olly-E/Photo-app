import React from 'react';
import { useState } from 'react';

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const types = ['image/png', 'jpeg'];
    const [error, setError] = useState(null);

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError(null)
        } else {
            setFile(null);
            setError('please select an image file (png pr jpeg)')
        }
    }

  return (
   <form>
       <input type="file" onChange={changeHandler}/>
       <div className="output">
           {error && <div className="error">{error}</div>}
           {file && <div className="file-name">{file.name}</div>}
       </div>
   </form>
  );
}

export default UploadForm;
