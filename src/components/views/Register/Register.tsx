import { Button, Card, CardBody, Input } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import useRegister from "./useRegister";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Register = () => {
    const {visiblePassword, handleVisiblePassword } = useRegister();
    return (
        <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:gap-20">
      <div className="flex w-full flex-col items-center justify-center gap-10 lg:w-1/3">
                <Image 
                src="/images/general/logo.svg"
                alt="logo"
                width={180}
                height={180} />
                <Image 
                src="/images/illustrations/login.svg"
                className="w-2/3 lg:w-full"
                alt="login"
                width={1024}
                height={1024} />
            </div>
            <Card>
                <CardBody className="p-8">
                    <h2 className="text-xl font-bold text-danger-500">Create Account</h2>
                    <p className="mb-4 text-small">Have an account?&nbsp; 

                        <Link href="/auth/login" className="font-semibold text-danger-400">Login here</Link>
                    </p>
                    <form className="flex w-80 flex-col gap-4">
                        <Input 
                        type="text" 
                        variant="bordered"
                        autoComplete="off"
                        label="Fullname" />
                        <Input 
                        type="text" 
                        variant="bordered"
                        autoComplete="off"
                        label="Username" />
                        <Input 
                        type="email" 
                        variant="bordered"
                        autoComplete="off"
                        label="Email" />
                        <Input 
                        type={visiblePassword.password? "text" : "password"} 
                        variant="bordered"
                        autoComplete="off"
                        label="Password"
                        endContent={
                            <button className="focus outline-none"
                            type="button"
                            onClick={() => handleVisiblePassword("password")}>
                                {visiblePassword.password ? (
                                    <FaEye className="text-xl text-default-400 pointer-events-none"/>
                                ) : (
                                    <FaEyeSlash className="text-xl text-default-400 pointer-events-none"/>
                                )}
                            </button>
                        } />
                        <Input 
                        type={visiblePassword.passwordConfirmation? "text" : "password"} 
                        variant="bordered"
                        autoComplete="off"
                        label="Password Confirmation"
                        endContent={
                            <button className="focus outline-none"
                            type="button"
                            onClick={() => handleVisiblePassword("passwordConfirmation")}>
                                {visiblePassword.passwordConfirmation ? (
                                    <FaEye className="text-xl text-default-400 pointer-events-none"/>
                                ) : (
                                    <FaEyeSlash className="text-xl text-default-400 pointer-events-none"/>
                                )}
                            </button>
                        } />
                        <Button color="danger" size="lg" type="submit">Register</Button>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
};

export default Register;