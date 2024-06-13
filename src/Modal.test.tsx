import { describe, test, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'

import Modal from "./Modal"
import { userFixture } from "./testFixtures"

const setSelectedUser = vi.fn()

describe('<Modal />', () => {
  test('Modal displays as expected', async () => {
    const wrapper = render(<Modal user={userFixture} setSelectedUser={setSelectedUser}/>)
    expect(wrapper).toBeTruthy()

    // Test the that the opaque screen is in place
    expect(screen.getByTestId('opaque-screen')).toBeInTheDocument()

    // Test that the user first and last names are visible
    const nameText = screen.getByText(
        userFixture.firstname + " " + userFixture.lastname
       );
       expect(nameText.textContent).toBeTruthy()

    // Test that the user name is visible
    const userNameText = screen.getByText(
        userFixture.username
       );
       expect(userNameText.textContent).toBeTruthy()

    // Test that the role is visible
    const roleText = screen.getByText(
        userFixture.role
       );
       expect(roleText.textContent).toBeTruthy()
    
    // Test that the email is visible
    const emailText = screen.getByText(
        userFixture.email
       );
       expect(emailText.textContent).toBeTruthy()

    // Test that the join date is visible
    const joinDateText = screen.getByText(
        userFixture.join_date
       );
       expect(joinDateText.textContent).toBeTruthy()

    // Test that the description is visible
    const descriptionText = screen.getByText(
        userFixture.description
       );
       expect(descriptionText.textContent).toBeTruthy()

    // Test the background image of the Avatar
    expect(screen.getByTestId('modal-avatar')).toHaveStyle(`background-image: url("${userFixture.avatar}")`)

    //Test that clicking the close X button calls the setSelectedUser function
    expect(screen.getByText('X')).toBeInTheDocument()
    
    const user = userEvent.setup()
    const closeLink = screen.getByText("X")

    await user.click(closeLink)
    expect(setSelectedUser).toHaveBeenCalledWith(null)
  })
});