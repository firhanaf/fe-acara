import { useState } from "react";
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { IRegister } from "@/types/Auth";
import authServices from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

const registerSchema = yup.object().shape({
    fullname: yup.string().required("Please input your Fullname"),
    username: yup.string().required("Please input your Username"),
    email: yup.string().email("Invalid email format").required("Please input your Email"),
    password: yup.string().min(8, "Password minimum contains 8 characters").required("Please input your Password"),
    confirmpassword: yup.string().oneOf([yup.ref("password"), ""], "Password not match").required("Please input your Password Confirmation")
});

const useRegister = () => {
    const router = useRouter();
    const [visiblePassword, setVisiblePassword] = useState({
        password: false,
        confirmpassword: false,
    });

    const {control, handleSubmit, formState: {errors}, reset, setError,} = useForm({
        resolver: yupResolver(registerSchema),

    });

    const registerService = async (payload: IRegister) => {
        const result = await authServices.register(payload);
        return result
    };

    const {mutate: mutateRegister, isPending: isPendingRegister} = useMutation({
        mutationFn: registerService,
        onError(error) {
            setError("root", {
                message: error.message,
            })
        },
        onSuccess: () => {
            router.push("/auth/register/success");
            reset();
        }
    });

    const handleRegister = (data: IRegister) => mutateRegister(data);

    const handleVisiblePassword = (key: "password" | "confirmpassword") => {
        setVisiblePassword({
            ...visiblePassword,
            [key]: !visiblePassword[key]
        });
    };

    return {visiblePassword, handleVisiblePassword, control, handleSubmit, handleRegister, isPendingRegister, errors};
};


export default useRegister;