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
  "It answers ONE of the two questions a typing fault raises, and knowing which one is the whole of how to read it. Letters landing here say a phone can type into our shell, our boot and our styling. Letters failing here say only that something is wrong; they do not say whether it is ours or the phone's.";
  "That second half used to be answerable in one move. public/dev/typing.html held the same box with none of our running code around it, so the two read together divided the fault: failing in both meant the phone, failing only here meant something this page has and that one had not - the shell, the boot, the viewport. That case is not hypothetical. A shell measured in the height of the window reflows the moment the keyboard opens, which is the moment somebody is typing, and what they type reaches nothing.";
  "The page was deleted on 2026-08-25, deliberately and for a reason that has nothing to do with its worth: a page at an address of its own must be an app, and a page proving our code is not running cannot be one, because an app is code. The two rules cannot both hold, and the rule won. What was given up is written down here rather than lost, so that a phone-typing fault that cannot be pinned on anybody is recognised as the cost of that decision instead of as a mystery.";
  "If the question comes back, the cheap way to ask it again is a bare page served from outside this repo for the length of one afternoon - not a second hash here. A hash is read by code inside the bundle, so the bundle has already loaded by the time anything can act on the word after it: measured 2026-08-25, sixty-four KiB, before any preview is chosen. The registry below splits the SECOND question, which preview to fetch; nothing here can split the first, whether to start the app at all.";
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
