import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const phoneRegExp = /^\+?([-\d]+)?$/;

const validation = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = ({ addContact }) => {
  return (
    <div>
      <Formik
        validationSchema={validation}
        initialValues={{ name: "", number: "" }}
        onSubmit={addContact}
      >
        <Form className={css.contactForm}>
          <label className={css.contactLabel}>
            <span> Name</span>
            <Field className={css.contactInput} name="name"></Field>
            <ErrorMessage
              className={css.errorMsg}
              name="name"
              component="span"
            />
          </label>
          <label className={css.contactLabel}>
            <span> Number</span>
            <Field className={css.contactInput} name="number"></Field>
            <ErrorMessage
              className={css.errorMsg}
              name="number"
              component="span"
            />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
