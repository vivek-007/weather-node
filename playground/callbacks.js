var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Vivek Kumar'
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(022945, (userObject) => {
  console.log(userObject);
});
