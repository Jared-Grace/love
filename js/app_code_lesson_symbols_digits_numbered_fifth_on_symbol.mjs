import { app_code_lesson_symbols_digits_numbered_on_symbol } from "./app_code_lesson_symbols_digits_numbered_on_symbol.mjs";
import { equal_not } from "./equal_not.mjs";
import { list_size } from "./list_size.mjs";
import { equal_0 } from "./equal_0.mjs";
import { mod } from "./mod.mjs";
export function app_code_lesson_symbols_digits_numbered_fifth_on_symbol(
  parent,
  index_1,
  symbols,
) {
  let r = mod(index_1, 5);
  let eq = equal_0(r);
  if (eq) {
    let size = list_size(symbols);
    let ne = equal_not(index_1, size);
    if (ne) {
      app_code_lesson_symbols_digits_numbered_on_symbol(parent, index_1);
    }
  }
}
