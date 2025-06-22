"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
});

type LoginFormValues = z.infer<typeof formSchema>;

const LoginForm: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: LoginFormValues) => {
    console.log("Login submitted:", values);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel className="text-sm font-medium text-muted-foreground">Email Address</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  {...field}
                  className="h-auto bg-transparent border-0 border-b border-input rounded-none p-1 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary transition-colors"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel className="text-sm font-medium text-muted-foreground">Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  {...field}
                  className="h-auto bg-transparent border-0 border-b border-input rounded-none p-1 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary transition-colors"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end pt-1">
            <Button variant="link" type="button" className="p-0 h-auto text-xs font-semibold text-primary/90 hover:text-primary">
                Forgot Password
            </Button>
        </div>
        <Button type="submit" className="w-full !mt-8" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
