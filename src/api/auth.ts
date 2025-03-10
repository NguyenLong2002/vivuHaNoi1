import { axiosService } from "./axiosService";
import { HEADER } from '../constants/index';

const authApi = {
    helloWorld() {
        const url = '/';
        return axiosService.get(url);
    },
    singUp(data: formDataSingUp): Promise<responseSingUp> {
        const url = '/v1/api/access/signup';
        return axiosService.post(url, data);
    },
    login(body: formDataSingIn): Promise<responseToken> {
        const url = '/v1/api/access/login';
        return axiosService.post(url, body);
    },
    reFreshToken(refreshToken: string): Promise<responseToken> {
        const url = '/v1/api/access/handleRefreshToken';
        return axiosService.post(url, undefined, {headers: {[HEADER.REFRESHTOKEN]: refreshToken}});
    },
    logOut({user_id, refreshToken}: { user_id: string, refreshToken: string}): Promise<baseDelete> {
        const url = '/v1/api/access/logout';
        return axiosService.post(url, {user_id}, {headers: {[HEADER.REFRESHTOKEN]: refreshToken}});
    },
    loginProvider(body: any): Promise<responseToken> {
        const url = '/v1/api/access/login-provider';
        return axiosService.post(url, body);
    },
}

export default authApi;