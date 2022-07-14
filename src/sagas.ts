import { call, put, takeLatest, delay, takeEvery } from "@redux-saga/core/effects";
import { Action, AnyAction } from "redux";
import createSagaMiddleware from "redux-saga";
import { showCastFetchedAction, showFetchedAction, showsFetchedAction, SHOWS_FETCH, SHOWS_FETCHED, SHOW_CAST_FETCH, SHOW_FETCH } from "./actions";
import { getshow, getshowCast, getshows } from "./api";
import Actor from "./componenets/models/Actor";
import { showStateSelector } from "./selectors";
import { State } from "./store";

const sagaMiddleware = createSagaMiddleware()

export function* fetchShowsSaga(action: AnyAction): Generator<any, any, any> {
    console.log("action", action)


    const querry = action.payload
    const data = yield call(getshows, querry);


    yield put(showsFetchedAction(querry, data));


}


export function* fetchShowCast(action:AnyAction): Generator<any,any,any>{
    console.log ("fetch show cast running ")
    const showId = action.payload;
    const data= yield call (getshowCast,showId);

const actors = (data as{person:Actor}[]).map((d)=> d.person);
console.log(" before put  actors",actors)
console.log(" before put showid",showId)
  yield put(showCastFetchedAction(showId,actors));


}


export function* fetchShowSaga(action: AnyAction,): Generator<any, any, any> {

    const id: number = action.payload;

    console.log("fetchShowSaga running")
    const data = yield call(getshow, id);
    console.log("data", data)
 


    yield put(showFetchedAction(data));


}




export function* rootSaga() {
    

    yield takeLatest(SHOWS_FETCH, fetchShowsSaga);

    yield takeEvery(SHOW_FETCH, fetchShowSaga);
    yield takeLatest(SHOW_CAST_FETCH, fetchShowCast);
   
    
}

export default sagaMiddleware;