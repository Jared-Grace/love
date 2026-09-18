import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_note_name_color_or_null } from "./app_code_note_name_color_or_null.mjs";
import { js_visit_identifiers_nodes } from "./js_visit_identifiers_nodes.mjs";
export function app_code_note_name_spans(code, names) {
  arguments_assert(arguments, 2);
  ("where in a program's code each marked name stands, and the colour it is lent there, so the name in a note and the same name in the code can be drawn alike");
  ('THE CODE IS PARSED, NEVER SEARCHED. The names this course hands out are single letters, and a single letter is inside half the words a program holds - the letter a is in the word grapes, and let a = "grapes"; would light up twice if the text were searched. Only the parser knows which of those letters is a name.');
  ("Every use is returned, not the first, because the whole point is that the reader sees the same colour in two places at once - where the name is filled and where it is read again.");
  ("A name the notes did not mark is passed over silently. A program says console and log as well, and those are not cups the lesson is teaching about.");
  let ast = js_parse(code);
  let spans = [];
  function lambda_identifier(node) {
    let name = property_get(node, "name");
    let color = app_code_note_name_color_or_null(names, name);
    if (color) {
      let start = property_get(node, "start");
      let end = property_get(node, "end");
      spans.push([start, end, color]);
    }
  }
  js_visit_identifiers_nodes(ast, lambda_identifier);
  return spans;
}
