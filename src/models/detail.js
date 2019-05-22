import getData from '../server/getData';

export default {
    namespaced: 'details',
    state: {
        list: [],
        name: 'cpx'
    },
    effects: {
        /*
          1.方法名 前面加* 2.方法名是由页面dispatch发送过来的 3.call 执行那个请求数据的函数
        */ 
        *getMSG (action, { put, call, select }) {
            let getDatas = yield call(getData);
            // console.log(getDatas.data.data)
            yield put({
                type: 'changLc',
                list: getDatas.data.data
            })
        }
    },
    reducers: {
        changLc (state, action) {
            // console.log(state, 'state')
            // console.log(action, 'action')
            return {list: action.list}
        }
    }
}