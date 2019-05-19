import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createReactNavigationReduxMiddleware, createNavigationReducer, createReduxContainer } from 'react-navigation-redux-helpers';
import { watchAlertChannel } from 'redux-saga-rn-alert';
import { all, takeEvery, spawn } from 'redux-saga/effects';
import { alertReducer } from 'redux-saga-rn-alert';
import { connect } from 'react-redux';

// Middlewares
import createSagaMiddleware from 'redux-saga';

// Import sagas
import user from './reducers/sagas/user'


import * as reducers from './reducers';

function* rootSaga() {
    yield spawn(watchAlertChannel);
}

export default navigator => {
    const navReducer = createNavigationReducer(navigator)
    const reducer = combineReducers({
        nav: navReducer,
        ...reducers,
        alertReducer
    })

    const sagaMiddleware = createSagaMiddleware()
    const navMiddleware = createReactNavigationReduxMiddleware(
        state => state.nav
    );

    const store = createStore(
        reducer,
        compose(
            applyMiddleware(navMiddleware),
            applyMiddleware(sagaMiddleware)
        )
    )

    const App = createReduxContainer(navigator, "root")
    const mapStateToProps = state => ({ state: state.nav })
    const AppWithNavigationState = connect(mapStateToProps)(App)

    // Run sagas
    sagaMiddleware.run(user)
    sagaMiddleware.run(rootSaga)

    return { store, AppWithNavigationState }
}
