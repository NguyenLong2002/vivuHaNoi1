import { axiosService } from "./axiosService";

const toursApi = {
    createTour(): Promise<metadataUser> {
        const url = `/v1/api/tours/create`;
        return axiosService.post(url)
    },
}

export default toursApi;