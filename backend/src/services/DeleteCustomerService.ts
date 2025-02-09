/** 
 *  Services são responsaveis pelos serviços no banco de dados (CRUD)
 * 
 *  Deletar
*/
import prismaClient from "../prisma"

interface DeleteCustomerProps {
  id: string
}

class DeleteCustomerService {
  async execute({ id }: DeleteCustomerProps) {

    if (!id) {
      throw new Error("Solicitação invalida")
    }

    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id: id
      }
    })

    if (!findCustomer) {
      throw new Error("Cliente não encontrado")
    }

    await prismaClient.customer.delete({
      where: {
        id: findCustomer.id
      }
    })

    return { message: "Deletado com sucesso" }
  }
}

export { DeleteCustomerService }