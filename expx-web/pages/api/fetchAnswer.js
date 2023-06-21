import { value } from './setAnswer';

export default function handler(req, res) {
  res.status(200).json({ result: value });
}
