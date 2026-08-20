import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { app_shared_text_reader_language_around } from "./app_shared_text_reader_language_around.mjs";
export function app_shared_text_reader_language_pickers() {
  "Every way a saying gets from the languages it is written in to the one the reader is shown, so the count of who says their piece in every language can see all of them.";
  "There is more than one because a saying with something dropped into the middle of it cannot be one piece of writing per language. Both take the same first thing - the languages written side by side - and that is the thing being counted, so both are asked about here rather than only the plainer one.";
  "A way missing from this list is not a gate that goes red. It is a page of buttons the gate walks straight past, so it goes green while saying nothing about them, which is the one failure a count cannot report on itself.";
  let plain = app_shared_text_reader_language.name;
  let around = app_shared_text_reader_language_around.name;
  let pickers = [plain, around];
  return pickers;
}
