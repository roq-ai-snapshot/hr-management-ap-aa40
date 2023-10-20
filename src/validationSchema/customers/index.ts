import * as yup from 'yup';

export const customerValidationSchema = yup.object().shape({
  company_name: yup.string().nullable(),
  contact_person: yup.string().nullable(),
  contact_phone: yup.string().nullable(),
  contact_email: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
