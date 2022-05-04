import { apiGet } from '../services/api';
import React, { useEffect, useState } from 'react';
import Table from './muiTable';



export default function Home() {

  const [listingData, setListingData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      let newRes = await apiGet('/api/property');
      console.log(newRes.data);
      setListingData(newRes.data)
    }
    fetchData();

  },[]);

  return(
  <Table
  listing={listingData}
/>)

}

