# custom-hook

Web API Custom Hook

# How to use this Repo

1.  Clone this Repo to your application.
2.  No need to download axios lib for fetching data.
3.  Primary File:-Fetch.jsx
    secondary File:-CheckFetchFunction.jsx
4.  # Primary File over View

    import { useEffect, useState } from "react";
    const useFetch = (api) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
    const apiData = async () => {
    try {
    const data = await fetch(api);
    const res = await data.json();
    setData(res);
    } catch (error) {
    setError("api is not found plz put api in useFetch(\_\_\_)");
    } finally {
    setLoading(false);
    }
    };
    apiData();
    }, [api]);
    return { data, error, loading };
    };
    export default useFetch;

5.  # Secondary File over View

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

6.  Copy All line from 5th point and peast in you application
7.  Modify the changes in your project.
