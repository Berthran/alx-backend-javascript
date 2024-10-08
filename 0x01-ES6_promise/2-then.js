/* eslint-disable no-unused-vars */
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    .catch(() => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}
//   promise.resolve()
//   promise.then((_value) => {
//     console.log('Got a response from the API');
//     return { status: 200, body: 'success' };
//   }).catch((_err) => new Error());
// }
