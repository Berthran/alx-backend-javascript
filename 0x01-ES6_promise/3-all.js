import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignUp() {
  const photo = uploadPhoto();
  const user = createUser();

  // Resolve all promises with the .all() method
  return Promise.all([photo, user]).then((values) => {
    console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`);
  })
    .catch(() => console.log('Signup system offline'));
}
