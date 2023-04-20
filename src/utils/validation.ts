export function validatePhone(phone: string | number): Boolean {
    const phoneRegex = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
    return phoneRegex.test(String(phone));
}
export function validatePassword(password: string): Boolean {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/;
    return passwordRegex.test(String(password));
}