import * as yup from 'yup';

export const contentValidationSchema = yup.object().shape({
  title: yup.string().required(),
  body: yup.string().required(),
  source_url: yup.string().required(),
  curator_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
