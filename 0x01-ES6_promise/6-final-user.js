// import signUpUser from './4-user-promise';
// import uploadPhoto from './5-photo-reject';

// // #1 Using promises
// // export default function handleProfileSignUp(firstName, lastName, fileName) {
// //   const userDetails = signUpUser(firstName, lastName);
// //   const photoUpload = uploadPhoto(fileName);
// //   return Promise.allSettled([userDetails, photoUpload])
// //     .then((results) => results);
// // }

// // #2 Using async/await
// export default async function handleProfileSignUp(firstName, lastName, fileName) {
//   const userDetails = signUpUser(firstName, lastName);
//   const photoUpload = uploadPhoto(fileName);
//   const results = await Promise.allSettled([userDetails, photoUpload]);
//   return results.forEach((result) => [
//     {
//       status: result.status,
//       value: result.value || result.reason,
//     },
//   ]);
// }

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // Call the two functions that return promises
  const userDetails = signUpUser(firstName, lastName);
  const photoUpload = uploadPhoto(fileName);

  // Use Promise.allSettled to wait for both promises to settle
  return Promise.allSettled([userDetails, photoUpload])
    .then((results) => results.map((result) => {
      if (result.status === 'fulfilled') {
        return { status: result.status, value: result.value };
      }
      return { status: result.status, value: result.reason };
    }));
}
