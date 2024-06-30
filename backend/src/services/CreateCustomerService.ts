/** 
 *  Services são responsaveis pelos serviços no banco de dados (CRUD)
 * 
 *  Cadastro
*/

import prismaClient from "../prisma"

// Obriga o envio dos parâmetros na requisição rest
interface CreateCustomerProps {
  name: string,
  email: string
}

class CreateCustomerService {
  async execute({ name, email }: CreateCustomerProps) {

    if (!name || !email) {
      throw new Error("Preencha todos os campos")
    }

    const customer = await prismaClient.customer.create({
      data: {
        name,
        email,
        status: true
      }
    })

    return customer
  }
}

export { CreateCustomerService }