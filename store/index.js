import axios from 'axios'

export const state = () => ({
    products: [],
    details: []
})

export const mutations = {
    SET_PRODUCT(state, payload) {
        state.products = payload
    },
    SET_PRODUCT_DETAIL(state, payload) {
        state.details = payload
    }
}

export const actions = {
    async fetchProduct({ state, commit, dispatch }, params) {
        let respondata = await axios.get(`/product`, {
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if (respondata) {
            commit('SET_PRODUCT', respondata.data)
            return Promise.resolve(respondata)
        }
    },
    async fetchDetailProduct({ state, commit, dispatch }, params) {
        let respondata = await axios.get(`/product?id=${params}`, {
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if (respondata) {
            commit('SET_PRODUCT_DETAIL', respondata.data)
            return Promise.resolve(respondata)
        }
    },
}

export const getters = {
    getProducts: state => state.products,
    getDetailProduct: state => state.details
}
