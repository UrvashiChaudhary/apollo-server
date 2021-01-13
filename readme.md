**GraphQL**
GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

***Important Features***
1. **Ask for what you need, get exactly that**
Send a GraphQL query to your API and get exactly what you need, nothing more and nothing less. GraphQL queries always return predictable results. Apps using GraphQL are fast and stable because they control the data they get, not the server.

2.**Get many resources in a single request**
GraphQL queries access not just the properties of one resource but also smoothly follow references between them. While typical REST APIs require loading from multiple URLs, GraphQL APIs get all the data your app needs in a single request. Apps using GraphQL can be quick even on slow mobile network connections.

3.**Describe what’s possible with a type system**
GraphQL APIs are organized in terms of types and fields, not endpoints. Access the full capabilities of your data from a single endpoint. GraphQL uses types to ensure Apps only ask for what’s possible and provide clear and helpful errors. Apps can use types to avoid writing manual parsing code.

**Difference between GraphQL and Rest**
1. One of the most common problems with REST is that of over- and underfetching. This happens because the only way for a client to download data is by hitting endpoints that return fixed data structures. It’s very difficult to design the API in a way that it’s able to provide clients with their exact data needs
2. Overfetching means that a client downloads more information than is actually required in the app. Imagine for example a screen that needs to display a list of users only with their names. In a REST API, this app would usually hit the /users endpoint and receive a JSON array with user data. This response however might contain more info about the users that are returned, e.g. their birthdays or addresses - information that is useless for the client because it only needs to display the users’ names.
3. Another issue is underfetching and the n+1-requests problem. Underfetching generally means that a specific endpoint doesn’t provide enough of the required information. The client will have to make additional requests to fetch everything it needs. This can escalate to a situation where a client needs to first download a list of elements, but then needs to make one additional request per element to fetch the required data.
4. GraphQL allows you to have fine-grained insights about the data that’s requested on the backend. As each client specifies exactly what information it’s interested in, it is possible to gain a deep understanding of how the available data is being used. This can for example help in evolving an API and deprecating specific fields that are not requested by any clients any more.
5. With a REST API, you would typically gather the data by accessing multiple endpoints. In the example, these could be /users/<id> endpoint to fetch the initial user data. Secondly, there’s likely to be a /users/<id>/posts endpoint that returns all the posts for a user. The third endpoint will then be the /users/<id>/followers that returns a list of followers per user.
6. In GraphQL on the other hand, you’d simply send a single query to the GraphQL server that includes the concrete data requirements. The server then responds with a JSON object where these requirements are fulfilled.

**Schema and Resolvers**

* When using graphql-tools, you define your field resolvers separately from the schema. Since the schema already describes all of the fields, arguments, and result types, the only thing left is a collection of functions that are called to actually execute these fields.

* In order to respond to queries, a schema needs to have resolvers for all fields. Resolvers are per field functions that are given a parent object, arguments, and the execution context, and are responsible for returning a result for that field. Resolvers cannot be included in the GraphQL schema language, so they must be added separately. The collection of resolvers is called the "resolver map".

* A schema is only useful if our data graph conforms to the schema's structure. Enforcing a schema's structure is one of the core features of Apollo Server, a production-ready, open-source library that helps you implement your data graph's API.
