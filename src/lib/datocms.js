import { GraphQLClient, gql } from 'graphql-request';

export async function getBlogPosts() {
	const endpoint = 'https://graphql.datocms.com/';
	const token = '5e961fee4071c0694d62e19a2bbee3'; // Replace with your DatoCMS API token

	const graphQLClient = new GraphQLClient(endpoint, {
		headers: {
			authorization: `Bearer ${token}`
		}
	});

	const query = gql`
		query {
			allArticles {
				title
				author {
					name
				}
				content {
					blocks
					links
					value
				}
			}
		}
	`;

	const data = await graphQLClient.request(query);

	return data.allBlogPosts;
}
