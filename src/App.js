import Header from './components/Header';
import SaleTicket from './components/SaleTicket';
import axios from 'axios'
import { useState, useEffect } from 'react';

const App = () => {

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
    <div className="App">
      <Header />
      <div className='container'>
        {dataCollection.map((data, index) =>
          <SaleTicket
          key={index} 
          data={data} 
          />
        )}     
        </div>
    </div>
  );
}

export default App;
