import React from 'react';
import PropTypes from 'prop-types';
import styles from './Creator.scss';
import Button from '../Button/Button';

class Creator extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    action: PropTypes.func,
  }

  static defaultProps = {
    text: 'Add new item',
  }

  state = {
    value: '',
    visibleButtons: false,
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      visibleButtons: event.target.value.length > 0,
    });
  }

  handleOK = () => {
    const { action } = this.props;
    if(this.state.value != ''){
      action(this.state.value);
      this.setState({
        value: '',
        visibleButtons: false,
      });
    }
  }

  handleCancel = () => {
    if(window.confirm('Do you really want to cancel adding item ?')){
      this.setState({
        value: '',
        visibleButtons: false,
      });
    }
  }

  render() {
    const { text } = this.props;
    return (
      <div className={styles.component}>
        <input
          type='text'
          placeholder={text}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className={styles.buttons + (this.state.visibleButtons ? ' ' + styles.buttonsShown : '')}>
          <Button onClick={this.handleOK} variant=''>OK</Button>
          <Button onClick={this.handleCancel} variant='danger'>cancel</Button>
        </div>
      </div>
    );
  }
}

export default Creator;
