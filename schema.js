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

const queryType = new GraphQLObjectType({
  name: 'query',
  fields: {
    post: {
      type: postType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (source, { id }) => {
        return posts[id]
      }
    },
    posts: {
      type: new GraphQLList(postType),
      resolve: () => {
        return posts
      }
    }
  }
})



const schema = new GraphQLSchema({
  query: queryType
})

module.exports = schema;