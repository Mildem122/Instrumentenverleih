// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../../lib/prisma.ts";

export default async function handler(req, res) {
  let data;
  let instrumentId = req.query.instrumentId;
  switch (req.method) {
    case "GET":
      data = await prisma.instrument.findUnique({
        where: {
          id: instrumentId,
        },
      });
      break;
    case "PUT":
      //Update;
      data = req.body;
      data = await prisma.instrument.update({
        where: {
          id: instrumentId,
        },
        data: data,
      });
      break;
    case "DELETE":
      data = await prisma.instrument.delete({
        where: {
          id: instrumentId,
        },
      });
      break;
  }

  res.status(200).json(data);
}
