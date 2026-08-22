import { arguments_assert } from "./arguments_assert.mjs";
export function html_on_hash_change(lambda) {
  arguments_assert(arguments, 1);
  ("run this whenever the part of the address after the # changes.");
  ("a link to the page a reader is already on does not load the page again - the browser only changes the address and says so here. So a page that reads its address once, at the moment it opens, answers that link with whatever it was already showing, and the reader sees their link do nothing at all.");
  window.addEventListener("hashchange", lambda);
}
