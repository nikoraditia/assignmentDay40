//Test User Action case
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import PostSection from './view';


test('renders title', () => {
    const testText = "Title";

    render(<PostSection />);

    const input = screen.getByTestId("text-title");
    userEvent.type(input, testText);

    const textElement = screen.getAllByText(`Title: ${testText}`);
    expect(textElement[0]).toBeInTheDocument();
});


test('renders description', () => {
    const testText2 = "description";
    
    render(<PostSection />);
    
    const input = screen.getByTestId("text-description");
    userEvent.type(input, testText2);
    
    const textElement = screen.getAllByText(`Description: ${testText2}`);
    expect(textElement[0]).toBeInTheDocument();
    });