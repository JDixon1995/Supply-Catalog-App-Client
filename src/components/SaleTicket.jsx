const SaleTicket = ({ data }) => {
  return (
	<div className='sale-ticket'>
		<h5>Sale</h5>
		<p>{data.customer.email}</p>
		<p>{data.customer.age}</p>
		<p>{data.couponUsed.toString()}</p>
	</div>
  )
}
export default SaleTicket