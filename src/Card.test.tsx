import { describe, test, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Card from "./Card"
import { userFixture } from "./testFixtures"

const setSelectedUser = vi.fn()

describe('<Card />', () => {
  test('Card displays as expected', async () => {
    const wrapper = render(<Card user={userFixture} setSelectedUser={setSelectedUser}/>)
    expect(wrapper).toBeTruthy()

    // Test that the user name is visible
    const nameText = screen.getByText(
     userFixture.firstname + " " + userFixture.lastname
    );
    expect(nameText.textContent).toBeTruthy()

    // Test the background image of the Avatar
    expect(screen.getByTestId('avatar')).toHaveStyle(`background-image: url("${userFixture.avatar}")`)

    //Test that clicking the View More button calls the setSelectedUser function
    expect(screen.getByText('View More')).toBeInTheDocument()
    
    const user = userEvent.setup()
    const aboutLink = screen.getByText(/View More/i)

    await user.click(aboutLink)
    expect(setSelectedUser).toHaveBeenCalledTimes(1)
  })
});