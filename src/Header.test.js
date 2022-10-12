import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Header from './components/Header'

afterEach(cleanup)

test('render home text', () => { 
  const {} = render(<Header test='Hello' />)
  // const text = screen.getByText(/home/i)
  expect().toMatchSnapshot()
})

test('insert text in h1', () => {
  const {getByTestId, getByText} = render(<Header test='Hello'/>)
  
  expect(getByTestId('h1tag')).toHaveTextContent('Hello')
  expect(getByText('Hello')).toHaveClass('f ancy-h1')
})