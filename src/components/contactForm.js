
"use client"
// import React, { useState } from "react";

import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { lato } from "@/app/fonts";
// import { PhoneNumberUtil } from 'google-libphonenumber';
// import { PhoneInput } from 'react-international-phone';
// import 'react-international-phone/style.css';

// const phoneUtil = PhoneNumberUtil.getInstance();

// const isPhoneValid = (phone) => {
//   try {
//     return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
//   } catch (error) {
//     return false;
//   }
// };

const ContactForm = () => {
  /* TODO: POST to endpoint */

  // const [phone, setPhone] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    console.log(formData.get('email'));
    console.log(formData.get(phone));
    console.log(formData.get('firstName'));
    console.log(formData.get('lastName'));
    console.log(formData.get('subject'));
    console.log(formData.get('message'));
  }
  

  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className={`${lato.className} mb-4 text-4xl tracking-tight font-light text-center text-gray-900 dark:text-white`}>
        CONTACT US
      </h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Have an enquiry? Want to find out more? Fill out the form below and
        someone will be in touch with you very soon.
      </p>
      {/* TODO: POST to endpoint */}
      <form
        onSubmit={submitForm}
        className="space-y-8"
        autoComplete="on"
        action="post"
      >
        <div className="flex flex-wrap gap-4">
          <div className="flex-1">
            <Label
              htmlFor="email"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              value="Email Address"
            />
            <TextInput
              type="email"
              id="email"
              name="email"
              className="text-gray-900 shadow-sm dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
              placeholder="name@website.com"
              required
            />
          </div>
          <div className="flex-1">
            <Label
              htmlFor="phoneNo"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              value="Phone Number"
            />
            {/* <PhoneInput
              defaultCountry="sg"
              preferredCountries={["sg", "my"]}
              value={phone}
              countrySelectorStyleProps={{
                buttonClassName:
                  "p-0 text-gray-900 dark:hover:bg-slate-800 dark:bg-slate-700 dark:text-white dark:shadow-sm-light",
                listItemClassName:
                  "text-gray-900 dark:bg-slate-800 dark:text-white dark:shadow-sm-light dark:checked:bg-slate-1000",
                dropdownStyleProps: {
                  className:
                    "text-gray-900 dark:bg-slate-800 dark:text-white dark:shadow-sm-light",
                },
              }}
              // inputStyle={}
              // inputClassName="text-gray-900 shadow-sm dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
              inputProps={{
                className:
                  "text-gray-900 dark:placeholder-gray-800 dark:text-white dark:bg-slate-700",
                style: { font: inter },
              }}
              // className="text-gray-900 shadow-sm dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
              required
              onChange={(phone) => setPhone(phone)}
            /> */}
            <TextInput
              type="tel"
              id="phoneNo"
              className="text-gray-900 shadow-sm dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
              placeholder="12345678"
              required

            />
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="flex-1">
            <Label
              htmlFor="firstName"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              value="First Name"
            />
            <TextInput
              type="text"
              id="firstName"
              name="firstName"
              className="text-gray-900 shadow-sm dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
              placeholder="John"
              required
            />
          </div>
          <div className="flex-1">
            <Label
              htmlFor="lastName"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              value="Last Name"
            />
            <TextInput
              type="text"
              name="lastName"
              id="lastName"
              className="text-gray-900 shadow-sm dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
              placeholder="Smith"
              required
            />
          </div>
        </div>
        <div className="flex-1">
          <Label
            htmlFor="subject"
            className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
          >
            Subject
          </Label>
          <TextInput
            type="text"
            id="subject"
            name="subject"
            className="text-gray-900 shadow-sm dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <Label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Your message
          </Label>
          <Textarea
            id="message"
            name="message"
            type="text"
            sizing="lg"
            rows={4}
            required
            className="text-gray-900 shadow-sm dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light resize-none"
            placeholder="Leave a comment..."
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default ContactForm;
