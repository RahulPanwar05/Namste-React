import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div  className="flex" style={{height:"100vh",flexDirection:"column", gap:"30px"}}>
        <h1>Oops!</h1>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
      </div>
    );
  } else {
    return <div>Oops</div>;
  }
}

export default Error;
