import type { NextApiRequest, NextApiResponse } from 'next'
import { getTeam } from '../../services/twitch'

type Data = {
  fera: string,
  profile_image_url: string,
  is_live: boolean,
  title: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  
  const team = await getTeam()

  res.status(200).json(team)
}
