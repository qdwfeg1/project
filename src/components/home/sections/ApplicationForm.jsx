import PropTypes from "prop-types"
import InputMask from "react-input-mask"
import clsx from "clsx"
import { useFormik } from "formik"
import * as yup from "yup"
import NetlifyForm from "components/NetlifyForm"

const validationSchema = yup.object({
  name: yup.string().required(),
  age: yup.string().required(),
  phone: yup
    .string()
    .matches(/^\+375 \d{2} \d{3}-\d{2}-\d{2}/)
    .required(),
})

const ApplicationForm = ({
  title,
  subtitle,
  btnTitle,
  image,
  namePlaceholder,
  agePlaceholder,
  ageOptions,
  phonePlaceholder,
  phoneMask,
}) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      phone: "",
    },
    validationSchema,
  })

  return (
    <section className="application-form">
      <div className="container">
        <h1 className="title">{title}</h1>
        <p className="subtitle">{subtitle}</p>
        <NetlifyForm
          className="application-form__form"
          formName="Application Form"
          formValues={formik.values}
          preSubmit={() => !formik.errors.name && !formik.errors.age && !formik.errors.phone}
          postSubmit={formik.resetForm}
        >
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="application-form__label name">
            <input
              id="name"
              name="name"
              type="text"
              placeholder={namePlaceholder}
              className={clsx(
                "form-control",
                formik.touched.name && Boolean(formik.errors.name) && "error",
              )}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </label>
          <select
            id="age"
            name="age"
            className={clsx(
              "form-select",
              !formik.values.age && "placeholder",
              formik.touched.age && Boolean(formik.errors.age) && "error",
            )}
            onChange={formik.handleChange}
            value={formik.values.age}
          >
            <option key="someKey" value="" disabled="disabled" hidden="hidden">
              {agePlaceholder}
            </option>
            {ageOptions?.text.split("\n").map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            )) || null}
          </select>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="application-form__label phone">
            <InputMask
              id="phone"
              name="phone"
              type="tel"
              placeholder={phonePlaceholder}
              className={clsx(
                "form-control",
                formik.touched.phone && Boolean(formik.errors.phone) && "error",
              )}
              mask={phoneMask}
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
          </label>
          <div className="application-form__btn-wrapper">
            <img src={image.file.src} alt={image.alt} className="application-form__image" />
            <button className="btn" type="submit">
              {btnTitle}
            </button>
          </div>
        </NetlifyForm>
      </div>
    </section>
  )
}

ApplicationForm.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  btnTitle: PropTypes.string.isRequired,
  image: PropTypes.exact({
    file: PropTypes.exact({
      src: PropTypes.string,
    }),
    alt: PropTypes.string,
  }).isRequired,
  namePlaceholder: PropTypes.string.isRequired,
  agePlaceholder: PropTypes.string.isRequired,
  ageOptions: PropTypes.exact({
    text: PropTypes.string,
  }).isRequired,
  phonePlaceholder: PropTypes.string.isRequired,
  phoneMask: PropTypes.string.isRequired,
}

export default ApplicationForm
