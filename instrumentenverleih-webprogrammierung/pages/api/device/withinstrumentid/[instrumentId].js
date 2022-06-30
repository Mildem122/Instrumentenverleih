// Next.js API route support: https://nextjs.org/docs/api-routes/introductio";
import prisma from "../../../../lib/prisma.ts";

export default async function handler(req, res) {
  let data;
  let instrumentId = req.query.instrumentId;
  switch (req.method) {
    case "GET":
      data = await prisma.device.findMany({
        where: {
          instrumentId: instrumentId,
        },
      });
      break;
  }

  res.status(200).json(data);
}
