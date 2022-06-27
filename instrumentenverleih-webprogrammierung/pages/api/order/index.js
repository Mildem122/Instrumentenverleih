// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../../lib/prisma.ts";

export default async function handler(req, res) {
  let data;
  switch (req.method) {
    case "GET":
      data = await prisma.order.findMany();
      break;
    case "POST":
      //CREATE;
      data = req.body;
      data = await prisma.order.create({
        data: data,
      });
      break;
  }

  res.status(200).json(data);
}
