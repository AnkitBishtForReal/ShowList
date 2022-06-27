import { call, put, takeLatest, delay } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import createSagaMiddleware from "redux-saga";
import { showsFetchedAction, SHOWS_FETCH, SHOWS_FETCHED } from "./actions";
import { getshows } from "./api";

const sagaMiddleware = createSagaMiddleware()

export function* fetchShowsaga(action: AnyAction): Generator<any, any, any> {
    console.log("action", action)


    const querry = action.payload
    const data = yield call(getshows, querry);

    yield put(showsFetchedAction(querry, data));
}


export function* rootSaga() {
    yield takeLatest(SHOWS_FETCH, fetchShowsaga);
}

export default sagaMiddleware;