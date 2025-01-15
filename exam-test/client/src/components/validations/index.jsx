
import * as Yup from 'yup';

 export const AddProductSchema = Yup.object().shape({
  title: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  description: Yup.string()
    .min(10, 'Too Short!')
    .max(500, 'Too Long!')
    .required('Required'),
    imageUrl: Yup.string()
    .min(10, 'Too Short!')
    .max(500, 'Too Long!')
    .required('Required'),
    price: Yup.string()
    .min(1, 'Too Short!')
    .max(500, 'Too Long!')
    .required('Required'),
  
});