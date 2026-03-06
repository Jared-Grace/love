import { add } from "../../../love/public/src/add.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_adder_group } from "../../../love/public/src/list_adder_group.mjs";
import { list_filter_empty_not_is } from "../../../love/public/src/list_filter_empty_not_is.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { file_read_folder_user_split_normalize } from "../../../love/public/src/file_read_folder_user_split_normalize.mjs";
export async function sandbox() {
  const path = "David.txt";
  let r = await file_read_folder_user_split_normalize(path);
  let normalized = property_get(r, "normalized");
  let filtered = list_filter_empty_not_is(normalized);
  let separator = "---";
  function lambda2(g) {
    g.start();
    function lambda(item) {
      if (item === separator) {
        g.end();
      } else {
        g.add(item);
      }
    }
    each(filtered, lambda);
    g.end();
  }
  let groups = list_adder_group(lambda2);
  return groups;
}
