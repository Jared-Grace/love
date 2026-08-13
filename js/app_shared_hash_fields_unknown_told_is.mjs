import { app_shared_hash_fields_unknown_findings } from "./app_shared_hash_fields_unknown_findings.mjs";
import { app_shared_hash_fields_unknown_screen } from "./app_shared_hash_fields_unknown_screen.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function app_shared_hash_fields_unknown_told_is(parent, hash, fields) {
  "Reads a link back to the reader where the page can carry on afterwards: did the link say anything none of these fields can make sense of, and has the reader been told so? A page that hears yes still draws everything it was going to draw.";
  "This is the shape a field can only be checked after a fetch. Whether there is a verse 40 is a question about the chapter in hand, so by the time it can be asked the page already has the chapter and can perfectly well show it - and showing it is the kinder answer, because a reader who asked for a verse that is not there still wanted this chapter. The correction sits above the chapter rather than instead of it.";
  "The one next door is this and a full stop. The two are kept apart by name because the difference is the whole contract - one says stop, this one says carry on - and a page reading only the name of what it calls should not have to guess which it got.";
  let findings = app_shared_hash_fields_unknown_findings(hash, fields);
  let all_known = list_empty_is(findings);
  if (all_known) {
    return false;
  }
  app_shared_hash_fields_unknown_screen(parent, findings);
  return true;
}
