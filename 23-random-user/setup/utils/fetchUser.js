const URL = "https://randomuser.me/api/";

const getUser = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  const person = data.results[0];

  // destructuring
  const { phone, email } = person;
  const { large: image } = person.picture;
  const { password } = person.login;
  const { first, last } = person.name;
  const { age } = person.dob;
  const { number, name } = person.location.street;
  return {
    phone,
    email,
    image,
    password,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
    age,
  };
};

export default getUser;
