import {render, screen, fireEvent} from '@testing-library/react'
import App from '../src/App'

describe('App', () => {
    it('should render the App', () => {
        render(<App />);
        const usernameText = screen.getByLabelText("Username");
        expect(usernameText).toBeInTheDocument();
    });

    it('should enable the button if two textboxes were typed', () => {
        render(<App />);
        
        const usernameInput = screen.getByLabelText("Username");
        const passwordInput = screen.getByLabelText("Password");

        fireEvent.change(usernameInput, { target: { value: 'testUser' } });
        fireEvent.change(passwordInput, { target: { value: 'testPass' } });

        const loginButton = screen.getByRole("button", { name: "Login" });
        expect(loginButton).not.toBeDisabled();
    });
});