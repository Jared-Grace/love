import { not } from "./not.mjs";
import { html_on_click } from "./html_on_click.mjs";
export function html_on_click_when(component, lambda) {
  "Listens for a press only when something was handed in to do about it, so a caller holding an action that may not exist does not have to ask before attaching it.";
  "★ NOTHING IS ATTACHED, RATHER THAN A DO-NOTHING BEING ATTACHED, BECAUSE THE POINTER IS A PROMISE. Listening always and doing nothing would still turn the cursor into a hand and still swallow the press, which tells a reader this thing is alive and then ignores them - and a thing that answers by doing nothing reads as broken, where a thing that never offered reads as absent. Not listening leaves it looking like the plain text it is.";
  let missing = not(lambda);
  if (missing) {
    return;
  }
  html_on_click(component, lambda);
}
