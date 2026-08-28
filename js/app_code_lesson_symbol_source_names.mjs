import { arguments_assert } from "./arguments_assert.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { or } from "./or.mjs";
import { list_add } from "./list_add.mjs";
export function app_code_lesson_symbol_source_names(names) {
  arguments_assert(arguments, 1);
  ("the functions that stand for an operator symbol, or for a list of them. A lesson that asks one of these instead of spelling its symbols is showing the very same thing on the screen, so whatever reads what a lesson shows has to follow them.");
  ("Found by the shape of the name rather than from a list written out here, because a list would go stale the day somebody adds the seventeenth operator and would go stale silently - the reading would simply stop seeing that operator, and a symbol nobody sees is a symbol nobody can miss.");
  let found = [];
  for (let name of names) {
    let operator_named = text_starts_with(name, "js_operator");
    let class_named = text_starts_with(name, "app_code_operators");
    let symbols_named = text_ends_with(name, "_symbols");
    let symbol_named = text_ends_with(name, "_symbol");
    let starts = or(operator_named, class_named);
    let ends = or(symbols_named, symbol_named);
    let any = or(starts, ends);
    if (any) {
      list_add(found, name);
    }
  }
  return found;
}
