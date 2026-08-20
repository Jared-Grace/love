import { app_code_lessons_fns_shown } from "./app_code_lessons_fns_shown.mjs";
import { invoke_multiple_fn } from "./invoke_multiple_fn.mjs";
export function app_code_lessons() {
  "Every lesson the code app hands to whoever is reading it, in the order they are learned - each entry is one lesson function invoked to hand back what it holds, so adding a lesson is adding a name to the list next door rather than editing anything here.";
  "Which lessons those are is a question about the page being read rather than about the repo, and it is asked next door: a working copy shows all of them, and the built site shows the run that has been read through. Everything here that walks from one lesson to the next - what is first, what is next, which is last - then walks the run this reader was given, so a reader of the built site is told they are done at the end of it rather than walking off the end of what was written for them.";
  let lessons = invoke_multiple_fn(app_code_lessons_fns_shown);
  return lessons;
}
