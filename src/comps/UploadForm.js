import React from 'react';
import { useState } from 'react';

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const types = ['image/png', 'jpeg'];
    const [error, setError] = useState('');

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
        } else {
            setFile(null);
            setError('please select an image file (png pr jpeg)')
        }
    }

  return (
   <form>
       <input type="file" onChange={changeHandler}/>
   </form>
  );
}

export default UploadForm;
