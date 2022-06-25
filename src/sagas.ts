import { call, put, takeLeading } from "@redux-saga/core/effects";
import createSagaMiddleware from "redux-saga";
import { showsFetchedAction, SHOWS_FETCH, SHOWS_FETCHED } from "./actions";
import { getshows } from "./api";

const sagaMiddleware = createSagaMiddleware()

export function* fetchShowsaga(): Generator<any, any, any> {
    const data = yield call(getshows);
    const action = showsFetchedAction(data);
    yield put(action);
}


export function* rootSaga() {
    yield takeLeading(SHOWS_FETCH, fetchShowsaga);
}

export default sagaMiddleware;