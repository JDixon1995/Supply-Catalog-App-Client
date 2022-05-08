import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText
} from 'reactstrap'

const OrderCard = ({ data }) => {
  return (
	<div>
	<Card
	body
    color="secondary"
    outline
	>
    	<CardBody>
      		<CardTitle tag="h5">
        	{data.customer.email}
      		</CardTitle>
      	<CardSubtitle
        className="mb-2 text-muted"
        tag="h6">
        Satisfaction Rating: {data.customer.satisfaction} out of 5 stars.
      </CardSubtitle>
	  <CardSubtitle
	  	className="mb-2 text-muted"
		tag="h6"
	  >
		Order was placed at the {data.storeLocation} store.
	  </CardSubtitle>
      <CardText>
        {data.items.map(item => 
		<h6>{item.name}</h6>
		)}
      </CardText>
    </CardBody>
  </Card>
	</div>
  )
}
export default OrderCard