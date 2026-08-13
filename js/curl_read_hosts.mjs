import { firebase_project_name_jg } from "./firebase_project_name_jg.mjs";
import { firebase_storage_host } from "./firebase_storage_host.mjs";
import { google_storage_host } from "./google_storage_host.mjs";
import { text_combine } from "./text_combine.mjs";
export function curl_read_hosts() {
  "The addresses out on the internet that a fetch may reach without asking the human first - this repo's own published pages and its own file store, and nothing else.";
  "What makes fetching one of these safe is that the answer is already public. Anybody may ask for these files, so asking for one tells nobody anything they could not have read for themselves, and the reply cannot be a secret because there is no secret to be had.";
  "The list is worked out rather than written down, so a project renamed in one place is not still trusted here under its old name.";
  "Addresses on this machine and on the network in the same room are not in the list and do not need to be: they never leave the building, so they are recognised by their shape instead. That also keeps a personal machine's name out of a public file.";
  let project = firebase_project_name_jg();
  let published = text_combine(project, ".web.app");
  let storage = firebase_storage_host();
  let bucket = google_storage_host();
  let r = [published, storage, bucket];
  return r;
}
