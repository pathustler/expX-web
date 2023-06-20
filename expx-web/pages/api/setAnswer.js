let value = 0;

export default function handler(req, res) {
  const { newValue } = req.body;
  value = newValue;
  res.status(200).json({ success: true });
}

export { value };