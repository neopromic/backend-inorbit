import fastify from "fastify";

const app = fastify();

app
  .listen({
    port: 3000,
  })
  .then(() => {
    console.log("HTTP Server is running on http://localhost:3000");
  });
