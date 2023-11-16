import {render, screen, fireEvent} from '@testing-library/react'
import Input from './Input'

describe('Input', () => {
    it('should be rendered', () => {
        render(<Input id='theCat' label='meowed'/>);
        const theText = screen.getByText('meowed');
        expect(theText).toBeInTheDocument();
    });

    it('should be typed', () => {
        render(<Input id='sleeping' label="chonk"/>);
        const input = screen.getByLabelText("chonk");
        fireEvent.change(input, { target: { value: 'Halo ebriwan' } });
        expect(input.value).toBe('Halo ebriwan');
    });

    it('label should render', () => {
        render(<Input id='nyan' label='catto'/>);
        const label = screen.getByLabelText('catto');
        expect(label).toBeInTheDocument();
    });
});