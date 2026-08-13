import { arguments_assert } from "./arguments_assert.mjs";
import { catch_null } from "./catch_null.mjs";
export function clipboard_copy_older(text) {
  "Copying the way browsers offered before there was a clipboard to ask for: a box holding the writing, put where nobody can see it, selected, and copied by the old command. Answers whether it worked.";
  "This is not a leftover kept for old browsers. A page reached over plain http is handed no clipboard at all, and plain http is how these pages are read on a phone - so on the machine most of the testing happens on, this is the only way there is.";
  "The box is taken away again whatever happens, so a failure leaves nothing of itself on the page.";
  arguments_assert(arguments, 1);
  let area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("style", "position:fixed;top:0;left:0;opacity:0");
  document.body.appendChild(area);
  area.select();
  function lambda() {
    let copied = document.execCommand("copy");
    return copied;
  }
  let done = catch_null(lambda);
  area.parentNode.removeChild(area);
  return done;
}
