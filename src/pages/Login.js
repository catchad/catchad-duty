import React, { Component } from 'react';
import styled from 'react-emotion';
import LoginHero from '../components/LoginHero';
import LoginAvatar from '../components/LoginAvatar';
import employees from '../data/employees';

const Container = styled.div`
  position: relative;
`;

const BottomContainer = styled.div`
  position: relative;
`;

const WhoAreYou = styled.span`
  display: block;
  font-size: 0.75rem;
  opacity: 0.7;
  font-weight: 300;
  padding: 30px 0 20px 0;
  text-align: center;
`;

const LoginAvatarContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px 16px 0 16px;
  max-width: 700px;
  margin: 0 auto;
`;

class Login extends Component {
  render() {
    return (
      <Container>
        <LoginHero />
        <BottomContainer>
          <WhoAreYou>你是誰？</WhoAreYou>
          <LoginAvatarContainer>
            {employees.map((item, index) => {
              const { name } = item;
              return <LoginAvatar key={index} name={name} />;
            })}
          </LoginAvatarContainer>
        </BottomContainer>
      </Container>
    );
  }
}

export default Login;
