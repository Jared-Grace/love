import { list_adder } from "../../../love/public/src/list_adder.mjs";
export function invoke_until(next_get, end_is) {
  function lambda(la) {
    while (true) {
      const token = next_get();
      la(token);
      if (end_is(token)) {
        break;
      }
    }
  }
  const tokens = list_adder(lambda);
  return tokens;
}
