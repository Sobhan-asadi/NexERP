/** @format */
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export function RegisterForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const registerRes = await axios.post(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local/register`,
        {
          username: formData.email,
          email: formData.email,
          password: formData.password,
        },
      );

      const jwt = registerRes.data.jwt;
      const userId = registerRes.data.user?.id;

      if (!jwt || !userId) {
        toast.error("Registration failed: invalid response from server.");
        return;
      }

      const updateRes = await axios.put(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/users/${userId}`,
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
        },
        {
          headers: { Authorization: `Bearer ${jwt}` },
        },
      );

      toast.success("Account created successfully!");

      router.push("/dashboard");
    } catch (error) {
      const backend = error.response?.data;

      if (backend) {
        if (backend.error?.message) {
          toast.error(backend.error.message);
        } else if (backend.data) {
          toast.error(JSON.stringify(backend.data));
        } else {
          toast.error("Registration failed. Please try again.");
        }
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader className='text-center'>
        <CardTitle>Welcome</CardTitle>
        <CardDescription>Please enter your details to register.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleRegister}>
          <FieldGroup>
            {/* First Name */}
            <Field>
              <FieldLabel htmlFor='firstName'>First Name</FieldLabel>
              <Input
                id='firstName'
                name='firstName'
                type='text'
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Field>
            {/* Last name */}
            <Field>
              <FieldLabel htmlFor='lastName'>Last Name</FieldLabel>
              <Input
                id='lastName'
                name='lastName'
                type='text'
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Field>
            {/* Email */}
            <Field>
              <FieldLabel htmlFor='email'>Email</FieldLabel>
              <Input
                id='email'
                name='email'
                type='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Field>
            {/* Password */}
            <Field>
              <FieldLabel htmlFor='password'>Password</FieldLabel>
              <Input
                id='password'
                name='password'
                type='password'
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Field>
            <Field>
              <Button type='submit' disabled={loading}>
                {loading ? "Registering..." : "Register"}
              </Button>
              <FieldDescription className='text-center'>
                &rsquo; have an account? <Link href='/login'>Log in</Link>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
