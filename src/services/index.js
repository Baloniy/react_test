

class MockService {
    questions = [{
        "id": 1,
        "text": "Favorite color",
        "answers": [{
            "id": 1,
            "text": "Red",
            "responses": 10
        }, {
            "id": 2,
            "text": "Green",
            "responses": 20
        }, {
            "id": 3,
            "text": "Blue",
            "responses": 5
        }]
    }, {
        "id": 2,
        "text": "Favorite animal",
        "answers": [{
            "id": 1,
            "text": "Dog",
            "responses": 150
        }, {
            "id": 2,
            "text": "Cat",
            "responses": 100
        }, {
            "id": 3,
            "text": "Bird",
            "responses": 17
        }]
    },{
        "id": 3,
        "text": "Favorite country",
        "answers": [{
            "id": 1,
            "text": "Ukraine",
            "responses": 100
        }, {
            "id": 2,
            "text": "USA",
            "responses": 10
        }, {
            "id": 3,
            "text": "China",
            "responses": 1
        }]
    },{
        "id": 4,
        "text": "Favorite frontend library/framework",
        "answers": [{
            "id": 1,
            "text": "Angular",
            "responses": 100
        }, {
            "id": 2,
            "text": "Vue",
            "responses": 150
        }, {
            "id": 3,
            "text": "React",
            "responses": 200
        }]
    },{
        "id": 5,
        "text": "Favorite programming language",
        "answers": [{
            "id": 1,
            "text": "Php",
            "responses": 70
        }, {
            "id": 2,
            "text": "JavaScript",
            "responses": 75
        }, {
            "id": 3,
            "text": "GoLang",
            "responses": 60
        }]
    }];

    getQuestions() {
        return new Promise((resolve, reject) => {
           setTimeout(() => {
                if( Math.random() > 0.75) {
                    reject(new  Error('Something bad happened'));
                } else {
                    resolve(this.questions);
                }
           }, 700);
        });
    }
}

export default MockService;