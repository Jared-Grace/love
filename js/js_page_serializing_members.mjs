import { text_frozen } from "./text_frozen.mjs";
export function js_page_serializing_members() {
  "The browser-driver methods that take a function and run it inside the page rather than here.";
  "These are the ones that write a function out as text and hand the text to a browser. Whatever a function passed to one of them was written against - the imports at the top of its file, the names this repo keeps - is not there when it runs, so a normalizing pass that rewrites its insides breaks it and no reading of this repo can see that it did.";
  "The names are frozen because each is an ordinary English word that a function here could be called. Left plain, the canonicalising pass would read one as a reference and this list would start tracking a rename that has nothing to do with the browser method it is named for.";
  let members = [
    text_frozen("evaluate"),
    text_frozen("evaluateHandle"),
    text_frozen("waitForFunction"),
    text_frozen("addInitScript"),
    text_frozen("exposeFunction"),
    text_frozen("$eval"),
    text_frozen("$$eval"),
  ];
  return members;
}
