import React, { Component } from 'react';
import styled from 'react-emotion';
import Check from '../images/Check.png';
import { Spring } from 'react-spring';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 10px 0;
  box-shadow: 0 6px 14px 0 rgba(0, 0, 0, 0.05);
  border-radius: 10000px;
  padding: 10px 20px;
  background-color: white;
  cursor: pointer;
`;

const Text = styled.p`
  font-size: 1.1rem;
  color: #fa3155;
  margin: 0 0 0 15px;
`;

const Circle = styled.div`
  width: 32px;
  height: 32px;
  background-color: #fa3155;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckImage = styled.img`
  width: 17px;
`;

class CheckBox extends Component {
  state = { isChecked: false };
  handleCheck = () => {
    this.setState(currentState => ({ isChecked: !currentState.isChecked }));
  };
  render() {
    const { text } = this.props;
    const { isChecked } = this.state;
    return (
      <Container onClick={this.handleCheck}>
        <Circle>
          {isChecked ? (
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
              {styles => <CheckImage src={Check} style={styles} />}
            </Spring>
          ) : null}
        </Circle>
        <Text>{text}</Text>
      </Container>
    );
  }
}

export default CheckBox;
