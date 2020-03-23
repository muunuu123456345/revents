import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

export default class EventForm extends Component {
  render() {
    const { cancelFormOpen } = this.props;
    return (
      <Segment>
        <Form>
          <Form.Field>
            <label>Арга хэмжээний нэр</label>
            <input placeholder='Арга хэмжээний нэр' />
          </Form.Field>
          <Form.Field>
            <label>Арга хэмжээ болох огноо</label>
            <input type='date' placeholder='Арга хэмжээ болох огноо' />
          </Form.Field>
          <Form.Field>
            <label>Хот</label>
            <input placeholder='Хот' />
          </Form.Field>
          <Form.Field>
            <label>Арга хэмжээ болох газар</label>
            <input placeholder='Арга хэмжээ болох газрыг оруулна уу' />
          </Form.Field>
          <Form.Field>
            <label>Оруулж буй хүн</label>
            <input placeholder='Оруулж буй хүний нэрийг оруулна уу' />
          </Form.Field>
          <Button positive type='submit'>
            Илгээх
          </Button>
          <Button onClick={cancelFormOpen} type='button'>
            Цуцлах
          </Button>
        </Form>
      </Segment>
    );
  }
}
