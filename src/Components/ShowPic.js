import React from 'react';

const ShowPic = ({upload}) => {
    console.log(upload)
    return (
        <div>
             <div className='col-md-4 m-auto'>
                 <div className="card">
               
                     <div className="card-body">
                     <h3 className='text-center'>{upload.fileName}</h3>
                     </div>
                 </div>
          
          
        </div>
        </div>
    );
};

export default ShowPic;