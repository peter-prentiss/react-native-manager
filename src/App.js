import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyAygXROPdc4OVJa4-kIHgUdtrvx5gddekU",
            authDomain: "manager-c9cc3.firebaseapp.com",
            databaseURL: "https://manager-c9cc3.firebaseio.com",
            projectId: "manager-c9cc3",
            storageBucket: "manager-c9cc3.appspot.com",
            messagingSenderId: "574423621056"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;