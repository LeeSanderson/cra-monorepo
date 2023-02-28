import { Login } from "./Login";
import { screen, render, act } from "@testing-library/react";
import { useAuth } from "../../core/hooks/useAuth";
import { change, click } from "shared/testing/helpers";

jest.mock("../../core/hooks/useAuth");
const mockedAuth = useAuth as jest.MockedFunction<typeof useAuth>;

describe("Login", () => {
    let heading: HTMLElement;
    let emailTextbox: HTMLElement;
    let passwordTextbox: HTMLElement;
    let loginButton: HTMLElement;
    let mockOnLogin: jest.Mock<Promise<boolean>, [string, string]>;

    beforeEach(() => {
        mockOnLogin = jest.fn<Promise<boolean>, [string, string]>();
        mockOnLogin.mockImplementation(async () => true);
        mockedAuth.mockImplementation(() => {
            return {
                isAuthenticated: true,
                token: "",
                onLogin: mockOnLogin,
                onLogout: async () => undefined,
            };
        });

        render(<Login />);
        heading = screen.getByRole("heading");
        emailTextbox = screen.getByRole("textbox", { name: "email" });
        passwordTextbox = screen.getByRole("textbox", { name: "password" });
        loginButton = screen.getByRole("button", { name: "submit" });
    });

    it("renders the Log In prompt", () => {
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toEqual("Log In");
    });

    it("renders an email address input", () => {
        expect(emailTextbox).toBeInTheDocument();
        expect(emailTextbox.id).toEqual("email");
        expect(emailTextbox).toHaveAttribute("name", "email");
        expect(emailTextbox).toHaveAttribute("aria-placeholder", "Email");
        expect(emailTextbox).toHaveAttribute("placeholder", "Email");
    });

    it("renders a password input", () => {
        expect(passwordTextbox).toBeInTheDocument();
        expect(passwordTextbox.id).toEqual("password");
        expect(passwordTextbox).toHaveAttribute("name", "password");
        expect(passwordTextbox).toHaveAttribute("aria-placeholder", "Password");
        expect(passwordTextbox).toHaveAttribute("placeholder", "Password");
    });

    it("renders a login button", () => {
        expect(loginButton).toBeInTheDocument();
        expect(loginButton).toHaveTextContent("Login");
    });

    it("submits the correct values", async () => {
        await act(async () => {
            givenLoginWillSucceed();
            change(emailTextbox, "nobody@nowhere.com");
            change(passwordTextbox, "password");
            click(loginButton);
        });

        expect(mockOnLogin.mock.calls).toHaveLength(1);
        expect(mockOnLogin.mock.calls[0][0]).toBe("nobody@nowhere.com");
        expect(mockOnLogin.mock.calls[0][1]).toBe("password");
    });

    it("displays an error message if login fails", async () => {
        await act(async () => {
            givenLoginWillFail();
            change(emailTextbox, "nobody@nowhere.com");
            change(passwordTextbox, "password");
            click(loginButton);
        });

        const errorMessage = await screen.findByRole("alert");
        expect(errorMessage).toHaveTextContent("Invalid username or password");
    });

    function givenLoginWillSucceed() {
        mockOnLogin.mockImplementation(async () => true);
    }

    function givenLoginWillFail() {
        mockOnLogin.mockImplementation(async () => false);
    }
});
