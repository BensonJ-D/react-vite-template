import React from 'react';
import { Story } from '@ladle/react';
import { Content } from './Content';

export const TestContent: Story = () => <Content />;
TestContent.storyName = 'Content';
TestContent.meta = {
  title: 'Test content'
};
