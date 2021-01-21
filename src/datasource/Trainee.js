import { RESTDataSource } from 'apollo-datasource-rest';
import configurations from '../config/configurations';

export default class TraineeAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${configurations.serviceUrl}/api/trainee`;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }

  getTrainees() {
    return this.get('/trainee');
  }

  createTrainee(payload) {
    return this.post('/trainee', payload);
  }

  updateTrainee() {
    return this.put('/trainee');
  }

  deleteTrainee() {
    return this.delete('/trainee');
  }
}
