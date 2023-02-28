import { useForm, SubmitHandler } from "react-hook-form";
import { EmailTextbox } from "shared/UI/EmailTextbox";
import { PasswordTextbox } from "shared/UI/PasswordTextbox";
import { ErrorMessage } from "@hookform/error-message";
import Button from "@brighthr/component-button";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../core/hooks/useAuth";
import { useState } from "react";

export interface ILoginData {
    email: string;
    password: string;
}

export const Login = () => {
    const { t } = useTranslation();
    const { onLogin } = useAuth();
    const [invalidLogin, setInvalidLogin] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        resetField,
        setValue,
    } = useForm<ILoginData>();

    const onSubmit: SubmitHandler<ILoginData> = async (data) => {
        const loginSuccessful = await onLogin(data.email, data.password);
        setInvalidLogin(!loginSuccessful);
    };

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate={true}
                className="bg-white shadow-xl rounded-xl m-auto w-2/3 px-8 mt-6 pt-6 pb-8 mb-4 align-middle"
            >
                <div role="heading" aria-level={1} className="mb-2">
                    {t("login.heading")}
                </div>

                <div className="mb-4">
                    <EmailTextbox
                        hasError={errors.email != null}
                        {...register("email", {
                            required: t("login.emailRequiredError"),
                            pattern: {
                                value: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i,
                                message: t("login.emailInvalidFormatError"),
                            },
                        })}
                        placeholder={t("login.emailFieldName")}
                        onChange={(data) => {
                            resetField("email");
                            setValue("email", data, { shouldValidate: true });
                        }}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="email"
                        as={
                            <span
                                className="form-field-validation-error"
                                role="alert"
                            />
                        }
                    />
                </div>

                <div className="mb-6">
                    <PasswordTextbox
                        hasError={errors.password != null}
                        {...register("password", {
                            required: t("login.passwordRequiredError"),
                        })}
                        placeholder={t("login.passwordFieldName")}
                        onChange={(data) => {
                            resetField("password");
                            setValue("password", data, {
                                shouldValidate: true,
                            });
                        }}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="password"
                        as={
                            <span
                                className="form-field-validation-error"
                                role="alert"
                            />
                        }
                    />
                </div>

                {invalidLogin && (
                    <span role="alert" className="form-validation-error mb-10">
                        {t("login.invalidEmailOrPasswordError")}
                    </span>
                )}
                <div>
                    <Button
                        aria-label="submit"
                        type="submit"
                        text={t("login.button")}
                    />
                </div>
            </form>
        </>
    );
};
