export * from "@prisma/client"
import {PrismaClient} from "@prisma/client/edge"
console.log('Initializing Prisma Client...');
export const prisma = new PrismaClient();
console.log('Prisma Client initialized:', prisma);
