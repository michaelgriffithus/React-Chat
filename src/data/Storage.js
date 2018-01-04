export function getStorage(key) {
    return JSON.parse(window.localStorage.getItem(key));
}

export function setStorage(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
}

export function deleteStorage(key) {
    window.localStorage.removeItem(key);
}