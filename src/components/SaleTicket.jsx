import ItemList from "./ItemList"
const SaleTicket = ({ data }) => {

  return (
	<div className='sale-ticket'>
		<ItemList data={data} />
		<div className="order-info">
			<p>{data.storeLocation}</p>
			<p>{data.customer.email}</p>
			<p>Rated service as a {data.customer.satisfaction} out of 5.</p>
		</div>
	</div>
  )
}
export default SaleTicket