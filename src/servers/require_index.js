import axios from 'axios'
export async function getAllWarnType () {
    return axios.get('/api/getAllWarnType')
}

export async function getNation () {
    return axios.get('/api/getNation')
}

export async function getNationCity () {
    return axios.get('/api/getNationCity')
}

export async function getNationWarning () {
    return axios.get('/api/getNationWarning')
}

export async function getEquipmentType () {
    return axios.get('/api/getEquipmentType')
}


export async function getPollEquipment () {
    return axios.get('/api/getPollEquipment')
}