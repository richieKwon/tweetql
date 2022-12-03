import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
type Tweet {
text : string
}
`;

const server = new ApolloServer({ typeDefs });

server.listen().then(
    ({ url }) => { console.log(`Running on ${url}`) }
);