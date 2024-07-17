# custom-hook

Web API Custom Hook

# How to use this Repo

1.  Clone this Repo to your application.
2.  No need to download axios lib for fetching data.
3.  Primary File:-Fetch.jsx
    secondary File:-CheckFetchFunction.jsx
    
5.  # Primary File over View

    import { useEffect, useState } from "react";
    
    const useFetch = (api) => {</br>
    const [data, setData] = useState(null);</br>
    const [error, setError] = useState(null);</br>
    const [loading, setLoading] = useState(true);</br>
    useEffect(() => {</br>
    const apiData = async () => {</br>
    try {</br>
    const data = await fetch(api);</br>
    const res = await data.json();</br>
    setData(res);</br>
    } catch (error) {</br>
    setError("api is not found plz put api in useFetch(\_\_\_)");</br>
    } finally {</br>
    setLoading(false);</br>
    }</br>
    };</br>
    apiData();</br>
    }, [api]);</br>
    return { data, error, loading };</br>
    };</br>
    export default useFetch;</br>

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
