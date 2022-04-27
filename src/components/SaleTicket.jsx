import ItemList from "./ItemList"
const SaleTicket = ({ data }) => {

  return (
	<div className='sale-ticket'>
	<ItemList data={data} />
	<div className="order-info">
		<h6>{data.storeLocation}</h6>
		<h6>{data.customer.email}</h6>
		<h6>Rated service as a {data.customer.satisfaction} out of 5.</h6>
		</div>
	</div>
  )
}
export default SaleTicket