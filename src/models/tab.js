import getNationWarning from '@/servers/getNationWarning.js'
import getNation from '@/servers/getNation.js'
import getAllWarnType from '@/servers/getAllWarnType.js'
// import getNationCity from '@/servers/getNationCity.js'


export default {
    namespace: 'tab',
    state: {
        nationWarning:[],
        nation:{},
        allWarnType:[],
        isSkeleton1:true,
        isSkeleton2:true,
        isSkeleton3:true

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
        },
        *getChart2 (action, { put, select }) {
            let allWarnType  = yield getAllWarnType();  
            yield put({
                type: 'setChart2',
                allWarnType: allWarnType.data.data
            })
        },
        *getChart3 (action, { put, select }) {
            let allWarnType  = yield getAllWarnType();  
            yield put({
                type: 'setChart3',
                allWarnType: allWarnType.data.data
            })
        }
    },
    reducers: {
        setChart1 (state, action) {
            return {...state,nationWarning: action.nationWarning,nation: action.nation, isSkeleton1: false }
        },
        setChart2 (state, action) {
            return {...state,allWarnType:action.allWarnType, isSkeleton2: false }
        },
        setChart3 (state, action) {
            return {...state,allWarnType:action.allWarnType, isSkeleton3: false }
        },
    }
}