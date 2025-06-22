import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginCard from '@/components/LoginPage/LoginCard';

/**
 * The main index page of the application, which serves as the login page.
 * It utilizes a full-page layout to center the login card.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginCard />
    </MainAppLayout>
  );
};

export default IndexPage;
