import type { NextApiRequest, NextApiResponse } from 'next'
import { getTeam } from '../../services/twitch'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  
  const team = await getTeam()

  res.status(200).json(team)
}
