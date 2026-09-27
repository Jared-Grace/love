import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text_content } from "./html_span_text_content.mjs";
import { app_code_lesson_reference_draw } from "./app_code_lesson_reference_draw.mjs";
import { list_first } from "./list_first.mjs";
import { list_skip } from "./list_skip.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_code_note_cycle_code } from "./app_code_note_cycle_code.mjs";
export function app_code_remember_from_lesson_names(
  parent,
  context,
  lesson_fn,
  parts,
  names,
) {
  arguments_assert(arguments, 5);
  ("a reminder of something an earlier lesson taught, opening with which lesson that was: Remember, from lesson N, and then the parts, which alternate plain writing and code the same way every other line on a lesson screen does, with a code piece that is one of the lesson's names written in that name's colour");
  ("THE REMINDER IS THE FIRST PLACE ON THE SCREEN A NAME IS SAID, AND WAS THE ONE PLACE IT HAD NO COLOUR. It stands above everything: above the cups, above the program. A reader met a plain c there, then a coloured c in the cups, then a coloured c in the code, and the first of the three - the one that was supposed to be carrying them in from the lesson before - was the one they had to join up by themselves.");
  ("Which lesson it was, and the button to it, are written by the same unit every other sentence that leans on an earlier lesson uses, so a reminder and a reference in the middle of an explanation cannot come to name one lesson two ways.");
  let div = html_div(parent);
  html_span_text_content(div, "Remember, from ");
  app_code_lesson_reference_draw(div, context, lesson_fn);
  let first = list_first(parts);
  let rest = list_skip(parts, 1);
  let opening = text_combine_multiple([", ", first]);
  ("The alternating part is written into the line this already started rather than into one of its own, which is why the writer used here is the one that fills something given to it. The sentence opens with words and a button before any of the parts arrive, so the writer that makes its own line could not have been used and the colour stopped here.");
  app_code_note_cycle_code(div, [opening, ...rest], names);
  return div;
}
