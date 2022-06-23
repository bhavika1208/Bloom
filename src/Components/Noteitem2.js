import React from "react";

const Noteitem2 = (props) => {
const { note } = props;

  return (
    <div className="p-3">
      <div className="card">
        <div className="card-body flex-fill">
          <div className="d-flex align-items-center align-self-stretch">
          <h5 className="card-title align-self-stretch flex-grow-1">{note.title}</h5>
          {/* <div div class="card-header d-flex justify-content-end">
          
            </div> */}
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem2;
