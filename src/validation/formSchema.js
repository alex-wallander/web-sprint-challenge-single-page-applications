import * as yup from 'yup';

export default yup.object().shape({
    name: yup
    .string()
    .required('A name is required')
    .min(2, 'Name must have at least 2 characters'),
    size: yup
    .string()
    .oneOf(['10', '14', '16'], 'Please select a size'),
    pepperoni: yup
    .boolean(),
    sausage: yup
    .boolean(),
    onions: yup
    .boolean(),
    spinach: yup
    .boolean(),
    sauce: yup
    .boolean(), 
    special: yup
    .string()   

})