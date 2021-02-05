/* eslint-disable no-unused-vars */
import pubsub from '../pubsub';
import constants from '../../libs/constants';

export default {
  createTrainee: async (parent, args, context) => {
    const { payLoad: { email, name, password } } = args;
    const { dataSources: { traineeAPI } } = context;
    const addedTrainee = await traineeAPI.createTrainee({ email, name, password });
    console.log('sssssssssssssssssssssss', addedTrainee.data);
    const addedTraineeData = JSON.stringify(addedTrainee.data);
    pubsub.publish(constants.subscriptions.TRAINEE_ADDED, { traineeAdded: addedTrainee.data });
    return addedTraineeData;
  },
  updateTrainee: async (parent, args, context) => {
    const {
      payLoad: {
        id, role, name, email, password
      }
    } = args;
    const { dataSources: { traineeAPI } } = context;
    const updatedTrainee = await traineeAPI.updateTrainee({
      id, name, email, role, password
    });
    console.log('333333333333333', updatedTrainee);
    const updatedTraineeData = JSON.stringify(updatedTrainee);
    // eslint-disable-next-line max-len
    pubsub.publish(constants.subscriptions.TRAINEE_UPDATED, { traineeUpdated: updatedTrainee });
    return updatedTraineeData;
  },
  deleteTrainee: async (parent, args, context) => {
    const { payLoad: { id } } = args;
    const { dataSources: { traineeAPI } } = context;
    const deletedID = await traineeAPI.deleteTrainee(id);
    console.log('deletedID------', deletedID);
    const deletedTraineeData = JSON.stringify(deletedID);
    console.log('deletedTraineeData', deletedTraineeData);
    pubsub.publish(constants.subscriptions.TRAINEE_DELETED, { traineeDeleted: deletedID });
    return deletedID;
  }
};
