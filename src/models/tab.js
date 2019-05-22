// import getNationWarning from '@/servers/getNationWarning.js'
// import getNation from '@/servers/getNation.js'
// import getAllWarnType from '@/servers/getAllWarnType.js'
// import getNationCity from '@/servers/getNationCity.js'
import { getNationWarning, getNation, getAllWarnType, getNationCity, getEquipmentType, getPollEquipment  } from '@/servers/require_index'
export default {
    namespace: 'tab',
    state: {
        nationWarning:[],
        nation:{},
        allWarnType:[],
        nationCity: [],
        EquipmentType:[],
        isSkeleton1:true,
        isSkeleton2:true,
        isSkeleton3:true

    },
    effects: {
        *getChart1 (action, { call, put, select }) {
            let nationWarning  = yield call(getNationWarning);
            let nation = yield call(getNation);  
            yield put({
                type: 'setChart1',
                nationWarning: nationWarning.data.data,
                nation: nation.data.data
            })
        },
        *getChart2 (action, { call, put, select }) {
            let nationCity  = yield call(getNationCity);
            yield put({
                type: 'setChart2',
                nationCity: nationCity.data.data
            })
        },
        *getChart3 (action, { call, put, select }) {
            let allWarnType  = yield call(getAllWarnType);  
            yield put({
                type: 'setChart3',
                allWarnType: allWarnType.data.data
            })
        },
        *getEquipmentType (action, { call, put, select }) {
            let EquipmentType = yield call(getEquipmentType); 
            yield put({
                type: 'setEquipmentType',
                EquipmentType: EquipmentType.data.data
            })
        },
        *getPollEquipment (action, { call, put, select }) {
            let PollEquipment = yield call(getPollEquipment); 
            // console.log(PollEquipment)
            let res = PollEquipment.data.data;
            if (res) {
                // console.log(select);
                let arr = yield select((store) => {
                    let index = store.tab.EquipmentType.findIndex((item => item.id === res.id))
                    store.tab.EquipmentType.splice(index,1,res)
                    return store.tab.EquipmentType

                })
                // console.log(arr)
                yield put({
                    type: 'setEquipmentType',
                    EquipmentType: arr
                })
            }else {
                return
            }
            
        }
    },
    reducers: {
        setChart1 (state, action) {
            return {...state,nationWarning: action.nationWarning,nation: action.nation, isSkeleton1: false }
        },
        setChart2 (state, action) {
            return {...state,nationCity:action.nationCity, isSkeleton2: false }
        },
        setChart3 (state, action) {
            return {...state,allWarnType:action.allWarnType, isSkeleton3: false }
        },
        setEquipmentType (state, action) {
            return {...state,EquipmentType:action.EquipmentType }
        },
    }
}