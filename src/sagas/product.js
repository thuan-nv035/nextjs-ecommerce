import {put, takeLatest, all, call} from "redux-saga/effects";

import Request from "../utils/request";

import {
    getProductsSuccess,
    getProductsError,
    getSellingProductsSuccess,
    getSellingProductsError,
    getHotProductsSuccess,
    getHotProductsError,
} from "../actions/product";

import {GET_PRODUCTS, GET_SELLING_PRODUCTS, GET_HOT_PRODUCTS} from "../contants/product";

export function* getProducts(action) {
    const url = `api/products/get?active=1&id_website=4`;
    try {
        const response = yield call(Request, url);
        yield put(getProductsSuccess(response));
    } catch (error) {
        yield put(getProductsError(error.message));
    }
}

export function* getSellingProducts(action) {
    const url = `api/products/get?active=1&id_website=4&feature=1`;
    try {
        const response = yield call(Request, url);
        yield put(getSellingProductsSuccess(response));
    } catch (error) {
        yield put(getSellingProductsError(error.message));
    }
}

export function* getHotProducts(action) {
    const url = `api/products/get?active=1&id_website=4&highlight=1&offset=6`;
    try {
        const response = yield call(Request, url);
        yield put(getHotProductsSuccess(response));
    } catch (error) {
        yield put(getHotProductsError(error.message));
    }
}

export default function* ProductSaga() {
    yield all([
        yield takeLatest(GET_PRODUCTS, getProducts),
        yield takeLatest(GET_SELLING_PRODUCTS, getSellingProducts),
        yield takeLatest(GET_HOT_PRODUCTS, getHotProducts),
    ]);
}
