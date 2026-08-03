import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { fn_name } from "./fn_name.mjs";
import { pages_published_baseline_path } from "./pages_published_baseline_path.mjs";
import { pages_published_names } from "./pages_published_names.mjs";
export async function pages_published_gate_run() {
  "Fail if the set of addresses this repo serves is not the set it last recorded. Read-only.";
  "The half that matters is the one for a name that has gone. A page name is typed by people, kept in bookmarks, and sent to other people, so it is a value that has already left here and cannot be moved from here. Nothing else in the repo was watching it: the page file is named after the function that builds it, with the app word taken off the front, so renaming that function moves a public address - and a rename is the one edit this repo tells everybody is safe by construction.";
  "The other half fails on a name that is new. That is not a fault and is not meant to read as one; it asks for the writer to be run once, so that a new address is something somebody said yes to rather than something that appeared.";
  let names = await pages_published_names();
  let path = pages_published_baseline_path();
  let hint =
    "these addresses are being served and the record does not hold them - if they are meant to be public, record them";
  let name_write = fn_name("pages_published_baseline_write");
  let r = await baseline_names_gate_generic(names, path, hint, name_write);
  return r;
}
