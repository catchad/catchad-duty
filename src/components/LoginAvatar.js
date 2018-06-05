import React, { Component } from 'react';
import styled from 'react-emotion';
import employees from '../data/employees';
import keyBy from 'lodash/keyBy';
import { withRouter } from 'react-router-dom';

const employeesWithId = keyBy(employees, 'name');

const Container = styled.div`
  position: relative;

  width: 33.333333333333%;

  margin: 0 0 20px 0;

  cursor: pointer;

  @media screen and (min-width: 375px) {
    width: 25%;
  }
  @media screen and (min-width: 512px) {
    width: 20%;
  }
`;

const AspectRaioContainer = styled.div`
  position: relative;
  border-radius: 100%;
  overflow: hidden;
  margin: 0 auto 8px auto;
  width: 57px;

  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: 100%;
  }
`;

const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;
const NameText = styled.span`
  display: block;
  font-size: 0.75rem;
  text-align: center;
  font-weight: 300;
`;

class LoginAvatar extends Component {
  handleClick = () => {
    const { history } = this.props;
    history.push('/');
  };
  render() {
    const { name } = this.props;
    return (
      <Container onClick={this.handleClick}>
        <AspectRaioContainer>
          <Image
            style={{
              backgroundImage: `url(${employeesWithId[name].imageLink})`
            }}
          />
        </AspectRaioContainer>
        <NameText>{name}</NameText>
      </Container>
    );
  }
}

export default withRouter(LoginAvatar);
