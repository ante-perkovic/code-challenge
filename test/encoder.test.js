const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);
const expect = chai.expect;

describe("encode endpoint", function () {
  it("should redirect to login for unauthorized POST requests", function (done) {
    chai
      .request("localhost:3000")
      .post("/encode")
      .set("Authorization", "wrong-token")
      .send({ text: "XXXYYYYZZQXX" })
      .redirects(0)
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(302);
        done();
      });
  });
  it("should redirect to login for unauthorized GET requests", function (done) {
    chai
      .request("localhost:3000")
      .get("/encode")
      .set("Authorization", "wrong-token")
      .redirects(0)
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(302);
        done();
      });
  });
  it("should return 200 status and the encoded page", function (done) {
    chai
      .request("localhost:3000")
      .get("/encode")
      .set("Authorization", "xyz0987654321")
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
  });
  it("should return 200 status and encoded text", function (done) {
    chai
      .request("localhost:3000")
      .post("/encode")
      .set("Authorization", "xyz0987654321")
      .send({ text: "XXXYYYYZZQXX" })
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body.text).to.be.a("string");
        expect(res.body.text).to.equal("X3Y4Z2Q1X2");
        done();
      });
  });
});
