import React, { Component } from 'react';
import ajax from '../ajax'
import Picks from './Picks';
import PropTypes from 'prop-types';

class NewPick extends Component {
  state = {
    title: '',
    body: '',
  }

  handleSubmit = event => {
    const { onSubmit } = this.props;
    const { title, body } = this.state;

    event.preventDefault();

    onSubmit({
      title,
      body
    });

    this.setState({ title: '', body: '' });
  };

  handleChange = event => {
    const { target } = event;
    const { value, name } = target;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  render() {
    const { title, body } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
              className="NewPick-input"
              name="title"
              placeholder="Title"
              type="text"
              value={title}
              onChange={this.handleChange}
            />
            <textarea
              className="NewPick-input"
              name="body"
              placeholder="Body"
              type="text"
              value={body}
              onChange={this.handleChange}
            />
            <input className="NewGrudge-submit button" type="submit" />
        </form>
        <Picks/>
      </div>
    );
  }
}

NewPick.propTypes = {
  onSubmit: PropTypes.func,
};

NewPick.defaultProps = {
  onSubmit: () => {},
};

export default NewPick;