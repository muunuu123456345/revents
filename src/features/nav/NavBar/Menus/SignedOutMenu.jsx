import React from "react";
import { Menu, Button } from "semantic-ui-react";

const SignedOutMenu = ({ signIn }) => {
  return (
    <Menu.Item position='right'>
      <Button onClick={signIn} basic inverted content='Нэвтрэх' />
      <Button
        basic
        inverted
        content='Бүртгүүлэх'
        style={{ marginLeft: "0.5em" }}
      />
    </Menu.Item>
  );
};
export default SignedOutMenu;
