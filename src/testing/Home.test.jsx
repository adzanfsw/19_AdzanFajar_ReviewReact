import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Home from '../page/Home'

describe('Home', () => {
    test('renders App component', () => {
        render(<Home />);
        
        expect(screen.getByText(/HOME/)).toBeInTheDocument();
        expect(screen.getByText(/NEWS/)).toBeInTheDocument();
        expect(screen.getByText(/ABOUT/)).toBeInTheDocument();
        expect(screen.getByText(/EXPERIENCE/)).toBeInTheDocument();
        expect(screen.getByText(/CONTACT US/)).toBeInTheDocument();
        expect(screen.getByText(/Hi, my name is/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Anne Sullivan/)).toBeInTheDocument();
        expect(screen.getByText(/I build things for the web./)).toBeInTheDocument();
});

    test('render link', () => {
        render(<Home />);

        const linkElement = screen.getByText(/Contact Us/i);
        expect(linkElement).toBeInTheDocument();
    })

})