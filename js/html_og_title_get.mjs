import { arguments_assert } from "./arguments_assert.mjs";
export function html_og_title_get() {
  "The page's own name as it was built, read from its og:title line rather than from the tab's title, because the tab's title is what a page changes as it is read and this line never is.";
  arguments_assert(arguments, 0);
  let meta = document.querySelector('meta[property="og:title"]');
  let title = meta.content;
  return title;
}
