import * as yup from 'yup';

export const ownerValidationSchema = yup.object().shape({
  share_percentage: yup.number().integer().nullable(),
  investment_amount: yup.number().integer().nullable(),
  investment_date: yup.date().nullable(),
  company_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
