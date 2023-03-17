

import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Reducer from './reducers';// Redux Debugger

let composeEnhancer = compose;

    //For compatibility and debugging redux values with devtools
    if (__DEV__) {

        composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    }

    const Reducers = {

        appData: Reducer

    };

    const persistConfig = {

        key: 'root',
        storage: AsyncStorage,
        blacklist: ['navigation'], // navigation will not be persisted
    };

    const persistedReducer = persistReducer(

        persistConfig,
        combineReducers(Reducers),

    );

    export const Store = createStore(

        persistedReducer, composeEnhancer(applyMiddleware(thunk))

    );


    export const persistor = persistStore(Store);