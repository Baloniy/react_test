import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchQuestions, addedActiveQuestion } from '../../actions';


class Questions extends Component {

    componentDidMount() {
        this.props.fetchQuestions();
    }

    getRandomQuestion(min, max) {
        let randomId = Math.floor(Math.random() * (max - min + 1)) + min;
        this.props.onAddedToActiveQuestion(randomId);
    }

    render() {
        const { questions, loading, error } = this.props;

        if(loading) {
            return <div>Loading....</div>
        }

        if(error) {
            return <div>Error....</div>
        }

        return (
            <Fragment>
                <p>Questions:</p>
                <ul>
                    {
                        questions.map((item) => {
                            return  <li key={item.id}>{item.text}</li>
                        })
                    }
                </ul>

                <button onClick={() => this.getRandomQuestion(1, 5)}>Pick random question</button>
            </Fragment>

        )
    }
}


const mapStateToProps = ({ questions: { questions, loading, error }}) => {
    return {
        questions,
        loading,
        error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchQuestions: fetchQuestions(dispatch),
        onAddedToActiveQuestion: (id) => dispatch(addedActiveQuestion(id))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Questions);