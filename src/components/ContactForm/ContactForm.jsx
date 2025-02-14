import React from "react";
import s from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const ContactForm = ({ newContact }) => {
  const patternNumber = /^(\d{3}-\d{2}-\d{2}|\d{7})$/;
  const patternName = /^[A-Za-zА-Яа-яЇїІіЄєҐґ]+$/;

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required")
      .matches(patternName, "Only letters!"),
    number: Yup.string()
      .required("Required")
      .matches(patternNumber, "Format is not correct! XXX-XX-XX"),
  });

  const initialValues = {
    id: nanoid(),
    name: "",
    number: "",
  };
  const hundleSubmit = (values, action) => {
    console.log(values);
    newContact(values);
    action.resetForm();
  };

  return (
    <div className={s.formContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={hundleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form>
          <label>
            Name
            <Field type="text" name="name" placeholder="Enter name" />
            <ErrorMessage className={s.error} name="name" component="span" />
          </label>
          <label htmlFor="number">
            Number
            <Field type="tel" name="number" placeholder="Enter phone" />
            <ErrorMessage className={s.error} name="number" component="span" />
          </label>
          <button className={s.btnAddContact} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
