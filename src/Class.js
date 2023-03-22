// старый подход к созданию компонентов React - классовый

import React from 'react'; // было необходимо в каждом файле импортировать React

export default class ClassComponent extends React.Component {
    render() {
        return (
        <div>Hello from ClassComponent</div>
        );
    };
}