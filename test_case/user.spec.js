var chai = require("chai");
var assert = chai.assert;
var expect = chai.expect;

describe("Assert check", function () {
  let name = "Vivek";
  let list = {
    products: [
      { id: 1, name: "Phone" },
      { id: 2, name: "Laptop" },
    ],
  };
  it("value is string", function () {
    assert.typeOf(name, "string");
  });
  it("value is equal", function () {
    assert.equal(name, "Vivek");
  });
  it("length match", function () {
    assert.lengthOf(list.products, 2);
  });
});

describe("Expect check", function () {
  let isActive = true;
  let data = {
    user: [{ id: 1, name: "Vipin" }],
    address: {
      country: "India",
    },
  };
  it("value is boolen", function () {
    expect(isActive).to.be.a("boolean");
  });
  it("value is check", function () {
    expect(isActive).to.be.true;
  });

  it("object has property", function () {
    expect(data).to.have.property("user");
  });
  it("object check length", function () {
    expect(data).to.have.property("user").lengthOf(1);
  });
  it("object check keys name", function () {
    expect(data).to.have.all.keys("user", "address");
    expect(data).to.have.nested.property("address.country");
  });
  it("array check keys name", function () {
    expect(data.user.map((item) => item.name)).to.include("Vipin");
  });
  it("check country name", function () {
    expect(data).to.have.nested.include({ "address.country": "India" });
  });
});
