
import MockService from '../services'

const mockService = new MockService();

function questionsRequested() {
    return {
        type: 'FETCH_QUESTIONS_REQUEST'
    }
}

function questionsLoaded(newQuestions) {
    return {
        type: 'FETCH_QUESTIONS_SUCCESS',
        payload: newQuestions
    }
}

function questionsError(error) {
    return {
        type: 'FETCH_QUESTIONS_FAIL',
        payload: error
    }
}

export const fetchQuestions = (dispatch) => () => {
    dispatch(questionsRequested());
    mockService.getQuestions()
        .then((data) => dispatch(questionsLoaded(data)))
        .catch((error) => dispatch(questionsError(error)))
};



export const addedActiveQuestion = (questionId) => {
    return {
        type: 'QUESTION_ADDED_TO_ACTIVE',
        payload: questionId
    }
};


export const voice = (data) => {
    return {
        type: 'VOICE',
        payload: data
    }
};