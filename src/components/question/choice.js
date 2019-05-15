import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class Choice extends Component{
    render() {
        const { voiced_question } = this.props;
        if(!voiced_question) {
            return '';
        }
        const { voicedAnswer, otherAnswers } = voiced_question;
        return (
            <Fragment>
                <p>You selected: <strong>{ voicedAnswer.text + ' ' + voicedAnswer.responses }</strong></p>
                <ul>
                    { otherAnswers.map(answ => {
                        return <li key={answ.id}>
                            { answ.text +' - '+ answ.responses  }
                        </li>
                    })}
                </ul>
            </Fragment>
        )
    }
}

const mapStateToProps = ( { current_data }) => {
    return {
        voiced_question: current_data.voiced_question
    }
};

export default connect(mapStateToProps, null)(Choice);