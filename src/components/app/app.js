import React from 'react';

import Questions from '../questions'
import { Question, Choice } from '../question';

const App = () => {
    return (
        <div>
            <h1>Test task</h1>
            <Choice />
            <Questions />
            <Question />
        </div>
    )
};

export default App;