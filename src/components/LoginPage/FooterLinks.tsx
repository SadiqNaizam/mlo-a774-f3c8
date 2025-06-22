import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FooterLinksProps {
  className?: string;
}

const FooterLinks: React.FC<FooterLinksProps> = ({ className }) => {
  return (
    <p className={cn("text-center text-sm text-muted-foreground", className)}>
      Don't have an account?{' '}
      <Button variant="link" className="p-0 h-auto font-semibold text-primary">
        SignUp
      </Button>
    </p>
  );
};

export default FooterLinks;
