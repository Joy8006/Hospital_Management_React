import React from "react";

const AddSearch = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-primary position-absolute start-50"
      >
        Add Patient
      </button>

      <button
        type="button"
        className="btn btn-outline-success position-absolute  end-50"
      >
        Add User
      </button>
    </>
  );
};

export default AddSearch;
