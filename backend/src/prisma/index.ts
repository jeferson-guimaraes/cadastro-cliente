/**
 *  Prisma é o ORM escolhido para ser usado nesta API
 */

import { PrismaClient } from "@prisma/client"

const prismaClient = new PrismaClient()

export default prismaClient