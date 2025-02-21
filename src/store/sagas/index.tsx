import { all } from 'redux-saga/effects';
import authSaga from './auth.saga';
import { taskSaga } from './task.saga';

// Root Saga
export default function* rootSaga() {
  yield all([authSaga(), taskSaga()]);
}
