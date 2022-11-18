import '../../../matchMedia.ts'
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Pagination Items Component', () => {
    it('should render correctly', () => {
        render(<Navbar />);
        expect(screen.getByText(/smart nx/i)).toBeInTheDocument();
        expect(screen.getByAltText('death-star')).toBeInTheDocument();
    });
})