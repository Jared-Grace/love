import { list_adder } from "./list_adder.mjs";
export function invoke_until(next_get, end_is) {
  function lambda(la) {
    while (true) {
      let token = next_get();
      la(token);
      if (end_is(token)) {
        break;
      }
    }
  }
  let list = list_adder(lambda);
  return list;
}
