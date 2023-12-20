import React from 'react';
import { DesktopFooter } from './DesktopFooter';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Render DesktopFooter component', () => {
    it('Display footer text on screen', () => {
        render(
            <DesktopFooter />
        );
        const getValue = screen.getByText('Copyright 2023 | Imgur Viewer.');
        expect(getValue).toBeInTheDocument();
    });
})