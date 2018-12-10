import { BN } from "bn.js";
import * as test from "tape";

test("Simple tests for type definitions", assert => {
  assert.plan(1);
  var a = new BN("dead", 16);
  var b = new BN("101010", 2);

  var res = a.add(b);
  assert.equal(res.toString(), "57047");
});
