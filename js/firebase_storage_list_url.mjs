import { firebase_storage_host } from "./firebase_storage_host.mjs";
import { firebase_storage_list_page_size } from "./firebase_storage_list_page_size.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { null_is } from "./null_is.mjs";
export function firebase_storage_list_url(project_url, prefix, page_token) {
  "The address that asks a bucket what it holds under a prefix.";
  "A page token of nothing asks for the first page. The bucket names the next page itself when there is one, so the caller never counts pages and never guesses a name.";
  "The token is spelled for an address before it is joined on. A bucket hands it back as base64, which carries a plus, and a plus already means a space where it is being put - so a token holding one arrived at the far end with a space in it and the bucket refused the whole request. That refusal falls on the SECOND page and never the first, so a listing shorter than one page looks perfectly well.";
  let size = firebase_storage_list_page_size();
  let host = firebase_storage_host();
  let first = text_combine_multiple([
    "https://",
    host,
    "/v0/b/",
    project_url,
    "/o?prefix=",
    prefix,
    "&maxResults=",
    size,
  ]);
  let none = null_is(page_token);
  if (none) {
    return first;
  }
  let url = text_combine_multiple([first, "&pageToken=", page_token]);
  return url;
}
