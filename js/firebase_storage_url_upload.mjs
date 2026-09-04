import { text_replace } from "./text_replace.mjs";
import { firebase_storage_host } from "./firebase_storage_host.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { https_prefix } from "./https_prefix.mjs";
export function firebase_storage_url_upload(storage_path, project_url) {
  "Where a file is sent up to storage, as opposed to the two addresses beside this one, which are where it is read back from and where it is asked about.";
  "The path is carried in a question rather than in the address itself, which is the one way this differs in shape from its neighbours and the reason it could not simply be built on them. Sending to the reading address puts the file nowhere and answers as though it worked.";
  "The separators are written the way storage writes them for the same reason every other address here does: a path handed over with real separators in it names a file in a folder rather than a file whose name has separators in it, and those are two different places.";
  let replaced = text_replace(storage_path, "/", "%2F");
  let host = firebase_storage_host();
  let p = https_prefix();
  let url = text_combine_multiple([
    p,
    host,
    "/v0/b/",
    project_url,
    "/o?name=",
    replaced,
  ]);
  return url;
}
