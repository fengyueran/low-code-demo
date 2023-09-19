import { Button } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 200px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface Props {
  value: number;
  increment: () => void;
  decrement: () => void;
}

export const Counter = (props: Props) => {
  const { value, increment, decrement } = props;
  return (
    <Container>
      <div>{value}</div>
      <Row>
        <Button type="primary" onClick={decrement}>
          -
        </Button>
        <div style={{ marginRight: 10 }} />
        <Button type="primary" onClick={increment}>
          +
        </Button>
      </Row>
    </Container>
  );
};
