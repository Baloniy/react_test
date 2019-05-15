
function getActiveQuestion(state, questionId) {
    const { questions : { questions }} = state;
    return questions.find(item => item.id === questionId);
}

const current_data = (state, action) => {
    if (state === undefined) {
        return {
            question: null,
            voiced_question: null
        }
    }
    switch (action.type) {
        case 'QUESTION_ADDED_TO_ACTIVE':
            const { current_data } = state;
            return Object.assign({}, current_data, {
                question: getActiveQuestion(state, action.payload)
            });

        case 'VOICE':
            const { questionId, answerId } = action.payload;
            const voicedQuestion = getActiveQuestion(state, questionId);
            const voicedAnswer = voicedQuestion.answers.find(answer => answer.id === answerId);
            const voicedAnswerIndex = voicedQuestion.answers.findIndex(answer => answer.id === answerId);

            const otherAnswers = [
                ...voicedQuestion.answers.slice(0, voicedAnswerIndex),
                ...voicedQuestion.answers.slice(voicedAnswerIndex + 1)
            ];

            return Object.assign({}, state.current_data, {
                voiced_question: {
                    voicedAnswer,
                    otherAnswers
                }
            });

        default:
            return state.current_data;
    }
};

export default current_data;