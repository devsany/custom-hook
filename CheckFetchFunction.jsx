import React, { useState } from "react";
import useFetch from "./fetch";

const CheckFetchFunction = () => {
  const apiValue = "https://jsonplaceholder.typicode.com/photos";
  const { data, error, loading } = useFetch(apiValue);
  if (loading === true) {
    console.log("...loading");
  } else {
    console.log(data);
  }

  return (
    <div>
      {loading
        ? "...loading"
        : `${data.map((i) => {
            return (
              <>
                <div>
                  <span>{i.title}</span>
                </div>
              </>
            );
          })}`}
    </div>
  );
};

export default CheckFetchFunction;
