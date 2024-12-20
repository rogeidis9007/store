export const validateEmail = (email:string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validatePhone = (phone:string) => {
    const phoneRegex = /^\+?\d{1,4}?[ -.]?\(?\d{1,4}\)?[ -.]?\d{1,4}[ -.]?\d{1,9}$/;
    return phoneRegex.test(phone)
}

export const validateName = (name:string) => {
    const nameRegex = /^[A-ZÁÉÍÓÚÑa-záéíóúñ]+([ '-][A-ZÁÉÍÓÚÑa-záéíóúñ]+)*$/;
    return nameRegex.test(name);
}