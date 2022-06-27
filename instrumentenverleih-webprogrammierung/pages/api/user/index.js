// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../../lib/prisma.ts";

export default async function handler(req, res) {
  let data;
  switch (req.method) {
    case "GET":
      data = await prisma.user.findMany();
      break;
    case "POST":
      //CREATE;
      data = req.body;
      data = await prisma.user.create({
        data: data,
      });
      break;
  }

  res.status(200).json(data);
}
