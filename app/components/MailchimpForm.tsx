"use client";

import { useState } from "react";
import { CheckCircle, Loader } from "lucide-react";
import { PulseLoader } from "react-spinners";

export default function Mailchimp() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const validateInputs = () => {
    let isValid = true;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    // First name validation
    if (firstName.trim() === "") {
      setFirstNameError("First name is required");
      isValid = false;
    } else {
      setFirstNameError("");
    }

    // Last name validation
    if (lastName.trim() === "") {
      setLastNameError("Last name is required");
      isValid = false;
    } else {
      setLastNameError("");
    }

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Input validation
    const isValid = validateInputs();
    if (!isValid) {
      return;
    }

    const url = `/api/subscribe?EMAIL=${encodeURIComponent(
      email
    )}&FNAME=${encodeURIComponent(firstName)}&LNAME=${encodeURIComponent(
      lastName
    )}`;

    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      // Handle the response data from Mailchimp if needed
      console.log("Mailchimp response:", data);
      setIsSubscribed(true);
    } catch (error) {
      console.error("Error while submitting the form:", error);
      // Handle error if needed
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form className="flex flex-col justify-between items-center gap-4" onSubmit={handleSubmit}>
        <div className="w-full flex flex-col justify-between items-center md:flex-row gap-4">
          <input
            className="w-full rounded-lg p-4 text-lg text-black"
            placeholder="Email"
            type="email"
            name="EMAIL"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <div className="error-message">{emailError}</div>}

          <input
            className="w-full rounded-lg p-4 text-lg text-black"
            placeholder="First Name"
            type="text"
            name="FNAME"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
          {firstNameError && <div className="error-message">{firstNameError}</div>}

          <input
            className="w-full rounded-lg p-4 text-lg text-black"
            placeholder="Last Name"
            type="text"
            name="LNAME"
            required
            onChange={(e) => setLastName(e.target.value)}
          />
          {lastNameError && <div className="error-message">{lastNameError}</div>}
        </div>
        <div className="w-full flex flex-row justify-center items-center">
          <button className="w-full md:w-1/3 flex flex-row gap-2 h-14 justify-center items-center border border-terracotta-400 bg-terracotta-400 bg-opacity-10 rounded-lg p-4 text-lg text-terracotta-400" type="submit">
            {!isLoading && !isSubscribed
              ? "Sign Up"
              : isLoading ? <PulseLoader size={12} color="#E77366" />
              : <><CheckCircle size={16} /><span>Subscribed!</span></>}
          </button>
        </div>
      </form>
    </div>
  );
}