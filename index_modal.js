import React from 'react';

export default props => {
  return (
    props.isShowModal &&
    <div className="modals">
      <form className="form">
      <p>Are you sure?</p>
      <button onClick={props.closeDropdown}>
        Yes
      </button>
      <button onClick={props.closeModal}>
        No
      </button>
      </form>
    </div>
  );
}