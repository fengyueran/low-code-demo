import { useDispatch, useSelector } from 'react-redux';

import { selectors, actions } from './redux';
import { Counter } from './counter';

export const CounterContainer = () => {
  const value = useSelector(selectors.value);
  const dispatch = useDispatch();

  const increment = () => dispatch(actions.increment());
  const decrement = () => dispatch(actions.decrement());

  return <Counter value={value} increment={increment} decrement={decrement} />;
};
