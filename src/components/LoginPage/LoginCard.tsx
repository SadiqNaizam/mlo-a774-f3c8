import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import LoginForm from './LoginForm';
import FooterLinks from './FooterLinks';

interface LoginCardProps {
  className?: string;
}

const LoginCard: React.FC<LoginCardProps> = ({ className }) => {
  return (
    <Card className={cn("w-full max-w-sm", className)}>
      <CardHeader className="pt-8 pb-4">
        <CardTitle className="text-center text-2xl font-bold tracking-tight">
          Welcome
        </CardTitle>
      </CardHeader>
      <CardContent className="py-2">
        <LoginForm />
      </CardContent>
      <CardFooter className="pt-2 pb-8">
        <FooterLinks className="w-full" />
      </CardFooter>
    </Card>
  );
};

export default LoginCard;
