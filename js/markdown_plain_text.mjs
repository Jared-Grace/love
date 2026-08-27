import { arguments_assert } from "./arguments_assert.mjs";
import { text_replace_multiple_to } from "./text_replace_multiple_to.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export function markdown_plain_text(text) {
  "Turns a letter written in markdown into the plain text an email carries, by removing the two marks such a letter uses - the ** around a heading and the ` around a quoted fragment.";
  "Plain text rather than rendered HTML, because these letters quote markup as their evidence. A quote holding `&#160;` has to arrive as those six characters, and rich-text mail is the one medium that can turn it into a space - the reader would then be looking at something other than the page being reported.";
  arguments_assert(arguments, 1);
  let plain = text_replace_multiple_to(text, ["**", "`"], "");
  ("Refuses rather than half-converting. Exactly two constructs are handled, so a letter that later grows a link or a heading would otherwise be sent reading [label](url) - the failure a name this general invites. The check runs on the converted text, so a leftover mark is one this function does not know about rather than one it was about to remove.");
  let unhandled = [];
  function mark_look(mark) {
    let present = text_includes(plain, mark);
    if (present) {
      list_add(unhandled, mark);
    }
  }
  each(["](", "*", "#", ">"], mark_look);
  list_empty_is_assert_json(unhandled, {
    hint: "markdown this function does not know how to remove is still in the text, so sending it would show the mark to the reader - handle the mark here, or write the letter without it",
    unhandled,
  });
  return plain;
}
