import { Button, Card, CardBody, Input, Spinner } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import useRegister from "./useRegister";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Controller } from "react-hook-form";

const Register = () => {
  const {
    visiblePassword,
    handleVisiblePassword,
    control,
    handleRegister,
    handleSubmit,
    isPendingRegister,
    errors,
  } = useRegister();

  console.log(errors);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:gap-20">
      <div className="flex w-full flex-col items-center justify-center gap-10 lg:w-1/3">
        <Image
          src="/images/general/logo.svg"
          alt="logo"
          width={180}
          height={180}
        />
        <Image
          src="/images/illustrations/login.svg"
          className="w-2/3 lg:w-full"
          alt="login"
          width={1024}
          height={1024}
        />
      </div>
      <Card>
        <CardBody className="p-8">
          <h2 className="text-xl font-bold text-danger-500">Create Account</h2>
          <p className="mb-4 text-small">
            Have an account?&nbsp;
            <Link href="/auth/login" className="font-semibold text-danger-400">
              Login here
            </Link>
          </p>
          <form className="flex w-80 flex-col gap-4" onSubmit={handleSubmit(handleRegister)}>
            <Controller
              name="fullname"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  variant="bordered"
                  autoComplete="off"
                  label="Fullname"
                  isInvalid={errors.fullname !== undefined}
                  errorMessage={errors.fullname?.message}
                />
              )}
            />
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  variant="bordered"
                  autoComplete="off"
                  label="Username"
                  isInvalid={errors.username !== undefined}
                  errorMessage={errors.username?.message}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="email"
                  variant="bordered"
                  autoComplete="off"
                  label="Email"
                  isInvalid={errors.email !== undefined}
                  errorMessage={errors.email?.message}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type={visiblePassword.password ? "text" : "password"}
                  variant="bordered"
                  autoComplete="off"
                  label="Password"
                  isInvalid={errors.password !== undefined}
                  errorMessage={errors.password?.message}
                  endContent={
                    <button
                      className="focus outline-none"
                      type="button"
                      onClick={() => handleVisiblePassword("password")}
                    >
                      {visiblePassword.password ? (
                        <FaEye className="pointer-events-none text-xl text-default-400" />
                      ) : (
                        <FaEyeSlash className="pointer-events-none text-xl text-default-400" />
                      )}
                    </button>
                  }
                />
              )}
            />

            <Controller
              name="confirmpassword"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type={
                    visiblePassword.confirmpassword ? "text" : "password"
                  }
                  variant="bordered"
                  autoComplete="off"
                  label="Password Confirmation"
                  isInvalid={errors.confirmpassword !== undefined}
                  errorMessage={errors.confirmpassword?.message}
                  endContent={
                    <button
                      className="focus outline-none"
                      type="button"
                      onClick={() =>
                        handleVisiblePassword("confirmpassword")
                      }
                    >
                      {visiblePassword.confirmpassword ? (
                        <FaEye className="pointer-events-none text-xl text-default-400" />
                      ) : (
                        <FaEyeSlash className="pointer-events-none text-xl text-default-400" />
                      )}
                    </button>
                  }
                />
              )}
            />

            <Button color="danger" size="lg" type="submit">
              {isPendingRegister ? (
                <Spinner color="white" size="sm"/>
              ) : "Register"}
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Register;
