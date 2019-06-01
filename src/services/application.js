import api from './index';

export function sendApplication(data) {
  console.log(data);
  const doc = {
    _type: 'application',
    ...data,
  };

  return api.create(doc);
}



