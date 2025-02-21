import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './slices';
import rootSaga from './sagas';

// Create Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Redux Persist Config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // Use AsyncStorage for persistence
  whitelist: ['auth'], // Only persist auth state
};

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure Store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});

// Run the saga middleware
sagaMiddleware.run(rootSaga);

// Persistor
const persistor = persistStore(store);

export { store, persistor };

export type RootState = ReturnType<typeof store.getState>;