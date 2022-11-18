import '../../../matchMedia.ts'
import { render, screen } from '@testing-library/react';
import PaginationItems from './PaginationItems';

describe('Pagination Items Component', () => {
    it('should render correctly', () => {
        render(<PaginationItems page={1} />);
        expect(screen.getByText('Page 1')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /next page/i })).toBeInTheDocument();
        expect(screen.queryByRole('button', { name: /previous page/i })).not.toBeInTheDocument();
    });

    it('should render correctly with previous page', () => {
        render(<PaginationItems page={2} />);
        expect(screen.getByText('Page 2')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /next page/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /previous page/i })).toBeInTheDocument();
    });

})