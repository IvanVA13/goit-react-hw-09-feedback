import { Component } from 'react';
import PropTypes from 'prop-types';

class Notification extends Component {
  render() {
    return this.props.message;
  }
}

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
