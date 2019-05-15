export default {
    namespace: 'tab',
    state: {
        name: 'zhangsan',
        age: 21
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
        changeAge (state, action) {
            // console.log(state, action)
            let age = state.age + 1
            return {...state, age }
        }
    }
}