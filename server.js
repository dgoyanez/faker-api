const express = require("express");
const {faker}=require("@faker-js/faker");
const app = express();
const port=8000;

class User{
    constructor(){
      this.userId=faker.datatype.uuid(), 
      this.username=faker.internet.userName(),
      this.email=faker.internet.email(),
      this.avatar=faker.image.avatar(),
      this.password= faker.internet.password(),
      this.birthday=faker.date.birthdate(),
      this.registeredAt=faker.date.past()
    }
  }

  app.post("/api/users/new", (req, res) => {
    const newUser=new User()
    console.log(`new User created: ${newUser}`)
    res.json({msg:"success", user:newUser});
  });

  app.listen(port, () =>
  console.log(`Server is locked and loaded on port ${port}!`)
);