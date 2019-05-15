
import questionList from './questions';
import activeQuestion from './current_data';

const reducer = (state, action) => {
    return {
        questions: questionList(state, action),
        current_data: activeQuestion(state, action)
    }
};

export default reducer;