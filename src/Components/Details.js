import React from "react";

const Details = (props) => {
  // return <h1>Hello There</h1>;
  return (
    <pre>
      <code>{JSON.stringify(props, null, 4)}</code>
    </pre>
  );
};

export default Details;
