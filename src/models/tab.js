import getNationWarning from '@/servers/getNationWarning.js'
import getNation from '@/servers/getNation.js'

export default {
    namespace: 'tab',
    state: {
        nationWarning:[],
        nation:{},
        isSkeleton:true
    },
    effects: {
        *getChart1 (action, { put, select }) {
            let nationWarning  = yield getNationWarning();
            let nation = yield getNation();  
            yield put({
                type: 'setChart1',
                nationWarning: nationWarning.data.data,
                nation: nation.data.data
            })
        }
    },
    reducers: {
        setChart1 (state, action) {
            // console.log(state, action)
            return {...state,nationWarning: action.nationWarning,nation: action.nation, isSkeleton: false }
        }
    }
}