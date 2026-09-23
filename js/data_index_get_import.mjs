import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
export async function data_index_get_import() {
  "The index reader, fetched only at the moment something actually asks for the";
  "index.";
  "Named apart and asked for this way because a plain import is followed before";
  "the file it sits in runs a single line. The index reader reaches the whole";
  "repo scanner, the file parser, and acorn behind it - 98 of the 417 files a";
  "command loads, or very nearly a quarter of them - and every command paid that";
  "loading to read a small list of aliases, down a branch it never took.";
  "Fetched here instead, the same files load the moment the index is genuinely";
  "wanted and not one moment sooner, and what is behind the branch is exactly";
  "what it always was.";
  let module = await import(
    text_combine_multiple(["./", fn_name("data_index_get"), ".mjs"])
  );
  ("The name is asked for rather than spelled after a dot, because a word after a dot belongs to whatever is being asked and no rename may follow it there. This one must follow a rename - it is the export's own name - so it is written as the marker that says so, the same one the path above already uses");
  let fn = property_get(module, fn_name("data_index_get"));
  return fn;
}
