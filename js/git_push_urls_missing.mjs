import { git_push_urls } from "./git_push_urls.mjs";
import { git_push_urls_expected } from "./git_push_urls_expected.mjs";
import { git_remote_origin_is } from "./git_remote_origin_is.mjs";
import { git_remote_origin_url_get } from "./git_remote_origin_url_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function git_push_urls_missing(folder) {
  "The addresses this folder is meant to write to and does not.";
  "Nothing at all is the answer for a repository with nowhere to push, and the same answer for one nobody wrote an expectation for. Neither is a fault, so neither is worth telling apart from the other here.";
  let somewhere = await git_remote_origin_is(folder);
  let nowhere = not(somewhere);
  if (nowhere) {
    let r = [];
    return r;
  }
  let read_from = await git_remote_origin_url_get(folder);
  let all = git_push_urls_expected();
  let entry = list_find_property_or_null(all, "fetch_url", read_from);
  let unnamed = null_is(entry);
  if (unnamed) {
    let r2 = [];
    return r2;
  }
  let wanted = property_get(entry, "push_urls");
  let written_to = await git_push_urls(folder);
  function missing_is(url) {
    let absent = list_includes_not(written_to, url);
    return absent;
  }
  let missing = list_filter(wanted, missing_is);
  return missing;
}
