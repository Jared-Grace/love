import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
export function app_learn_js_second_numbers(kind) {
  "three different numbers from 1 to 9 as big, second and n, with big above second: n is above big when kind is above, between the two when kind is between, and below second when kind is below";
  let pool = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let picked = list_shuffle_take(pool, 3);
  function lambda(x, y) {
    let difference = subtract(y, x);
    return difference;
  }
  let s = picked.sort(lambda);
  if (equal(kind, "above")) {
    let r = {
      big: s[1],
      second: s[2],
      n: s[0],
    };
    return r;
  }
  if (equal(kind, "between")) {
    let r2 = {
      big: s[0],
      second: s[2],
      n: s[1],
    };
    return r2;
  }
  let r3 = {
    big: s[0],
    second: s[1],
    n: s[2],
  };
  return r3;
}
