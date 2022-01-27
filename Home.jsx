import React from 'react';
import useFetch from './UseFetch';

const Home = () => {
    const [data] = useFetch("https://reqres.in/api/users?page=2");

  return <div>
      {data.map((el)=>(
          <div>{el.first_name}</div>
      ))}
  </div>;
};

export default Home;