import { gql } from "apollo-server-express";
import messageSchema from "./messages";
import userSchema from "./user";

const linkSchema = gql`
  type Query{
    :Boolean    
  }
  type Mutation {
    :Boolean

  }
`;
export default [linkSchema, messageSchema, userSchema];
