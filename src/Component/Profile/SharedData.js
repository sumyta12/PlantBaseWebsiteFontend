import  { useEffect, useState } from 'react';
import UseAuth from '../../Context/UseAuth';

const SharedData = () => {
    const { usersdata } = UseAuth();
    const [user, setUser] = useState({});
    useEffect(() => {
      if (usersdata.email) {
        const url = `http://localhost:5000/plantbasaeuser?email=${usersdata?.email}`;
  
        fetch(url)
          .then((res) => res.json())
          .then((data) => setUser({
            email : data.email,
            type: data.type
          }));
      }
    }, [usersdata.email]);
    return {
        user
    };
};

export default SharedData;