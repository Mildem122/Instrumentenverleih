// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../../lib/prisma.ts";

export default async function handler(req, res) {
  let data;
  let userId = req.query.userId;
  switch (req.method) {
    case "GET":
      data = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });
      break;
    case "PUT":
      //Update;
      data = req.body;
      data = await prisma.user.update({
        where: {
          id: userId,
        },
        data: data,
      });
      break;
    case "DELETE":
      data = await prisma.user.delete({
        where: {
          id: userId,
        },
      });
      break;
  }

  res.status(200).json(data);
}
