import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  try {
    const nishi = await kv.get('nishi_score') || 0;
    const charan = await kv.get('charan_score') || 0;
    return res.status(200).json({ nishi, charan });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
