export const storage = {
    setItem(key, value) {
        return localStorage.setItem(key, JSON.stringify(value));
    },
    getItem(key) {
        return JSON.parse(localStorage.getItem(key));
    }
};