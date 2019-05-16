export default {
    namespace: 'menu',
    state: {
        collapsed: false
    },
    effects: {
        *setAge (action, { put, select }) {
            // let age  = yield select((allState) => {
            //     console.log(allState)
            //     return allState.list.age
            // })
            // console.log(age)
            yield put({
                type: 'list/changeName'
            })
        }
    },
    reducers: {
        ChangeCollapsed (state, action) {
            let collapsed = !state.collapsed
            return {...state, collapsed }
        }
    }
}