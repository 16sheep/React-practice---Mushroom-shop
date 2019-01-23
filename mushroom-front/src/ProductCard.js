import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

const ProductCard = (props) => (
  <Card>
    <Card.Content>
      <Image src={""} size='tiny' centered/>
      <Card.Header>{""}</Card.Header>
      <Card.Meta>
        <span className='date'>{""}</span>
      </Card.Meta>
      <Card.Description>Quantity {""}</Card.Description>
      <Card.Description>{""}</Card.Description>
      <Button>Add to Cart</Button>
    </Card.Content>
  </Card>
)

export default ProductCard
