/** 
 *  Services são responsaveis pelos serviços no banco de dados (CRUD)
 * 
 *  Buscar
*/

import prismaClient from "../prisma"

class ListCustomersService {
  async execute() {
    const customers = await prismaClient.customer.findMany()

    return customers
  }
}

export { ListCustomersService }