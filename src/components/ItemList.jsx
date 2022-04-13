const ItemList = ({ data }) => {
  return (
	<div className="item-list">
		<h5>Item Order</h5>
		{data.items.map((item) => <h6>{item.name}</h6>)}
	</div>
  )
}
export default ItemList