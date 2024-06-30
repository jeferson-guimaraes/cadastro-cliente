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
import { ListCustomersService } from "../services/ListCustomersService"

class ListCustomersController {
  async handle(request: FastifyRequest, reply: FastifyReply){
    const listCustomerService = new ListCustomersService()

    const customers = await listCustomerService.execute()

    reply.send(customers)
  }
}

export { ListCustomersController }