export default {
    namespaced: 'details',
    state: {
        name: 'cpx'
    },
    effects: {
        *checkoutL (action, { put, select }) {
            yield put ({
                type: 'changLc'
            })
        }
    },
    reducer: {
        changLc (state, action) {
            return {...state}
        }
    }
}