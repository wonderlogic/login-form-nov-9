import {render, screen, fireEvent} from '@testing-library/react'
import Button from './Button';

describe('Button', () => {
    it('should render the Button', () => {
        render(<Button />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });

    it('should be able to click', () => {
        const mockOnClick = vi.fn();
        render(<Button text="meow" onClick={mockOnClick} disabled={false} />);
        const button = screen.getByRole("button", { name: "meow" });
        fireEvent.click(button);
        expect(mockOnClick).toHaveBeenCalled();
    });

    it('should be disabled', () => {
        render(<Button disabled={true}/>);
        const button = screen.getByRole("button");
        expect(button).toBeDisabled();
    });

    it('should render the text', () => {
        render(<Button text="meow"/>);
        const meowButton = screen.getByText("meow");
        expect(meowButton).toBeInTheDocument();
    });
});
