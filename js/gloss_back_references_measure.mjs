import { property_list_size } from "./property_list_size.mjs";
import { each_async } from "./each_async.mjs";
import { file_exists } from "./file_exists.mjs";
import { gloss_chapters_back_references } from "./gloss_chapters_back_references.mjs";
import { gloss_stores } from "./gloss_stores.mjs";
import { list_add } from "./list_add.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export async function gloss_back_references_measure() {
  "How many explanations in each gloss store point the reader further up instead of saying the thing itself, and which stores could not be read at all.";
  "A store that is not on the disk is reported as missing rather than counted as clean. The stores live on a drive that is sometimes not mounted, and a sweep that answered nothing found there would hand back a zero - which reads exactly like a store somebody has finished repairing. Not looked at and nothing wrong are different answers and must not share one.";
  let stores = gloss_stores();
  let counts = [];
  let missing = [];
  async function store_measure(fn) {
    let store = property_get(fn, "name");
    let folder = local_function_folder(fn);
    let exists = await file_exists(folder);
    if (not(exists)) {
      list_add(missing, store);
      return;
    }
    let found = await gloss_chapters_back_references(fn);
    let offenders = property_get(found, "offenders");
    function pointing_size(chapter) {
      let size = property_list_size(chapter, "pointing");
      return size;
    }
    let sites = list_map_sum(offenders, pointing_size);
    let count = {
      store,
      sites,
    };
    list_add(counts, count);
  }
  await each_async(stores, store_measure);
  let r = {
    counts,
    missing,
  };
  return r;
}
