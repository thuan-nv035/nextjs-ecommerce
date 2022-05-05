import { put, takeLatest, all, call } from "redux-saga/effects";

import Request from "../utils/request";

import {
    getCategorySuccess,
    getCategoryError,
} from "../actions/category";

import { GET_CATEGORY} from "../contants/category";

export function* getCategory(action) {
    const url = `api/categories/get?id_website=4&active=1`;
    try {
        const response = yield call(Request, url);
        yield put(getCategorySuccess(response));
    } catch (error) {
        yield put(getCategoryError(error.message));
    }
}


export default function* CategorySaga() {
    yield all([ 
        yield takeLatest(GET_CATEGORY, getCategory),
    ]);
}
