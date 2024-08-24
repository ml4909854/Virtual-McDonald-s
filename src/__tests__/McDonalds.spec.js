const { orderFood } = require("../McDonalds");
const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(
  path.resolve(__dirname, "../../index.html"),
  "utf8"
);
global.score = 1;
// jest.setTimeout(10000);

jest.dontMock("fs");

describe("Virtual Restaurant", function () {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });
  afterEach(() => {
    // restore the original func after test
    jest.resetModules();
  });

  it("input elements exist in html form", function () {
    var menu = document.querySelectorAll(".food");
    expect(menu[0].type).toBe("checkbox");
    expect(menu[0].value).toBe("burger");

    expect(menu[1].type).toBe("checkbox");
    expect(menu[1].value).toBe("mcPuff");

    expect(menu[2].type).toBe("checkbox");
    expect(menu[2].value).toBe("wrap");

    expect(menu[3].type).toBe("checkbox");
    expect(menu[3].value).toBe("cold_drink");

    expect(menu[4].type).toBe("checkbox");
    expect(menu[4].value).toBe("coffee");

    global.score += 2;
  });

  it("ordering food items, and appending to DOM is working correctly", async function (done) {
    orderFood(["burger", "cold_drink"]);
    var order = document.querySelectorAll("#food-item");
    expect(order.length).toBe(0);

    setTimeout(() => {
      expect(document.getElementById("food-item")).toBeTruthy();
      var order = document.querySelectorAll("#food-item");
      expect(order.length).toBe(2);
      expect(order[0].textContent).toBe("burger");
      done();
      global.score += 3;
    }, 1000);
  });

  it("ordering new food clears up previous order from DOM", async function (done) {
    orderFood(["wrap", "coffee"]);
    orderFood(["coffee", "cold_drink"]);
    var order = document.querySelectorAll("#food-item");
    expect(order.length).toBe(0);

    setTimeout(() => {
      expect(document.getElementById("food-item")).toBeTruthy();
      var order = document.querySelectorAll("#food-item");
      expect(order.length).toBe(2);
      expect(order[0].textContent).toBe("coffee");
      done();
      global.score += 2;
    }, 1000);
  });

  it("order Id is present is all orders", async function (done) {
    expect(
      document.getElementById("order-id").textContent.toString().length >= 1
    ).toBe(false);
    orderFood(["wrap", "coffee"]);

    setTimeout(() => {
      expect(document.getElementById("order-id")).toBeTruthy();
      expect(
        document.getElementById("order-id").textContent.toString().length >= 1
      ).toBe(true);
      done();
      global.score += 1;
    }, 1000);
  });
  it("order Id is present is all orders", async function (done) {
    expect(
      document.getElementById("order-id").textContent.toString().length >= 1
    ).toBe(false);

    orderFood(["coffee", "cold_drink"]);

    setTimeout(() => {
      expect(document.getElementById("order-id")).toBeTruthy();
      expect(
        document.getElementById("order-id").textContent.toString().length >= 1
      ).toBe(true);
      done();
      global.score += 1;
    }, 1000);
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
