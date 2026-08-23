import { arguments_assert } from "./arguments_assert.mjs";
import { html_a_hash_name_reload } from "./html_a_hash_name_reload.mjs";
import { app_shared_button_wide_link_dress } from "./app_shared_button_wide_link_dress.mjs";
export function app_shared_button_wide_link_hash_name(parent, hash, text) {
  arguments_assert(arguments, 3);
  ("a wide button that leads to another screen of THIS page, named by the word after the hash: the same face and the same shape as the wide button beside it, built on an anchor, so it carries an address the browser itself can act on.");
  ("its twin opens a NEW tab and is for somewhere else entirely. This one stays in the tab the reader is standing in, because the screen it leads to belongs to the same page and carries the way back.");
  ("what a button cannot do is the whole reason to build this on an anchor. A lambda is a thing only this page can run, so a browser will not offer to open it in a new tab, or to copy where it goes, or to keep it for later - and a screen worth handing to somebody is worth being able to hand.");
  let a = html_a_hash_name_reload(parent, hash, text);
  app_shared_button_wide_link_dress(a);
  return a;
}
