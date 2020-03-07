const connection = require("../config/connection");

// Get all burgers
const getBurgers = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM burgers", (err, burgerdata) => {
      if (err) {
        console.log(err);
        // THIS WILL GO TO PROMISE'S .catch()
        return reject(err);
      }

      // THIS WILL GO TO PROMISE'S .then()
      resolve(burgerdata);
    });
  });
};

// Create a burger
const createBurger = burgerObj => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO burgers SET ?", burgerObj, (err, burgerdata) => {
      if (err) {
        console.log(err);
        // THIS WILL GO TO PROMISE'S .catch()
        return reject(err);
      }
      // THIS WILL GO TO PROMISE'S .then()
      resolve(burgerdata);
    }
    );
  });
};

// Update a burger
// burgerObj => { devoured: true } OR {devoured: false}
const updateBurger = (burgerObj, burgerId) => {
  return new Promise((resolve, reject) => {
    connection.query("UPDATE burgers SET ? WHERE id = ?", [burgerObj, burgerId],
      (err, burgerdata) => {
        if (err) {
          console.log(err);
          return reject(err);
        } else if (burgerdata.affectedRows === 0) {
          return resolve({
            message: "Couldn't find a burger with that id!",
            code: 404
          });
        }

        resolve({ message: "Burger updated successfully!", code: 200 });
      }
    );
  });
};