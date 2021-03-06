import { useState, useEffect } from 'react';
import axios from 'axios';
import OrderCard from './OrderCard'

const InStoreList = () => {

	const [dataCollection, setDataCollection] = useState([])

	const getData = async () => {
		const res = await axios.get('http://localhost:5000/api/sales/store')
		const data = await res.data
		setDataCollection(data)
	  }

	  useEffect(() => {
		getData()
	  }, [])

  return (
	<div>
		<div className='container'>
        {dataCollection.map((data, index) =>
          <OrderCard
          key={index} 
          data={data} 
          />
        )}
		</div>
	</div>
  )
}
export default InStoreList