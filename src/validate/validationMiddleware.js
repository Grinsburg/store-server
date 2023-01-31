module.exports = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body, { abortEarly: false });
    return next();
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error });
  }
};
