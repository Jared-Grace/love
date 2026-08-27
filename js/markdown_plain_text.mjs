import { arguments_assert } from "./arguments_assert.mjs";
import { text_replace_multiple_to } from "./text_replace_multiple_to.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { text_includes } from "./text_includes.mjs";
import { each } from "./each.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export function markdown_plain_text(text) {
  "Turns a letter written in markdown into the plain text an email carries, by taking off the two marks such a letter uses - the ** around a heading and the ` around a quoted fragment.";
  "Plain text rather than rendered HTML, because these letters quote markup as their evidence. A quote holding an entity like the one for a non-breaking space has to arrive as its own characters, and rich-text mail is the one medium that can turn it into a space - the reader would then be looking at something other than the page being reported.";
  arguments_assert(arguments, 1);
  let plain = text_replace_multiple_to(text, ["**", "`"], "");
  ("Refuses rather than half-converting. Exactly two constructs are handled, so a letter that later grows a link or a heading would otherwise be sent reading the mark itself - the failure a name this general invites.");
  let unhandled = [];
  function unhandled_add(mark) {
    let already = list_includes(unhandled, mark);
    if (not(already)) {
      list_add(unhandled, mark);
    }
  }
  function anywhere_look(mark) {
    let present = text_includes(plain, mark);
    if (present) {
      unhandled_add(mark);
    }
  }
  ("A link and a leftover star are marks wherever they fall, and they are looked for in the converted copy so that the pair of stars this function does remove is not reported as one it does not.");
  each(["](", "*"], anywhere_look);
  ("A heading, a quote block, a table row and a fence are marks only where a line begins. The letter quotes HTML as its evidence, so a hash and a greater-than sit in the middle of those lines constantly and mean nothing. These are looked for in the text as written, because a fence is made of the backticks the conversion has already taken out.");
  let lines = text_split_newline(text);
  function line_look(line) {
    function start_look(mark) {
      let present = text_starts_with(line, mark);
      if (present) {
        unhandled_add(mark);
      }
    }
    each(["#", ">", "|", "```"], start_look);
  }
  each(lines, line_look);
  list_empty_is_assert_json(unhandled, {
    hint: "markdown this function does not know how to take off is still in the text, so sending it would show the mark to the reader - handle the mark here, or write the letter without it",
    unhandled,
  });
  return plain;
}
