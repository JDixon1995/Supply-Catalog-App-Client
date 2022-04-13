const SaleTicket = ({ data }) => {
  return (
	<div className='sale-ticket'>
		<h3>Ticket Info</h3>
		<div className="order-info">
			<p>{data.customer.email}</p>
			<p>{data.customer.age}</p>
			<p>{data.couponUsed.toString()}</p>
		</div>
	</div>
  )
}
export default SaleTicket