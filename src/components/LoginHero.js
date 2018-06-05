import React, { Component } from 'react';
import styled from 'react-emotion';
import LogoWhite from '../images/LogoWhite.png';

const Container = styled.div`
  position: relative;
  background-color: #fa3155;
  padding: 50px 30px;
`;

const LoginText = styled.span`
  display: block;
  font-size: 2.2rem;
  color: #ffffff;
  font-weight: 300;
`;

const LogoContainer = styled.div`
  position: relative;
`;

const LogoImage = styled.img`
  display: block;
  width: 100px;
  margin: 0 auto 20px auto;
`;

const Text = styled.span`
  display: block;
  font-size: 1.1rem;
  color: #ffffff;
  font-weight: 300;
  text-align: center;
  letter-spacing: 3px;
`;
class LoginHero extends Component {
  render() {
    return (
      <Container>
        <LoginText>登入</LoginText>
        <LogoContainer>
          <LogoImage src={LogoWhite} />
          <Text>貓取值日生</Text>
        </LogoContainer>
      </Container>
    );
  }
}

export default LoginHero;
