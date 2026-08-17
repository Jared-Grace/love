import { arguments_assert } from "./arguments_assert.mjs";
import { literals_unnamed_generic_found } from "./literals_unnamed_generic_found.mjs";
import { property_get } from "./property_get.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { greater_than } from "./greater_than.mjs";
import { literal_duplicate_means } from "./literal_duplicate_means.mjs";
import { list_add } from "./list_add.mjs";
export function literals_unnamed_generic_literal(getters, codes) {
  arguments_assert(arguments, 2);
  let r = literals_unnamed_generic_found(getters, codes);
  let found = property_get(r, "found");
  let files_by_literal = property_get(r, "files_by_literal");
  for (let literal of object_property_names(files_by_literal)) {
    let files = files_by_literal[literal];
    if (greater_than(files.length, 1)) {
      let means = literal_duplicate_means(codes, files, literal);
      list_add(found, {
        literal,
        files,
        means,
      });
    }
  }
  return found;
}
