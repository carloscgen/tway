import React from 'react';
import { Filters } from './Filters';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { store } from '../store';
import { Provider } from 'react-redux';

describe('Render Filters component', () => {
    it('Display Section select on screen', () => {
        render(
            <Provider store={store}>
                <Filters />
            </Provider>
        );
        const section = screen.queryByLabelText('section-actions');
        expect(section).toBeInTheDocument();
    });

    it('Display Sort select on screen', () => {
        render(
            <Provider store={store}>
                <Filters />
            </Provider>
        );
        const sort = screen.queryByLabelText('sort-actions');
        expect(sort).toBeInTheDocument();
    });

    it('Display Window select on screen', () => {
        render(
            <Provider store={store}>
                <Filters />
            </Provider>
        );
        const sort = screen.queryByLabelText('sort-window');
        expect(sort).toBeInTheDocument();
    });

    test('When click on dropdown filter display options', () =>{

        render(
            <Provider store={store}>
                <Filters />
            </Provider>
        );

        const dropdownButton = screen.getByText('Hot')
        fireEvent.click(dropdownButton);
        
        const value = screen.getAllByText('Hot')[0] as HTMLAnchorElement;
        expect(value).toBeInTheDocument();
      });

      test('When click on dropdown filter display options', () =>{

        render(
            <Provider store={store}>
                <Filters />
            </Provider>
        );

        const dropdownButton = screen.getByText('Viral')
        fireEvent.click(dropdownButton);
        
        const value = screen.getAllByText('Viral')[0] as HTMLAnchorElement;
        expect(value).toBeInTheDocument();
      });

      test('When click on dropdown filter display options', () =>{

        render(
            <Provider store={store}>
                <Filters />
            </Provider>
        );

        const dropdownButton = screen.getByText('Day')
        fireEvent.click(dropdownButton);
        
        const value = screen.getAllByText('Day')[0] as HTMLAnchorElement;
        expect(value).toBeInTheDocument();
      });
})