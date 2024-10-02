import { api } from "@/bootstrap/axios-instance"


export const getTagsAPI = (filteredText: string) => {
    
    return api.get(`/2.3/tags?page=1&pagesize=10&order=desc&sort=popular&site=stackoverflow&inname=${filteredText}`);
}

export const getQuestionsAPI = (page: number, filteredText: string) => {
    return api.get(`/2.3/questions?page=${page}&pagesize=20&order=desc&sort=activity&site=stackoverflow&tagged=${filteredText}`);
}




