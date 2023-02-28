import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Button from "@brighthr/component-button";
import { useTranslation } from "react-i18next";
import { EmailTextbox } from "shared/UI/EmailTextbox";
import { PasswordTextbox } from "shared/UI/PasswordTextbox";
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
        <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate={true}
            className="h-screen flex flex-col justify-center items-center"
        >
            <h1>{t("login.heading")}</h1>
            <p className="text-gray-500 mb-3">{t("login.help")}</p>

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
                        setValue("password", data, { shouldValidate: true });
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
                <span
                    role="alert"
                    className="form-field-validation-error mb-10"
                >
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
    );
};
