import * as yup from 'yup';

export default yup.object().shape({
    name: yup
    .string()
    .required('A name is required')
    .min(2, 'Name must have at least 2 characters'),
    size: yup
    .string()
    .required('Required.'),
    toppings: yup
    .string()
    .required('Choose up to 4.')
    

})