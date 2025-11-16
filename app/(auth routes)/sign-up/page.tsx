"use client";
import { register, RegisterRequest } from "@/lib/api/clientApi";
import css from "./SignUpPage.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUpPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const handleSubmit = async (formData: FormData) => {
    try {
      const formValues: RegisterRequest = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      };

      const res = await register(formValues);
      if (res) {
        router.push("/profile");
      } else {
        setError("Invalid email or password");
        console.log(error);
      }
    } catch (error) {
      console.log(error);
      setError("Oops... some error");
    }
  };

  return (
    <div>
      <main className={css.mainContent}>
        <h1 className={css.formTitle}>Sign up</h1>
        <form className={css.form} action={handleSubmit}>
          <div className={css.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              className={css.input}
              required
            />
          </div>

          <div className={css.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              className={css.input}
              required
            />
          </div>

          <div className={css.actions}>
            <button type="submit" className={css.submitButton}>
              Register
            </button>
          </div>

          <p className={css.error}>Error</p>
        </form>
      </main>
    </div>
  );
};

export default SignUpPage;
