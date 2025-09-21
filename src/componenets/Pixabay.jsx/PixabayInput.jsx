import React, { useRef } from "react";

export default function PixabayInput(props) {
  const inputRef = useRef();

  const onSearchClick = () => {
    props.doApi(inputRef.current.value);
  };

  return (
    <div className="bg-warning p-2">
      <div className="col-md-6 d-flex">
        <input
          ref={inputRef}
          type="text"
          className="form-control"
          placeholder="search for images..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              props.doApi(inputRef.current.value);
            }
          }}
        />
        <button onClick={onSearchClick} className="btn btn-info ms-2">
          search
        </button>
      </div>
    </div>
  );
}
