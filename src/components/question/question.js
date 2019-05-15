import React, { Component, Fragment} from 'react';
import { connect } from 'react-redux';

import { voice } from '../../actions';

class Question extends Component {

    state = {
        answerId: null
    };


    setAnswer = (e) => {
        this.setState({
            answerId: parseInt(e.target.value)
        })
    };


    handleVoice = (questionId) => {
        const { answerId } = this.state;
        this.props.voice({ questionId, answerId });

        this.setState({ answerId: null });
    };

    render() {
        const { activeQuestion } = this.props;

        if (activeQuestion === null) {
            return '';
        }

        const { answerId } = this.state;
        return (
            <Fragment>
                <p><strong>Picked question is: </strong></p>
                <p>{ activeQuestion.text }</p>
                {
                    activeQuestion.answers.map((answer) => {
                       return <label key={answer.id}>
                           <input type="radio"
                                onChange={this.setAnswer}
                                  checked={ answerId === answer.id}
                                value={ answer.id }
                           />
                           { answer.text }
                       </label>
                    })
                }
                <button onClick={ () => this.handleVoice(activeQuestion.id) }>Voice</button>
            </Fragment>

        )
    }
}

const mapStateToProps = ( {current_data} ) => {
    return {
        activeQuestion: current_data.question
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        voice: (data) => dispatch(voice(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);