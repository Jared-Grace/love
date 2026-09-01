import { js_selects_function_lift } from "../../../js/js_selects_function_lift.mjs";
import { js_function_nested_find_named } from "../../../js/js_function_nested_find_named.mjs";
import { js_globals_shadowed_names } from "../../../js/js_globals_shadowed_names.mjs";
export const example = {
  fn: js_selects_function_lift.name,
  select: js_function_nested_find_named.name,
  select_args: ["log_add"],
  args: ["moves_log_add"],
  kind: "transform",
  title: "Hand over a local that wears the name of something the page supplies",
  note: [
    "A lift hands the moved function whatever it reached out for, less ",
    "everything it can still reach from where it lands. The second half of that ",
    "used to include every word the language and the page answer to, on the ",
    "reasoning that a name like ",
    { code: "console" },
    " is bound everywhere already.",
    " ",
    "It is not bound everywhere when the enclosing function binds a name of its ",
    "own to it. Here ",
    { code: "history" },
    " is the list of moves a player has made, and the page also answers to that ",
    "word with the list of pages it has visited. Left out of the parameters, the ",
    "moved lines go on appending — to the wrong list, in a file that parses, ",
    "imports, and passes every gate, because the word is bound and nothing is ",
    "missing.",
    " ",
    { fn: js_globals_shadowed_names.name },
    " is what the two lifting readings now ask first, and what it names is put ",
    "back among the parameters. Handing the word over is right whichever binding ",
    "it turns out to mean: the call left where the function used to stand reads ",
    "it there, so it passes on exactly what the function itself would have found.",
    " ",
    "Measured 2026-09-01 on the replacing game, from a lift run the same day. ",
    "A survey that afternoon found eighty-five functions in this repo binding ",
    "one of these words - ",
    { code: "prompt" },
    " for an instruction to a model, ",
    { code: "screen" },
    " for what an app is showing, ",
    { code: "document" },
    " for the text of a lyric video - so the shape is ordinary rather than rare.",
  ],
  before: `export function f(moves) {
  let history = list_new();
  function log_add(move) {
    list_add(history, move);
  }
  let first = list_first(moves);
  log_add(first);
  return history;
}`,
  after: `export function f(moves) {
  let history = list_new();
  let first = list_first(moves);
  moves_log_add(first, history);
  return history;
}
function moves_log_add(move, history) {
  arguments_assert(arguments, 2);
  list_add(history, move);
}`,
};
