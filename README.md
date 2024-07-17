# custom-hook

Web API Custom Hook

# How to use this Repo

1.  Clone this Repo to your application.
2.  No need to download axios lib for fetching data.
3.  Primary File:-Fetch.jsx
    secondary File:-CheckFetchFunction.jsx
    
5.  # Primary File over View
```javascript
    import { useEffect, useState } from "react";
    
    const useFetch = (api) => { 
    const [data, setData] = useState(null); 
    const [error, setError] = useState(null); 
    const [loading, setLoading] = useState(true); 
    useEffect(() => {</br>
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
```
6.  # Secondary File over View

        import React, { useState } from "react";</br>
        import useFetch from "./fetch";</br>

        const CheckFetchFunction = () => {</br>
        const apiValue = "https://jsonplaceholder.typicode.com/photos";</br>
        const { data, error, loading } = useFetch(apiValue);</br>
        if (loading === true) {</br>
        console.log("...loading");</br>
        } else {</br>
        console.log(data);</br>
        }</br>
        return (</br>
        <div></br>
        {loading</br>
        ? "...loading"</br>
        : `${data.map((i) => {</br>
                  return (</br>
                  <></br>
                      <div></br>
                      <span>{i.title}</span></br>
                      </div></br>
                  </></br>
                  );</br>
              })}`}</br>
        </div></br>
        );</br>
        };</br>

        export default CheckFetchFunction;

7.  Copy All line from 5th point and peast in you application
8.  Modify the changes in your project.
