import { app_shared_name_dev_text } from "./app_shared_name_dev_text.mjs";
import { app_shared_name_latest_text } from "./app_shared_name_latest_text.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { folder_chunks_orphaned } from "./folder_chunks_orphaned.mjs";
import { folder_public } from "./folder_public.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_size } from "./list_size.mjs";
import { list_sum } from "./list_sum.mjs";
export async function public_chunks_orphaned() {
  "Every extra script file left over in any of the three folders a build writes into, with what each folder is carrying for nothing.";
  "★ ASK THIS AFTER EVERY FIX THAT CHANGES WHAT A BUILD PUTS OUT, and not only after one meant to save weight. What a compiler stops writing it does not remove, so a fix lands correctly in the code and leaves its own evidence lying in the folder, dated and committed and looking exactly like something still in use. The one on the 25th of August was found weeks after the fix, by measuring the folder rather than by reading the change.";
  "All three folders are asked about together because the same leftovers appear in each of them at different ages, and reading one alone gives a number that looks like the whole of it.";
  "Nothing is removed here. What to do about a leftover under the folder that is being served is a question about what people have in front of them, so this only ever says what is there.";
  arguments_assert(arguments, 0);
  let prod = folder_public();
  let f_path = app_shared_name_dev_text();
  let dev = folder_public_join(f_path);
  let f_path2 = app_shared_name_latest_text();
  let latest = folder_public_join(f_path2);
  let folders = [prod, dev, latest];
  async function folder_lambda(folder) {
    let orphaned = await folder_chunks_orphaned(folder);
    let sizes = list_map_property(orphaned, "size");
    let bytes = list_sum(sizes);
    let r = {
      folder,
      count: list_size(orphaned),
      bytes,
      orphaned,
    };
    return r;
  }
  let all = await list_map_unordered_async(folders, folder_lambda);
  let byte_counts = list_map_property(all, "bytes");
  let bytes = list_sum(byte_counts);
  let counts = list_map_property(all, "count");
  let count = list_sum(counts);
  let r = {
    count,
    bytes,
    folders: all,
  };
  return r;
}
