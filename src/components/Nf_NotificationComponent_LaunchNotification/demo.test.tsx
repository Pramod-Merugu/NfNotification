// import { expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import '@testing-library/jest-dom';

import * as DemoStories from './demo.stories';



const { BaseNfNfComponentLaunchNotification } = composeStories(DemoStories);

test('renders NfNfComponentLaunchNotification', async () => {
  render(<BaseNfNfComponentLaunchNotification />);
  expect(await screen.findByText('Announcements')).toBeVisible();
  expect(await screen.findByText("See what's new")).toBeVisible();
  expect(
    await screen.findByText('Welcome to MediaCo Application for testing SDK frameworks.')
  ).toBeVisible();

  const workListArr = screen.getAllByText('Work list');
  expect(workListArr[0]).toBeVisible();
  expect(workListArr[1]).toBeInTheDocument();

  expect(await screen.findByText('Case type')).toBeVisible();
  expect(await screen.findByText('Key')).toBeVisible();
  expect(await screen.findByText('Status')).toBeVisible();
  expect(await screen.findByText('Stage')).toBeVisible();

  expect(await screen.findByText('A-8002')).toBeVisible();
  expect(await screen.findByText('A-7001')).toBeVisible();
  expect(await screen.findByText('A-9000')).toBeVisible();




});
