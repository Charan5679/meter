import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  const { who } = req.query;
  if (!who || (who !== 'nishi' && who !== 'charan')) {
    return res.status(400).json({ error: 'Invalid user' });
  }
  try {
    const newScore = await kv.incr(`${who}_score`);
    return res.status(200).json({ score: newScore });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
