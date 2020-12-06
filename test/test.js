var assert = require("assert");
import fuzzyEquals from "../dist/fuzzyequals";

describe("fuzzyEquals", function () {
  it("treats equal numbers as equal", ()=>{
    assert.equal(fuzzyEquals(1, 1, .1), true);
  });
  it("treats close numbers as equal", ()=>{
    assert.equal(fuzzyEquals(1, 1.0000001, .1), true);
  });
  it("treats grossly unequal numbers as unequal", ()=>{
    assert.ok(!fuzzyEquals(1, 2.0000001, .1));
  });
});
