const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLSchema,
} = require('graphql');
const {
  getBookById,
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
} = require("../controller/bookController");

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    author: { type: GraphQLString },
    description: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return getBookById(args.id);
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return getAllBooks();
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addBook: {
      type: BookType,
      args: {
        title: { type: GraphQLString },
        author: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve(parent, args) {
        return createBook(args);
      },
    },
    updateBook: {
      type: BookType,
      args: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        author: { type: GraphQLString },
        description: { type: GraphQLString },
      },
      resolve(parent, args) {
        return updateBook(args.id, args);
      },
    },
    deleteBook: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return deleteBook(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
