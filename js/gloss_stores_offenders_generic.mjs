import { each_async } from "./each_async.mjs";
import { file_exists } from "./file_exists.mjs";
import { gloss_stores } from "./gloss_stores.mjs";
import { list_add } from "./list_add.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export async function gloss_stores_offenders_generic(lambda_fn) {
  "Put the caller's question to every gloss store there is, and answer with what each store said beside the stores that could not be read at all.";
  "The stores are asked for by the roster rather than named here, so a store added to the roster is asked this question from the moment it joins and nobody has to remember to add it to a second list.";
  "A store that is not on the disk is reported as missing rather than answered for. These stores live on a drive that is not always mounted, and a sweep that read nothing there would hand back an empty answer - which reads exactly like a store with nothing wrong in it. Not looked at and nothing wrong are different answers and must not share one.";
  let stores = gloss_stores();
  let counts = [];
  let missing = [];
  async function store_ask(fn) {
    let store = property_get(fn, "name");
    let folder = local_function_folder(fn);
    let exists = await file_exists(folder);
    if (not(exists)) {
      list_add(missing, store);
      return;
    }
    let found = await lambda_fn(fn);
    let count = {
      store,
      found,
    };
    list_add(counts, count);
  }
  await each_async(stores, store_ask);
  let r = {
    counts,
    missing,
  };
  return r;
}
