"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";

interface FormData {
  email: string;
  password: string;
}

const formSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .max(1000)
    .required()
    .label("Email"),
  password: Joi.string().min(8).max(1000).required().label("Password"),
});

const LoginForm = () => {
  const [isLoading, setLoading] = useState(false);
  const form = useForm<FormData>({
    resolver: joiResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          setLoading(true);
          setTimeout(() => {
            toast.success("Form Submited"), setLoading(false);
          }, 1000);
        })}
        className="space-y-3"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading} className="w-full" type="submit">
          {isLoading ? <BeatLoader /> : "Log In"}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
