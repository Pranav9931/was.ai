"use client";
import styled from "styled-components";

const AppLayout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  height: 100svh;
  font-family: Roboto Mono, Inter, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  background: linear-gradient(90deg, #00ff00, #ffff00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-family: Inter, sans-serif;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #999;
  margin-top: 0.5rem;
  text-align: center;
  font-family: Roboto Mono, Inter, sans-serif;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled.button`
  background-color: #111;
  color: #fff;
  border: none;
  border-radius: 30px;
  padding: 2rem 1rem;
  font-size: 0.9rem;
  text-align: center;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  font-family: Roboto Mono, Inter, sans-serif;


  &:hover {
    transform: translateY(-5px);
    // box-shadow: 0px 5px 15px rgba(255, 255, 255, 0.2);
  }
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 0.5rem;
`;

export default function Home() {
  return (
    <>
      <AppLayout>
        <Title>HELLO HUMANS</Title>
        <Subtitle>VERIFY YOURSELF</Subtitle>
        <ButtonContainer>
          <Button>
            <Icon src="/anon-icon.png" alt="Anon Aadhaar" />
            VERIFY USING <br /> ANON AADHAAR
          </Button>
          <Button>
            <Icon src="/semaphore-icon.png" alt="Semaphore" />
            CREATE SEMAPHORE <br /> IDENTITY
          </Button>
          <Button>
            <Icon src="/octo-icon.png" alt="Octo" />
            LOGIN USING <br /> OCTO
          </Button>
          <Button>
            <Icon src="/anon-icon.png" alt="Anon Aadhaar" />
            VERIFY USING <br /> ANON AADHAAR
          </Button>
        </ButtonContainer>
      </AppLayout>
    </>
  );
}
