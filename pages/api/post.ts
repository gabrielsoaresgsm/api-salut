import nextConnect from 'next-connect'
import {NextApiRequest, NextApiResponse} from 'next'
import { prisma } from '../lib/prisma'

type AffiliateData = {
  name: string;
  email: string
}

type UserData = {
  userId: string
}

const handler = nextConnect<NextApiRequest, NextApiResponse>({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})

handler.post(async (request, response) => {
  const { name, email } = request.body as AffiliateData
  const { userId } = request.query as UserData

  try {

    await prisma.affiliate.create({
      data: {
        name,
        email,
        userId,
      }
    })

    return response.status(201).json({ affiliate: { name, email}})
    
  } catch {
    return response.status(400).json({message: 'Nah!'})
  }
})

handler.get((request, response) => {
  return response.status(200).json({message: 'Like Express!'})
})


export default handler