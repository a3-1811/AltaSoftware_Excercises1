import { Robo, RoboUpdate } from "../state/actions"
import axiosClient from "./axiosClient"

const baseUri = 'https://dummy-robots-default-rtdb.asia-southeast1.firebasedatabase.app/robos'

const RobosApi = {
    getListRobos(){
        const url =baseUri + '.json'
        return axiosClient.get<Robo[],Robo[]>(url)
    },
    getDetailRobo(roboName: string){
        const url =baseUri + `/${roboName}.json`
        return axiosClient.get<Robo>(url)
    },
    addRobo(robo :Robo){
        const url =baseUri+ ".json"
        return axiosClient.put(url,robo)
    },
    updateRobo(roboUpdate: RoboUpdate){
        const url =baseUri+`/${roboUpdate.name}.json`
        return axiosClient.patch(url,roboUpdate)
    },
    deleteRobo(roboName: string){
        const url =baseUri+`/${roboName}.json`
        return axiosClient.delete(url)
    },

}

export default RobosApi;