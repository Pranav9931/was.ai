"use client"
import Image from "next/image";
import styled from "styled-components";

const AppLayout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  height: 100svh;
  font-family: Roboto Mono, Inter, sans-serif;
`

export default function Home() {
  return (
    <>
      <AppLayout>
        Hello
      </AppLayout>
    </>
  );
}
