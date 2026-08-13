import { app_shared_hash_fields_unknown_findings } from "./app_shared_hash_fields_unknown_findings.mjs";
import { app_shared_hash_fields_unknown_screen } from "./app_shared_hash_fields_unknown_screen.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function app_shared_hash_fields_unknown_shown_is(parent, hash, fields) {
  "The one line a page puts in front of its own work: did the link say anything none of these fields can make sense of, and has the reader been shown so? A page that hears yes has nothing left to do and should stop.";
  "It answers and draws in the same breath so that a page cannot ask and then forget to say anything. The alternative shape - one function to ask and another to tell - is two calls a page can get half right, and getting it half right is the silence this exists to end.";
  "It is asked before anything is fetched. Every reader of these words downstream goes looking for the one thing a word names and throws when it names none, and the throw happens inside the page's opening, before a line is drawn - so the reader is left on the words a page paints while it starts, for ever.";
  let findings = app_shared_hash_fields_unknown_findings(hash, fields);
  let all_known = list_empty_is(findings);
  if (all_known) {
    return false;
  }
  app_shared_hash_fields_unknown_screen(parent, findings);
  return true;
}
