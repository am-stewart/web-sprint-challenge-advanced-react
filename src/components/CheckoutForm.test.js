import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import CheckoutForm from "./CheckoutForm";


// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>);
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)

    const firstname = screen.getByLabelText(/First Name:/i);
    userEvent.type(firstname, 'Allison')
    const lastname = screen.getByLabelText(/Last Name:/i);
    userEvent.type(lastname, 'Stewart');
    const address = screen.getByLabelText(/Address:/i);
    userEvent.type(address, '123 Circle Drive');
    const city = screen.getByLabelText(/City:/i);
    userEvent.type(city, 'Boston');
    const state = screen.getByLabelText(/State:/i);
    userEvent.type(state, 'MA');
    const zip = screen.getByLabelText(/Zip:/i);
    userEvent.type(zip, '02101');
    const checkoutButton = screen.getByRole('button');
    userEvent.click(checkoutButton);

    await waitFor( ()=> {
    const successMessage = screen.queryByTestId('successMessage')
    expect(successMessage).toBeInTheDocument();
    })
});
