// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {PrismaClient} from '@prisma/client'
// Llamar a la base de datos desde la api cuando quiero tener los datos en un estado 
// global
//llamas a la base de datos desde static cuando lo quiero usar en el mismo componente

const prisma = new PrismaClient()
const handler = async (req, res) => {
  const productos = await prisma.producto.findMany({
   
  })
  res.status(200).json( productos)
}

export default handler