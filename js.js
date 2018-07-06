



// function  ({ user }) {
//   const {
//     name,
//     age,
//     asdasd,
//     asd,
//   } = user;

//   console.log(name);
//   console.log(age);
//    console.log(age);
//     console.log(age);
    
// }


var user = {
  name:'vasya',
  getLastName: function() {
    console.log(this.name);
  }
}

var user = function (name) {
  this.name = name;
  console.log(this);
}

var result = new user('vasya');
