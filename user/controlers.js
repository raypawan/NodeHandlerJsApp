const { LocalStorage } = require("node-localstorage");
const isUniqueVal = require("../utils/isUniqueVal");
localStorage = new LocalStorage("./scratch");

let getUsers = JSON.parse(localStorage.getItem("users"));

const fetchUsers = (req, res) => {
  console.log(getUsers, "fetch inside");
  res.render("index", {
    users: getUsers?.length > 0 ? getUsers : [],
  });
};

const renderAddUser = (req, res) => {
  res.render("add-user");
};

const renderEdit = (req, res) => {
  res.render("edit-user");
};
const renderAbout = (req, res) => {
  res.render("about", {
    about: {
      title: "About us",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  });
};

const addUser = (req, res) => {
  let usersArr = [];
  if (req.body) {
    if (usersArr.length === 1) {
      usersArr.push(req.body);
      try {
        localStorage.setItem("users", JSON.stringify(usersArr));
      } catch (err) {
        console.log(err);
      }
    } else {
      if (isUniqueVal("email", req.body.email, getUsers)) {
        getUsers.push(req.body);
        try {
          localStorage.setItem("users", JSON.stringify(getUsers));
        } catch (err) {
          console.log(err);
        }
      } else {
        return res.status(422).json({ message: "email is already exist" });
      }
    }
    res.status(201).json({ message: "user added" });
  }
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  if (id) {
    let filterUser = getUsers.filter((user) => user.id != id);
    console.log(filterUser, "delted filter");
    try {
      localStorage.setItem("users", JSON.stringify(filterUser));
      res.status(201).json({ message: "user deleted" });
    } catch (err) {
      console.log(err);
    }
  }
};

const editUser = (req, res) => {
  if (req.body) {
    let filterUser = getUsers.filter((user) => user.id != req.body.id);
    filterUser.unshift(req.body);
    try {
      localStorage.setItem("users", JSON.stringify(filterUser));
      res.status(201).json({ message: "user updated" });
    } catch (err) {
      console.log(err);
    }
  }
};

module.exports = {
  fetchUsers,
  renderAddUser,
  renderAbout,
  renderEdit,
  addUser,
  deleteUser,
  editUser,
};
