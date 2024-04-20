async function main() {
  let response = await fetch(`https://reqres.in/api/users/1`);
  let data = await response.json();
  response.then((item) => {
    console.log(item);
  });
  // console.log(data);

  //   let obj = JSON.parse(data);
  //   console.log(obj);
  //   let { email, first_name, last_name, avatar } = data;
  //   console.log(email, first_name, last_name, avatar);
  return data;
}
main();
