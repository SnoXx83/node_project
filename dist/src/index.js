import dataSource from "../config/db";
import { CountryResolver } from "./resolvers/CountryResolver";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/dist/esm/standalone";
const start = async () => {
    await dataSource.initialize();
    const schema = await buildSchema({
        resolvers: [CountryResolver],
    });
    const server = new ApolloServer({
        schema,
    });
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });
    console.log(`server ready at: ${url}`);
};
start();
