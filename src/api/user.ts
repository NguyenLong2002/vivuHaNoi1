import { axiosService } from "./axiosService";

const userApi = {
    getUserInfo(): Promise<metadataUser> {
        const url = `/v1/api/user/me`;
        return axiosService.get(url)
    },
}

export default userApi;