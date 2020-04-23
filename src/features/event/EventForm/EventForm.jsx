import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Form, Button } from "semantic-ui-react";
import { createEvent, updateEvent } from "../eventActions";
import cuid from "cuid";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: "",
  };

  if (eventId && state.events.length > 0) {
    event = state.events.filter((event) => event.id === eventId)[0];
  }
  return { event };
};
const actions = {
  createEvent,
  updateEvent,
};

class EventForm extends Component {
  state = { ...this.props.event };

  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({
        ...this.props.selectedEvent,
      });
    }
  }

  handleFormSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.id) {
      this.props.updateEvent(this.state);
      this.props.history.push(`/events/${this.state.id}`);
    } else {
      const newEvent = {
        ...this.state,
        id: cuid(),
        hostPhotoURL: "/assets/user.png",
      };
      this.props.createEvent(newEvent);
      this.props.history.push(`/events`);
    }
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
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
          <Button onClick={this.props.history.goBack} type='button'>
            Цуцлах
          </Button>
        </Form>
      </Segment>
    );
  }
}
export default connect(mapState, actions)(EventForm);
