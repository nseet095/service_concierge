import { Button, Label, TextInput, Textarea } from "flowbite-react";

const ContactForm = () => {
  /* TODO: POST to endpoint */

  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-semibold text-center text-gray-900 dark:text-white">
        Contact Us
      </h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Have an enquiry? Want to find out more? Fill out the form below and
        someone will be in touch with you very soon.
      </p>
      {/* TODO: POST to endpoint */}
      <form action="#" className="space-y-8">
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
              className="text-gray-900 rounded-lg shadow-sm dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
              placeholder="name@website.com"
              required
            />
          </div>
          <div className="flex-1">
            <Label
              htmlFor="phoneNo"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              value="Phone Number"
            ></Label>
            <TextInput
              type="tel"
              id="phoneNo"
              className="text-gray-900 rounded-lg shadow-sm dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
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
              className="text-gray-900 rounded-lg shadow-sm dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
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
              id="lastName"
              className="text-gray-900 rounded-lg shadow-sm dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
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
            className="text-gray-900 rounded-lg shadow-sm dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
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
            type="text"
            sizing="lg"
            rows={4}
            required
            className="text-gray-900 rounded-lg shadow-sm dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light resize-none"
            placeholder="Leave a comment..."
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default ContactForm;
