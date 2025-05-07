interface IRegister {
    fullname: string,
    username: string,
    email: string,
    password: string,
    confirmpassword: string,
}

interface IActivation {
    code: string,
}

export type {IRegister, IActivation};