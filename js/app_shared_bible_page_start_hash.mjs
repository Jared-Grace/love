import { app_shared_app_fn_set } from "./app_shared_app_fn_set.mjs";
import { app_shared_bible_hash_unknown_page_shown_is } from "./app_shared_bible_hash_unknown_page_shown_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
export function app_shared_bible_page_start_hash(context, app_fn) {
  "The words of the link a bible page was opened by, or nothing at all when the link asked for something we do not have and the page has been given over to saying so.";
  "Every page that reads scripture opens the same three ways at once: it says which app it is, so what it files on a device is filed under its own name; it reads the link; and it looks at the link for words naming nothing before it acts on any of them. The order is the whole of it. Saying which app it is has to come first or the very first thing filed goes under nobody, and the looking has to come before anything is acted on, because a page that has already written to the address has rubbed out the mistake it was about to tell the reader about.";
  "Nothing coming back is how a caller is told to stop, because a page cannot stop on another page's behalf - the correction screen is already drawn by the time this answers, and going on would draw the reading underneath it.";
  arguments_assert(arguments, 2);
  app_shared_app_fn_set(context, app_fn);
  let hash = html_hash_object_get();
  let unknown_shown = app_shared_bible_hash_unknown_page_shown_is(
    context,
    hash,
  );
  if (unknown_shown) {
    let nothing = null;
    return nothing;
  }
  return hash;
}
