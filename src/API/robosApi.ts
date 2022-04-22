import { Robo, RoboCreate, RoboUpdate } from "../state/actions"
import axiosClient from "./axiosClient"

const baseUri =""

interface RoboCreateResponse {
    name : string
}

const RobosApi = {
    getListRobos(){
        const url =baseUri + '.json'
        return axiosClient.get<Robo[],Robo[]>(url)
    },
    getDetailRobo(roboName: string){
        const url =baseUri + `/${roboName}.json`
        return axiosClient.get<Robo>(url)
    },
    addRobo(robo :RoboCreate){
        const url =baseUri+ ".json"
        return axiosClient.post<RoboCreateResponse,RoboCreateResponse>(url,robo)
    },
    updateRobo(roboUpdate: RoboUpdate){
        const url =baseUri+`/${roboUpdate.id}.json`
        return axiosClient.patch<RoboUpdate,RoboUpdate>(url,roboUpdate)
    },
    deleteRobo(id: string){
        const url =baseUri+`/${id}.json`
        return axiosClient.delete(url)
    },

}

export default RobosApi;