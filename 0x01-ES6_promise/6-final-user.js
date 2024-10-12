import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// #1 Using promises
// export default function handleProfileSignUp(firstName, lastName, fileName) {
//   const userDetails = signUpUser(firstName, lastName);
//   const photoUpload = uploadPhoto(fileName);
//   return Promise.allSettled([userDetails, photoUpload])
//     .then((results) => results);
// }

// #2 Using async/await
export default async function handleProfileSignUp(firstName, lastName, fileName) {
  const userDetails = signUpUser(firstName, lastName);
  const photoUpload = uploadPhoto(fileName);
  const results = await Promise.allSettled([userDetails, photoUpload]);
  return results.forEach((result) => [
    {
      status: result.status,
      value: result.value || result.reason,
    },
  ]);
}
