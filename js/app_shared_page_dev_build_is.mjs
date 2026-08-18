import { app_shared_name_dev_text } from "./app_shared_name_dev_text.mjs";
import { text_split_slash_forward } from "./text_split_slash_forward.mjs";
import { list_includes } from "./list_includes.mjs";
export function app_shared_page_dev_build_is() {
  "Whether the page being read right now is a dev build of itself rather than the built one everybody else opens.";
  "A dev build is served out of a folder of its own, so the answer is in the address the page came from: the folder word stands as one whole part of the path. It is asked as a part rather than as a piece of writing found somewhere in the address, because a chapter or a book could one day be spelled with those same three letters and would otherwise answer yes.";
  "The folder word is asked for rather than written down here, so this and the build that puts the pages there can never come to disagree about what it is.";
  let folder = app_shared_name_dev_text();
  let parts = text_split_slash_forward(location.pathname);
  let r = list_includes(parts, folder);
  return r;
}
