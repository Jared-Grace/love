import { html_body_div } from "./html_body_div.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_input_placeholder_wide } from "./html_input_placeholder_wide.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_on_input } from "./html_on_input.mjs";
import { text_combine } from "./text_combine.mjs";
import { equal } from "./equal.mjs";
export function typing_box_preview() {
  "One writing box and an echo of it underneath, on the sandbox app at hash typing_box, for finding out whether a phone can type into a page of ours at all.";
  "★ THIS IS HALF OF A PAIR AND IS WORTH NOTHING ALONE. The other half is public/dev/typing.html, which holds the same box with none of our code on the page - no shell, no boot, no styling of ours, its handful of lines written by hand and kept that way on purpose. Read one reading without the other and it says nothing: a box that works proves only that boxes can work, and a box that fails does not say whose fault it is.";
  "Read as a pair they divide the fault in one move. Letters land in neither, and the fault is the phone or the browser and no amount of reading our code will find it. Letters land in the bare page and not in this one, and the fault is ours and is in the part this page has and that one does not - the shell, the boot, the viewport.";
  "That second case is not hypothetical. A shell measured in the height of the window reflows the moment the keyboard opens, which is the moment somebody is typing, and what they type reaches nothing. This page carries that shell and the bare one does not, which is the whole reason the pair is drawn this way round.";
  "So the bare page must never be folded into this one, however tidy that would be. Folding it in deletes the only reading in the pair that our own code cannot be blamed for, and leaves two readings that are really one.";
  let root = html_body_div();
  let asked =
    "Tap the box and type. Whatever you type should appear twice: once in the box, once under it.";
  html_p_text(root, asked);
  let input = html_input_placeholder_wide(root, "type here");
  let nothing = "nothing";
  let held = "The box now holds: ";
  let text = text_combine(held, nothing);
  let echo = html_p_text(root, text);
  function on_typed() {
    let value = html_value_get(input);
    let empty = equal(value, "");
    let shown = empty ? nothing : value;
    let line = text_combine(held, shown);
    html_text_content_set(echo, line);
  }
  html_on_input(input, on_typed);
}
