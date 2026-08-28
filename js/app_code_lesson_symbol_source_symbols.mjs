import { arguments_assert } from "./arguments_assert.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { repo_love_function_import } from "./repo_love_function_import.mjs";
import { function_args_count_assert } from "./function_args_count_assert.mjs";
import { list_is } from "./list_is.mjs";
import { ternary } from "./ternary.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { app_code_lesson_text_operator_symbols } from "./app_code_lesson_text_operator_symbols.mjs";
import { text_is } from "./text_is.mjs";
import { js_operator_symbol } from "./js_operator_symbol.mjs";
export async function app_code_lesson_symbol_source_symbols(name) {
  arguments_assert(arguments, 1);
  ("the symbols one of those functions stands for, got by RUNNING it. Reading its source instead does not answer: an operator here is often held as an object built two files away, and only the file at the bottom of that chain ever spells the symbol itself. Running it was measured against reading it - reading named four operators for a lesson that shows five, and following the names in the source instead over-reached the other way and named ten for a lesson that shows three.");
  ("A function that wants an argument, or a browser, hands back nothing rather than throwing. The name shape that got it here is a guess about what a function is for, and a guess that turns out wrong should cost the reading nothing.");
  ("Taken from this repo by its path rather than looked up by name across every repo standing beside it, because a gate asks this from inside a frozen copy where there are no repos standing beside it.");
  let symbols = await catch_null_async(read);
  let none = null_is(symbols);
  if (none) {
    let empty = [];
    return empty;
  }
  return symbols;
  async function read() {
    let no_args = [];
    let fn = await repo_love_function_import(name);
    function_args_count_assert(fn, no_args);
    let value = await fn();
    let many = list_is(value);
    let items = ternary(many, value, [value]);
    let words = list_map(items, word_of);
    let joined = list_join_space(words);
    let found = app_code_lesson_text_operator_symbols(joined);
    return found;
  }
  function word_of(item) {
    "an operator is written either as its own symbol or as the operator it belongs to";
    let plain = text_is(item);
    if (plain) {
      return item;
    }
    let symbol = js_operator_symbol(item);
    return symbol;
  }
}
