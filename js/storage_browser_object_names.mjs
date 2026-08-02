import { arguments_assert } from "./arguments_assert.mjs";
export function storage_browser_object_names() {
  "The two things a browser hands a page to keep words in, by the names the browser itself gives them.";
  "These are the browser's own words rather than this repo's, so nothing here may rename them and there is nothing about them to freeze. They are spelled once all the same, because a reading that looks for them and a walk that narrows itself by them would otherwise have to agree by hand, and the day a third one appears it should appear in one place.";
  arguments_assert(arguments, 0);
  let names = ["localStorage", "sessionStorage"];
  return names;
}
