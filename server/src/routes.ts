import { FastifyInstance } from "fastify";
import { prisma } from "./lib/prisma";

export const appRoutes = async (app: FastifyInstance) => {
  /*
  app.get('/habbits', async() => {
    const habits = await prisma.habit.findMany();
    return habits;
  });
  */
  app.get('/', async() => {
   
    return {
      msg: "hello"
    };
  });

}