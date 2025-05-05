import { useState } from "react";
import * as yup from 'yup';

const registerSchema = yup.object().shape({
    fullname: yup.string().required("Please input your fullname"),
    username: yup.string().required("Please input your username"),
    email: yup.string().email("Invalid email format").required("Please input your email"),
    password: yup.string().min(8, "Password minimum contains 8 characters").required("Please input your password"),
    confirmpassword: yup.string().oneOf([yup.ref("password"), ""], "Password not match").required("Please input your password confirmation")
});

const useRegister = () => {
    const [visiblePassword, setVisiblePassword] = useState({
        password: false,
        passwordConfirmation: false,
    });

    const handleVisiblePassword = (key: "password" | "passwordConfirmation") => {
        setVisiblePassword({
            ...visiblePassword,
            [key]: !visiblePassword[key]
        });
    };

    return {visiblePassword, handleVisiblePassword};
};


export default useRegister;