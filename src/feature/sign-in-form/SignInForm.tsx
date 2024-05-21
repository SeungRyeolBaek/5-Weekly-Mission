import { Input, Cta, PasswordInput } from "@/src/ui";
import { useSignIn } from "@/src/data-access";
import { useTokenRedirect } from "@/src/util";

import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";

import { ERROR_MESSAGE, PLACEHOLDER } from "./constant";
import styles from "./SignInForm.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const SignInForm = () => {
  const { control, handleSubmit, watch, setError } = useForm({
    defaultValues: { email: "", password: "" },
    mode: "onBlur",
  });
  const { execute, data, error } = useSignIn({
    email: watch("email"),
    password: watch("password"),
  });

  useTokenRedirect(data?.data.accessToken);

  useEffect(() => {
    if (error) {
      setError("email", { type: "invalid", message: ERROR_MESSAGE.emailCheck });
      setError("password", {
        type: "invalid",
        message: ERROR_MESSAGE.passwordCheck,
      });
    }
  }, [error, setError]);

  return (
    <form className={cx("form")} onSubmit={handleSubmit(execute)}>
      <div className={cx("input-box")}>
        <label className={cx("label")}>이메일</label>
        <Controller
          control={control}
          name="email"
          rules={{
            required: ERROR_MESSAGE.emailRequired,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: ERROR_MESSAGE.emailInvalid,
            },
          }}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              placeholder={PLACEHOLDER.email}
              hasError={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
            />
          )}
        />
      </div>
      <div className={cx("input-box")}>
        <label className={cx("label")}>비밀번호</label>
        <Controller
          control={control}
          name="password"
          rules={{ required: ERROR_MESSAGE.passwordRequired }}
          render={({ field, fieldState }) => (
            <PasswordInput
              {...field}
              hasEyeIcon
              placeholder={PLACEHOLDER.password}
              hasError={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
            />
          )}
        />
      </div>
      <button className={cx("button")} type="submit">
        <Cta>로그인</Cta>
      </button>
    </form>
  );
};
