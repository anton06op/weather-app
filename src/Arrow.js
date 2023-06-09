import { useState } from 'react';
import LifeComponent from './Life';
const TestArrow = (props) => {
    console.log('TestArrow');
    const [count, setCount] = useState(0);
    return (
        <div>
            Hello {props.firstName} {props.lastName} <br />
            {count ? (<>count: {count}</>) : ''} <br />
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => count && setCount(count - 1)}>-</button>
            <LifeComponent setCount={setCount} count={count} />
        </div>
    );
};

TestArrow.defaultProps = {
    firstName: 'XXX',
    lastName: 'YYY'
};

export default TestArrow;
