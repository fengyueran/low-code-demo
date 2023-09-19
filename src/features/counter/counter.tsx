import { Button } from 'antd';
import styled from 'styled-components';

const Container = styled.button`
  width: 200px;
  height: 200px;
  margin-top: 200px;
`;

export const Counter = () => {
  return (
    <Container>
      <Button type="primary">-</Button>
      <Button type="primary">+</Button>
      <div>value</div>
    </Container>
  );
};
