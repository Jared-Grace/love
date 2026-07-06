import { app_code_lesson_symbols_digits_numbered_on_symbol } from "../../../love/public/src/app_code_lesson_symbols_digits_numbered_on_symbol.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { equal_0 } from "../../../love/public/src/equal_0.mjs";
import { mod } from "../../../love/public/src/mod.mjs";
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
