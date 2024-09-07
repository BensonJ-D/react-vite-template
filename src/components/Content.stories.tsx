import React from 'react';
import { Story } from '@ladle/react/typings-for-build/app/exports';
import { Content } from './Content';

export const TestContent: Story = () => <Content />;
TestContent.storyName = 'Content';
TestContent.meta = {
  title: 'Test content'
};
