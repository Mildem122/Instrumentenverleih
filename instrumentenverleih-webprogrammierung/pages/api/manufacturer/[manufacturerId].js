// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../../lib/prisma.ts";

export default async function handler(req, res) {
  let data;
  let manufacturerId = req.query.manufacturerId;
  switch (req.method) {
    case "GET":
      data = await prisma.manufacturer.findUnique({
        where: {
          id: manufacturerId,
        },
      });
      break;
    case "PUT":
      //Update;
      data = req.body;
      data = await prisma.manufacturer.update({
        where: {
          id: manufacturerId,
        },
        data: data,
      });
      break;
    case "DELETE":
      data = await prisma.manufacturer.delete({
        where: {
          id: manufacturerId,
        },
      });
      break;
  }

  res.status(200).json(data);
}
