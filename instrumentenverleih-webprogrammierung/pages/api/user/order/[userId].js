// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../../../lib/prisma.ts";

export default async function handler(req, res) {
  let data;
  let userId = req.query.userId;
  switch (req.method) {
    case "GET":
      data = await prisma.order.findMany({
        where: {
          userId: userId,
        },
      });
      break;
  }

  res.status(200).json(data);
}
