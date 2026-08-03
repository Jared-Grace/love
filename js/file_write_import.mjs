import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
export async function file_write_import() {
  "The file writer, fetched only at the moment something actually writes.";
  "Named apart and asked for this way because a plain import is followed before";
  "the file it sits in runs a single line. Writing reaches the caching layer, the";
  "note of what to commit, and the data-file updater behind it - 70 of the 408";
  "files a command loads - and a command that only ever reads paid all of that";
  "loading for a branch that runs when the file is missing, which it is once.";
  "Fetched here instead, those files load the moment something genuinely writes";
  "and not one moment sooner.";
  let module = await import(
    text_combine_multiple(["./", fn_name("file_write"), ".mjs"])
  );
  let fn = property_get(module, fn_name("file_write"));
  return fn;
}
