import { call, put, takeLatest, delay, takeEvery } from "@redux-saga/core/effects";
import { Action, AnyAction } from "redux";
import createSagaMiddleware from "redux-saga";
import { showFetchedAction, showsFetchedAction, SHOWS_FETCH, SHOWS_FETCHED, SHOW_FETCH } from "./actions";
import { getshow, getshows } from "./api";

const sagaMiddleware = createSagaMiddleware()

export function* fetchShowsSaga(action: AnyAction): Generator<any, any, any> {
    console.log("action", action)


    const querry = action.payload
    const data = yield call(getshows, querry);


    yield put(showsFetchedAction(querry, data));


}


export function* fetchShowSaga(action: AnyAction): Generator<any, any, any> {

    const id: number = action.payload;

    console.log("fetchShowSaga running")
    const data = yield call(getshow, id);
    console.log("data", data)


    yield put(showFetchedAction(data));


}




export function* rootSaga() {
    console.log("rootSaga running")

    yield takeLatest(SHOWS_FETCH, fetchShowsSaga);

    yield takeLatest(SHOW_FETCH, fetchShowSaga);
}

export default sagaMiddleware;