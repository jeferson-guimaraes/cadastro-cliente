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
import { DeleteCustomerService } from "../services/DeleteCustomerService"

class DeleteCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: string }
        const deleteCustomerService = new DeleteCustomerService()

        const customer = await deleteCustomerService.execute({ id })
        console.log(customer)
        reply.send(customer)
    }
}

export { DeleteCustomerController }