// utils/storage.ts

// 获取本地存储中指定键名的值
export function getStorageItem(key: string): unknown {
    const value = localStorage.getItem(key);
    try {
        return JSON.parse(value as string);
    } catch {
        return value;
    }
}

// 设置本地存储中指定键名的值
export function setStorageItem(key: string, value: any): void {
    if (typeof value === "object") {
        value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
}

// 移除本地存储中指定键名的值
export function removeStorageItem(key: string): void {
    localStorage.removeItem(key);
}