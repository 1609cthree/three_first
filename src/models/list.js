export default {
    namespace: 'list',
    state: {
        name: 'lisi',
        age: 28
    },
    effects: {
        *setName (action, { put, select }) {
            // let age  = yield select((state,aa) => {
            //     console.log(state,aa)
            // })
            yield put({
                type: 'changeName'
            })
        }
    },

    reducers: {
        changeName (state, action) {
            // console.log(state, action)
            return {...state}
        }
    }
}