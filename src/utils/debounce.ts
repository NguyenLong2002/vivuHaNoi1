const debounce = (fn: any, delay: number) => {
    let timerId: any;

    return (...arg: any) => {
        if(timerId) {
            clearTimeout(timerId);
            timerId = null;
        }

        timerId = setTimeout(() => {
            fn.apply(this, arg)
        }, delay);
    }
}

export default debounce;