import { GraphQLClient, gql } from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHQL_API;
const cmsToken = process.env.GRAPHCMS_TOKEN;

export default async function comment(req, res) {
  if (req.method === "POST") {
    const { name, email, comment, slug } = req.body;
    const graphqlClient = new GraphQLClient(graphqlAPI, {
      headers: {
        authorization: `Bearer ${cmsToken}`,
      },
    });
    try {
      const query = gql`
        mutation CreateComment(
          $name: String!
          $email: String!
          $comment: String!
          $slug: String!
        ) {
          createComment(
            data: {
              name: $name
              email: $email
              comment: $comment
              post: { connect: { slug: $slug } }
            }
          ) {
            id
          }
        }
      `;
      const result = await graphqlClient.request(query, {
        name,
        email,
        comment,
        slug,
      });
      return res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    res.status(403).json({ message: "Kindly use authetic method!" });
  }
}
