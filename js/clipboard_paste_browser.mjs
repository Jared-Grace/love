import { arguments_assert } from "./arguments_assert.mjs";
import { error } from "./error.mjs";
import { not } from "./not.mjs";
export async function clipboard_paste_browser() {
  "Read back what is on the clipboard from inside a page, asking first whether this browser will hand it over at all.";
  "A browser gives a page the clipboard only over https, or on localhost. These pages are read on a phone over plain http, where it is not there at all, and reaching straight for it there throws a message about a missing property that says nothing about what happened or what to do instead.";
  "There is no older way here, which is where this parts company with copying. Putting writing on the clipboard has a way back to the days before there was one to ask for; reading it has none, because a page that could read the clipboard unasked could read whatever the person last copied anywhere. So this asks, and where the answer is no it says so in words rather than letting the page die on a property that is not there.";
  arguments_assert(arguments, 0);
  let reader = navigator.clipboard && navigator.clipboard.readText;
  let missing = not(reader);
  if (missing) {
    error(
      "This browser only lets a page read the clipboard when the page came over https, so the writing will have to be pasted in by hand this time.",
    );
  }
  let paste = await navigator.clipboard.readText();
  return paste;
}
