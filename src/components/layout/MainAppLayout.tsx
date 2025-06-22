import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props for the MainAppLayout component.
 */
interface MainAppLayoutProps {
  /**
   * The content to be rendered inside the layout.
   * This is typically the main page content, such as a login card.
   */
  children: React.ReactNode;
  /**
   * Optional additional class names to apply to the main layout container.
   */
  className?: string;
}

/**
 * A full-page layout component that centers its content both vertically and horizontally.
 * It provides a consistent background and basic structure for pages like login, signup, or error pages.
 *
 * @param {MainAppLayoutProps} props - The props for the component.
 * @returns {JSX.Element} The rendered layout component.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        "flex min-h-screen flex-col items-center justify-center bg-background p-4",
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
