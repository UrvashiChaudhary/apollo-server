import user from '../../service/user';

export default {

  // getAllTrainees: () => user.getAllUsers(),
  getAllTrainees: async (parent, args, context) => {
    // const response = await traineeAPI.getTrainees();
    // return response.record;
    const { payLoad: { skip, limit } } = args;
    const { dataSources: { traineeAPI } } = context;
    const response = await traineeAPI.getTrainees({ skip, limit });
    return response;
  },
  getTrainee: (parent, args) => {
    const { id } = args;
    return user.getUser(id);
  }
};
