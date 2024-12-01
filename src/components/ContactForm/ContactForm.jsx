import s from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, options) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.tel,
    });
    options.resetForm();
  };

  const initialValues = {
    name: "",
    tel: "",
  };

  const contactSchema = Yup.object().shape({
    name: Yup.string().min(3).max(50).required(),
    tel: Yup.string().min(3).max(50).required(),
  });

  return (
    <div className={s.wrapper}>
      <Formik
        validationSchema={contactSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field name="name" className={s.input} />
            <ErrorMessage name="name" component="span" className={s.error} />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field name="tel" className={s.input} />
            <ErrorMessage name="tel" component="span" className={s.error} />
          </label>
          <button className={s.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
