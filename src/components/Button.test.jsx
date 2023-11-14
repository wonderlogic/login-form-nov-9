import {render, screen} from '@testing-library/react'
import Button from './Button';

describe('Button', () => {
    it('should render the Button', () => {
        render(<Button />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });

    it('should render the Disabled Button', () => {
        render(<Button disabled={true}/>);
        const button = screen.getByRole("button");
        expect(button).toBeDisabled()
    })

    it('should be able to click', () => {
        const = fn = vi.fn()
        render(<Button onClick={fn}/>)
        expect(fn).toHaveBeencalled()
    })
});
