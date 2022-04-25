import { useState, useEffect } from 'react';
import axios from 'axios';
import SaleTicket from './SaleTicket';

const List = () => {

	const [dataCollection, setDataCollection] = useState([])

	const getData = async () => {
		const res = await axios.get('http://localhost:5000/api/sales')
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
          <SaleTicket
          key={index} 
          data={data} 
          />
        )}
		</div>
	</div>
  )
}
export default List