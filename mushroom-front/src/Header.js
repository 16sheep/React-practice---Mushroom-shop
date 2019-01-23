import React from 'react'
import { Header, Icon, Text, Button } from 'semantic-ui-react'

 const NavBar = () => {
  return (<Header>
            <h1>Mushroom Shop</h1>
              <Header sub>
                  <Button>
                    <Icon name='cart arrow down' size='small' />
                 </Button>
              </Header>
          </Header>)
}

export default NavBar
