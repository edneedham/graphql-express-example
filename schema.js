const graphql = require('graphql');

const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = graphql;

const posts = [
  {
    title: 'first post',
    description: 'excerpt from the post',
    content: 'the content of the first post',
    author: 'edward'
  },
  {
    title: 'second post',
    description: 'excerpt from second post',
    content: 'the content of the second post',
    author: 'simon'
  }
]

const authors = {
  'edward': {
    name: 'edward',
    age: 112
  },
  'simon': {
    name: 'simon',
    age: 231
  }
}

const authorType = new GraphQLObjectType({
  name: 'author',
  fields: {
    name: {
      type: GraphQLString
    },
    age: {
      type: GraphQLInt
    }
  }
})

const postType = new GraphQLObjectType({
  name: 'post',
  fields: {
    title: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    author: {
      type: authorType,
      resolve: (source, params) => {
        return authors[source.author]
      }
    }
  }
})


const schema = new GraphQLSchema({
  query: new GraphQLObjectType({

  })
})

module.exports = schema;