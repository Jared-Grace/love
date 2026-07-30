import { fn_name } from "./fn_name.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { equal } from "./equal.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { text_combine } from "./text_combine.mjs";
import { js_code_string } from "./js_code_string.mjs";
import { property_get } from "./property_get.mjs";
export function js_code_fn_names_pieces(segments, fn_names) {
  let pieces = [];
  let buffer = "";
  function buffer_flush() {
    let empty = equal(buffer, "");
    if (not(empty)) {
      let code = js_code_string(buffer);
      list_add(pieces, code);
      buffer = "";
    }
  }
  function lambda(segment) {
    let identifier = property_get(segment, "identifier");
    let text = property_get(segment, "text");
    let match = identifier && list_includes(fn_names, text);
    if (match) {
      buffer_flush();
      ("The word is written as a spelled name rather than reached for through a dot.");
      ("Both give back the same word, and a rename follows both, so nothing is lost -");
      ("but reaching for the function to ask what it is called needs the function");
      ("imported, and an import is a road: everything that function reaches becomes");
      ("reachable from here, on account of a line of prose. That put a whole download");
      ("chain inside a game screen's reach, and where two functions name each other in");
      ("prose it built an import cycle whose back-reference read undefined at call");
      ("time, so a screen simply never drew and said nothing about why.");
      ("Spelling it needs no import at all, and the word is still checked - the gate");
      ("over spelled names refuses one that no function answers to, which is the same");
      ("protection the import used to give and the whole reason the dot was reached for");
      ("in the first place.");
      let quoted = js_code_string(text);
      let args = [quoted];
      let f_name = fn_name("fn_name");
      let code = js_code_call_args(f_name, args);
      list_add(pieces, code);
    } else {
      buffer = text_combine(buffer, text);
    }
  }
  each(segments, lambda);
  buffer_flush();
  return pieces;
}
