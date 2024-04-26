import axios from 'axios';
import { useEffect, useState } from 'react';
import useAuth from './useAuth';

const useArts = () => {
const [myArts,setMyArts] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [toggle, setToggle] = useState(false);
const {user} = useAuth();
const refetch = () => {
    setToggle(!toggle)
}

useEffect(()=>{
    setIsLoading(true);
    axios.get(`http://localhost:7284/arts/${user?.email}`)
    .then(res => {
        setIsLoading(false)
        setMyArts(res.data)
    })
    .catch(error => {
        console.log(error)
    })
  },[toggle])
  
return {isLoading,myArts,refetch};

}

export default useArts