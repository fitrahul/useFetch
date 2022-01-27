import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        // fetch(url)
        // .then((res)=>{return res.json()})
        // .then((res)=>{setData(res.data)})
        async function request() {
            var res = await fetch(url);
            var data = await res.json();
            setData(data.data);
        }
        request();
    }, [url])
    return [data];
};

export default useFetch;
