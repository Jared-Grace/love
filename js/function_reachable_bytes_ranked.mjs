import { arguments_assert } from "./arguments_assert.mjs";
import { function_reachable_names } from "./function_reachable_names.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { property_get } from "./property_get.mjs";
import { file_size } from "./file_size.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { list_take } from "./list_take.mjs";
import { list_size } from "./list_size.mjs";
import { fn_name } from "./fn_name.mjs";
export async function function_reachable_bytes_ranked(f_name) {
  "$plain f_name";
  "the name is a function's own. It names a starting point to walk from and is never called.";
  arguments_assert(arguments, 1);
  ("What a page built from one entry point is made of: every function it can reach through its imports weighed by the size of the file it lives in, biggest first, with the whole weight said as well.");
  ("IT ANSWERS THE QUESTION A BUNDLE SIZE CANNOT. A number of bytes on disk says a page is too big and says nothing at all about which part of it is; every attempt to make a page smaller starts by guessing, and a guess about which of eight hundred functions is the heavy one is wrong nearly every time. Measured on the twenty eighth of August, five sixths of one page turned out to be Bible nobody had opened, and no bundle size could have said so.");
  ("The reachable walk is the one that turns aside at nothing, because that is what a bundler does: a static import is packed whether or not any run of the program ever calls it. A walk that stopped at a guard would hand back less than what ships, which is the one answer that would make this instrument dangerous rather than merely rough.");
  ("IT WEIGHS THE FILE ON DISK, PROSE AND ALL, and a built page carries none of the prose. So a heavily explained function reads heavier here than it ships, and the number is a ranking rather than a measurement - which is what it is wanted for. The thing being looked for is the one family that is an order of magnitude above the rest, and prose does not move anything by an order of magnitude.");
  ("Only the top of the ranking is handed back, because eight hundred names is not a reading anybody performs. The whole weight is said beside it so the top can be read as a share of something rather than as bytes on their own.");
  ("It takes one name rather than an app, so it can be pointed at a function halfway down as easily as at an entry point. Narrowing the question is how the heavy part is found once the ranking says which direction to walk.");
  let reached = await function_reachable_names(f_name);
  let paths = await functions_names_to_paths();
  let weighed = [];
  let total = 0;
  for (let name of reached) {
    let file_path = property_get(paths, name);
    let bytes = await file_size(file_path);
    total = total + bytes;
    list_add(weighed, {
      name,
      bytes,
    });
  }
  function lambda_bytes(entry) {
    let bytes = property_get(entry, "bytes");
    return bytes;
  }
  let ranked = list_sort_number_mapper_reverse(weighed, lambda_bytes);
  let shown_count = 30;
  let largest = list_take(ranked, shown_count);
  let carried = list_size(reached);
  let hint = fn_name("function_reachable_names");
  let r = {
    carried,
    total,
    largest,
    walked_by: hint,
  };
  return r;
}
