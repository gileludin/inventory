// src/app/(auth)/sign-in/page.tsx

import React from "react";
import AuthForm from "../(components)/AuthForm";

const SignIn = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <div className="max-w-md w-full mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center">Sign In</h1>
        <AuthForm />
      </div>
    </section>
  );
};

export default SignIn;
