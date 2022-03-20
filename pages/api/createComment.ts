// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default function createComment(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json({ name: 'John Doe' })
}
