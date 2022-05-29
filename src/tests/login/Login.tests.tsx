/**
 * @jest-environment jsdom
 */


import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login from "../../views/Login";



describe("<Login/> test cases", () => {

  // test case-1
  test("should display a blank login form", async () => {
    const { findByTestId } = render(<Login />);

    const loginForm = await findByTestId('login-form');
    expect(loginForm).toHaveFormValues({
      email: "",
      password: ""
    })
  });

  // test case-2
  test("should allow entering email", async () => {

    const onEmailChange = jest.fn();
    const { findByTestId } = render(<Login onEmailChange={onEmailChange} />);

    const emailField = await findByTestId('email-input');

    fireEvent.change(emailField, { target: { value: 'test@gmail.com' } })

    expect(onEmailChange).toHaveBeenCalledWith('test@gmail.com');

  })

  // test case-3
  test("should allow entering password", async () => {

    const onPasswordChange = jest.fn();
    const { findByTestId } = render(<Login onPasswordChange={onPasswordChange} />);

    const passwordField = await findByTestId('password-input');

    fireEvent.change(passwordField, { target: { value: 'tester123' } })

    expect(onPasswordChange).toHaveBeenCalledWith('tester123');

  })
  // test case-4
  test("should submit login form with email and password", async () => {

    const onSubmit = jest.fn();
    const { findByTestId } = render(<Login onSubmit={onSubmit} />);

    const emailField = await findByTestId('email-input');
    const passwordField = await findByTestId('password-input');
    const loginButton = await findByTestId('login-button');

    fireEvent.change(emailField, { target: { value: 'test@gmail.com' } })
    fireEvent.change(passwordField, { target: { value: 'tester123' } })
    fireEvent.click(loginButton);

    window.alert = () => { };  // provide an empty implementation for window.alert

    return expect(onSubmit).toHaveBeenCalledWith('test@gmail.com', 'tester123');
  })




});