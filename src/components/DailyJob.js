import React, { Component } from 'react';
import styled from 'react-emotion';
import CheckBox from './CheckBox';

const Container = styled.div`
  position: relative;
  padding: 20px 10px 0;
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 300;
  margin: 0 0 20px 0;
  padding: 0 0 0 20px;
`;

const Small = styled.span`
  font-size: 0.75rem;
  opacity: 0.7;
`;

const CheckBoxContainer = styled.div``;

class DailyJob extends Component {
  render() {
    return (
      <Container>
        <Title>
          值日生的每日任務 <Small>(自己勾)</Small>
        </Title>
        <CheckBoxContainer>
          <CheckBox text="倒垃圾 (滿了在倒)" />
          <CheckBox text="掃落葉 (有落葉在掃)" />
        </CheckBoxContainer>
      </Container>
    );
  }
}

export default DailyJob;
