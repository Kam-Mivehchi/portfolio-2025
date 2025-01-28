// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import cheerio from 'cheerio';
import { MetadataResponse } from '@/types/meta';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MetadataResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { urls } = req.body;
  const meta = [];

  console.log(urls);

  try {
    for (const url of urls) {
      if (!url) {
        return res.status(400).json({ error: 'URL is required' });
      }
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);

      const metadata = {
        title:
          $('meta[property="og:title"]').attr('content') || $('title').text(),
        description:
          $('meta[property="og:description"]').attr('content') ||
          $('meta[name="description"]').attr('content'),
        image: $('meta[property="og:image"]').attr('content'),
        url: $('meta[property="og:url"]').attr('content') || url,
      };
      meta.push(metadata);
    }

    res.status(200).json(meta);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch metadata' });
  }
}
