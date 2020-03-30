import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

export default class EventForm extends Component {
  state = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  };

  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({
        ...this.props.selectedEvent
      });
    }
  }

  handleFormSubmit = evt => {
    evt.preventDefault();
    if (this.state.id) {
      this.props.updateEvent(this.state);
    } else {
      this.props.createEvent(this.state);
    }
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { cancelFormOpen } = this.props;
    const { title, date, city, venue, hostedBy } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.handleFormSubmit} autoComplete='off'>
          <Form.Field>
            <label>Арга хэмжээний нэр</label>
            <input
              name='title'
              onChange={this.handleInputChange}
              value={title}
              placeholder='Арга хэмжээний нэр'
            />
          </Form.Field>
          <Form.Field>
            <label>Арга хэмжээ болох огноо</label>
            <input
              name='date'
              onChange={this.handleInputChange}
              value={date}
              type='date'
              placeholder='Арга хэмжээ болох огноо'
            />
          </Form.Field>
          <Form.Field>
            <label>Хот</label>
            <input
              name='city'
              onChange={this.handleInputChange}
              value={city}
              placeholder='Хот'
            />
          </Form.Field>
          <Form.Field>
            <label>Арга хэмжээ болох газар</label>
            <input
              name='venue'
              onChange={this.handleInputChange}
              value={venue}
              placeholder='Арга хэмжээ болох газрыг оруулна уу'
            />
          </Form.Field>
          <Form.Field>
            <label>Оруулж буй хүн</label>
            <input
              name='hostedBy'
              onChange={this.handleInputChange}
              value={hostedBy}
              placeholder='Оруулж буй хүний нэрийг оруулна уу'
            />
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
