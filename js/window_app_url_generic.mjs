import { arguments_assert } from "./arguments_assert.mjs";
import { file_name_page_link } from "./file_name_page_link.mjs";
import { hash_to_url } from "./hash_to_url.mjs";
import { app_shared_page_stage_root } from "./app_shared_page_stage_root.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function window_app_url_generic(fn, app_fn_name, hash) {
  arguments_assert(arguments, 3);
  ("Where one of these apps lives, written as an address: its page, and the link words it should open with.");
  ("Working out the address is kept apart from going to it, because there are two ways to go - beside what is open now, or instead of it - and only that last step differs between them. While the two were one function, a page that wanted the other way had to write the address out for itself.");
  let without = fn(app_fn_name);
  let file_name = file_name_page_link(without);
  let h = hash_to_url(hash);
  let root = app_shared_page_stage_root();
  let url = text_combine_multiple([root, file_name, h]);
  return url;
}
