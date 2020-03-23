import React, { Component } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'

 class NavBar extends Component {
    render() {
        return (
               <Menu inverted fixed="top">
                 <Container>
                   <Menu.Item header>
                     <img src="assets/logo.png" alt="logo" />
                     Re-vents
                   </Menu.Item>
                   <Menu.Item name="Арга хэмжээ" />
                   <Menu.Item>
                     <Button floated="right" positive inverted content="Арга хэмжээ үүсгэх" />
                   </Menu.Item>
                   <Menu.Item position="right">
                     <Button basic inverted content="Нэвтрэх" />
                     <Button basic inverted content="Гарах" style={{marginLeft: '0.5em'}} />
                   </Menu.Item>
                 </Container>
               </Menu>
        )
    }
}
export default NavBar