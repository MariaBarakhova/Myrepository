import React from 'react';

export default props => {

    return (
        props.isShowModal && 
      <div>
        <button
        onClick={props.closeModal}
        className ="btn btn-success"
        >
            Close modal
        </button>
    </div>
    );
  };