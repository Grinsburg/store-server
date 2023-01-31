const yup = require('yup');

const schema = yup.object().shape({
    id: yup.string(),
    name: yup.string(),
    code: yup.string(),
    brand: yup.string(),
    weight: yup.string(),
    height: yup.string(),
    width: yup.string(),
    vendorCode: yup.string(),
    country: yup.string(),
    purchasePrice: yup.string(),
    sellPrice: yup.string(),
    length: yup.string(),
    group: yup.string(),
});

module.exports = schema;
