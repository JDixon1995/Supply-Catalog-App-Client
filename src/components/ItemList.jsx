const ItemList = ({ data }) => {
  return (
	<div>
		<h5>Item Order</h5>
		<div className="item-list">
		{data.items.map((item) => <h6>{item.name}</h6>)}
		</div>
	</div>
  )
}
export default ItemList