import { html_document_body } from "./html_document_body.mjs";
export function app_shared_dev_overlay_context() {
  "The dev benches' own context, so the panel every dev screen draws itself into can offer a text size the way an app does.";
  "IT FILES UNDER ITS OWN NAME RATHER THAN THE APP'S, and that is a choice rather than a shortcut. A dev route replaces the app it lives in - the game is gone while the bench is up - so the size wanted here is the size for READING A REVIEW SHEET, which has nothing to do with the size the game is comfortable played at. Filing under the app would mean a reviewer who sizes the arcs sheet to read it has resized the game.";
  "The other half of the same choice is that all the benches share ONE size between them, because they are one tool. Somebody reviewing arcs moves to the word pictures on the same errand with the same eyes, and a size that had to be set again on each screen would be set once and then endured.";
  "The context an app boots with cannot be borrowed here: a dev route is registered as a function of no arguments, so no context reaches it, and threading one through would change the shape of every route in the repo to serve a panel.";
  let root = html_document_body();
  let context = {
    root,
    app_fn: app_shared_dev_overlay_context,
  };
  return context;
}
