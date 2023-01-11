import './App.css';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #3c5b69;
  color: #b9eaff;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${(props) =>
    props.primary &&
    css`
      background: #009cd5;
      color: white;
    `}
`;

function App() {
  return (
    <>
      <Button1 />
      <Button2 />
      <Container>
        <Button>Normal Button</Button>
        <Button primary>Primary Button</Button>
      </Container>
      <TailwindComponent />
    </>
  );
}

function TailwindComponent() {
  return (
    <div>
      <h1 className='text-8xl'>안녕!</h1>
      <button className='bg-blue-600 rounded-xl px-2'>Button</button>
    </div>
  );
}

export default App;
