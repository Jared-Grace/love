import { arguments_assert } from "./arguments_assert.mjs";
import { html_hash_get } from "./html_hash_get.mjs";
import { text_skip } from "./text_skip.mjs";
export function html_hash_name_get() {
  arguments_assert(arguments, 0);
  ("The word written after the hash mark in the address bar, without the mark.");
  ("What the page is being asked for - a screen name, a sandbox name, a title.");
  ("The address holds the mark and the word together, and no reader of the word");
  ("ever wants the mark on the front of it, so the two lines that take it off");
  ("were being written wherever the address is read.");
  let hash = html_hash_get();
  let name = text_skip(hash, 1);
  return name;
}
