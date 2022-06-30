// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../../lib/prisma.ts";

export default async function handler(req, res) {
  let data;
  let orderId = req.query.orderId;
  switch (req.method) {
    case "GET":
      data = await prisma.order.findUnique({
        where: {
          id: orderId,
        },
      });
      break;
    case "PUT":
      //Update;
      data = req.body;
      data = await prisma.order.update({
        where: {
          id: orderId,
        },
        data: data,
      });
      break;
    case "DELETE":
      data = await prisma.order.delete({
        where: {
          id: orderId,
        },
      });
      break;
  }

  res.status(200).json(data);
}
