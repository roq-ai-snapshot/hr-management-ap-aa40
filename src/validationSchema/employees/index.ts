import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  job_title: yup.string().required(),
  department: yup.string().nullable(),
  start_date: yup.date().nullable(),
  end_date: yup.date().nullable(),
  salary: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
