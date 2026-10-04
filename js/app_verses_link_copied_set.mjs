import { storage_local_set } from "./storage_local_set.mjs";
import { app_verses_link_copied_get } from "./app_verses_link_copied_get.mjs";
export function app_verses_link_copied_set(copied) {
  "$plain copied";
  "the answer says whether the reader wants a link copied under their verses. It is a yes or a no to remember and nothing that runs.";
  "Remember whether this reader wants a link to this page copied under their verses.";
  "The reading half of this pair owns the place it is kept, and its own name is what names that place, so the two cannot end up looking in different drawers.";
  storage_local_set(app_verses_link_copied_get, "link_copied", copied);
}
