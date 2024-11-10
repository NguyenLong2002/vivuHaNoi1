import { STAFF_MANAGE_TOKEN, STAFF_MANAGE_USER, STAFF_REFRESH_MANAGE_USER } from "../constants/index";
import Cookies from 'js-cookie';

export const isUserLoggedIn = (): any => localStorage.getItem(STAFF_MANAGE_TOKEN);

export const setToken = (token: string) => localStorage.setItem(STAFF_MANAGE_TOKEN, token);

export const setRefreshToken = (refreshToken: string) => {
    Cookies.set(STAFF_REFRESH_MANAGE_USER, refreshToken, { secure: true, sameSite: 'strict', path: '/', expires: 7 });
}

export const removeToken = () => localStorage.removeItem(STAFF_MANAGE_TOKEN);

export const removeRefreshToken = () => {
    Cookies.remove(STAFF_REFRESH_MANAGE_USER)
};

export const getToken = () => localStorage.getItem(STAFF_MANAGE_TOKEN);

export const getRefreshToken = () => {
    return Cookies.get(STAFF_REFRESH_MANAGE_USER)
};

export const setUser = (user: any) => localStorage.setItem(STAFF_MANAGE_USER, JSON.stringify(user));

export const getUser = () => {
    const isLogin = isUserLoggedIn();
    const userInfo = localStorage.getItem(STAFF_MANAGE_USER);

    if (isLogin && userInfo) {
        return JSON.parse(userInfo)
    }

    return null;
}

export const removeUser = () => localStorage.removeItem(STAFF_MANAGE_USER);

export const formatCurrency = (number: number) => {
    if (!number) return '';
    // Chuyển đổi số thành chuỗi và ngược lại
    const strNumber = number.toString();
    // Biểu thức chính quy để chia nhỏ chuỗi thành các nhóm ba số
    const regex = /(\d)(?=(\d{3})+(?!\d))/g;
    // Thay thế mỗi nhóm ba số bằng nhóm ba số đó cộng với dấu phân cách (,)
    return strNumber.replace(regex, "$1,");
}

export const isJson = (str: string) => {
    if (!str) return false;

    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
};
