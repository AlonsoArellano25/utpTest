const { gql } = require("apollo-server");

const typeDefs = gql`
  type Place {
    name: String
    description: String
    url: String
  }

  type Query {
    getPlaces: [Place]
  }
`;

module.exports = typeDefs;
