/**
 *  Controlador
 *  Recebe as requisições
 *  Efetua as validações
 *  Envia para o Service e aguarda o retorno
 *  Envia para a view através do reply
 * 
 *  Reply = Response
 * */
import { FastifyRequest, FastifyReply } from "fastify"
import { CreateCustomerService } from "../services/CreateCustomerService"

class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {

    const { name, email } = request.body as { name: string, email: string }

    const customerService = new CreateCustomerService()
    const customer = await customerService.execute({ name, email })

    reply.send(customer)
  }
}

export { CreateCustomerController }