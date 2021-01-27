export default {
  loginUser: async (parent, args, context) => {
    const { payLoad: { email, password } } = args;
    const { dataSources: { userAPI } } = context;
    const response = await userAPI.loginUser({ email, password });
    console.log('responseeeee', response);
    // const res = JSON.stringify(response);
    return response.data;
  }
};
