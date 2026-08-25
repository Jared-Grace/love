import { html_text_set } from "./html_text_set.mjs";
import { html_element } from "./html_element.mjs";
import { html_document_head } from "./html_document_head.mjs";
import { global_function_property_exists } from "./global_function_property_exists.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
export function html_style_head(style_text) {
  "Put a stylesheet in the page head, and put it there ONCE however many times it is asked";
  "for.";
  "Every caller of this asks for the same fixed sheet - a keyframe, a spinner, a button";
  "shape - and asks from wherever it happens to be drawing, which is usually inside a loop";
  "over a list. Written straight through, a page ended up with one identical copy of the";
  "same rules per drawn thing: a hundred people meant a hundred style tags saying the same";
  "sentence. None of them was wrong, so nothing ever went red and nothing looked amiss -";
  "the only sign was the head of the document growing without limit.";
  "Asked once, it stops being something a caller has to think about. A drawer can say what";
  "it needs where it needs it, rather than hoisting the call somewhere outside its own loop";
  "and spelling the sheet's name a second time to do it.";
  "What is remembered is the TEXT, so two different sheets are both installed and the same";
  "sheet is not. The head is never emptied while a page is alive, which is what lets a note";
  "of what was installed stand in for looking.";
  let installed = global_function_property_exists(html_style_head, style_text);
  if (installed) {
    return;
  }
  global_function_property_set(html_style_head, style_text, true);
  let parent = html_document_head();
  let component = html_element(parent, "style");
  html_text_set(component, style_text);
}
