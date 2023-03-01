function User() {
  this.add = function () {
    let nameVal = document.querySelector("#name").value;
    let emailVal = document.querySelector("#email").value;
    let phoneVal = document.querySelector("#phone").value;
    let addressVal = document.querySelector("#address").value;
    let userData = {
      id: Math.floor(Math.random() * 9999),
      name: nameVal,
      email: emailVal,
      phone: phoneVal,
      address: addressVal,
    };
    $.ajax({
      type: "POST",
      url: "http://localhost:8000/add",
      headers: { authorization: "Bearer 1234" },
      data: userData,
      dataType: "json",
      success: function (result, status, xhr) {
        alert(result.message);
        console.log(result);
        document.querySelector("#name").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#phone").value = "";
        document.querySelector("#address").value = "";
      },
      error: function (xhr, status, error) {
        alert(JSON.parse(xhr.responseText).message);
        console.log(
          "Result: " +
            status +
            " " +
            error +
            " " +
            xhr.status +
            " " +
            xhr.statusText
        );
      },
    });
  };

  this.edit = function (user) {
    let userId = document.querySelector("#userId");
    let nameId = document.querySelector("#name");
    let emailId = document.querySelector("#email");
    let phoneId = document.querySelector("#phone");
    let addressId = document.querySelector("#address");
    document.querySelector("#edit-form").setAttribute("style", "display:block");
    userId.value = user.id;
    nameId.value = user.name;
    emailId.value = user.email;
    phoneId.value = user.phone;
    addressId.value = user.address;
  };
  this.update = function () {
    let id = document.querySelector("#userId").value;
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let phone = document.querySelector("#phone").value;
    let address = document.querySelector("#address").value;
    let editObj = {
      id,
      name,
      email,
      phone,
      address,
    };
    $.ajax({
      type: "PUT",
      url: `http://localhost:8000/edit`,
      headers: { authorization: "Bearer 1234" },
      dataType: "json",
      data: editObj,
      success: function (result, status, xhr) {
        alert(result.message);
        document.querySelector("#edit-form").style.display = "none";
        window.location.reload();
      },
      error: function (xhr, status, error) {
        console.log(
          "Result: " +
            status +
            " " +
            error +
            " " +
            xhr.status +
            " " +
            xhr.statusText
        );
      },
    });
  };

  this.delete = function (id) {
    $.ajax({
      type: "DELETE",
      url: `http://localhost:8000/delete/${id}`,
      headers: { authorization: "Bearer 1234" },
      dataType: "json",
      success: function (result, status, xhr) {
        alert(result.message);
        window.location.reload();
      },
      error: function (xhr, status, error) {
        console.log(
          "Result: " +
            status +
            " " +
            error +
            " " +
            xhr.status +
            " " +
            xhr.statusText
        );
      },
    });
  };
}

const USER = new User();
