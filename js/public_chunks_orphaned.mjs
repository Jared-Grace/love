import { arguments_assert } from "./arguments_assert.mjs";
import { folder_public } from "./folder_public.mjs";
import { folder_public_dev } from "./folder_public_dev.mjs";
import { folder_public_latest } from "./folder_public_latest.mjs";
import { folder_chunks_walked } from "./folder_chunks_walked.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_sum } from "./list_sum.mjs";
import { list_size } from "./list_size.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function public_chunks_orphaned() {
  "Every extra script file left over in any of the three folders a build writes into, with what each folder is carrying for nothing, and with how many script files each folder held at all.";
  "★ ASK THIS AFTER EVERY FIX THAT CHANGES WHAT A BUILD PUTS OUT, and not only after one meant to save weight. What a compiler stops writing it does not remove, so a fix lands correctly in the code and leaves its own evidence lying in the folder, dated and committed and looking exactly like something still in use. The one on the 25th of August was found weeks after the fix, by measuring the folder rather than by reading the change.";
  "All three folders are asked about together because the same leftovers appear in each of them at different ages, and reading one alone gives a number that looks like the whole of it.";
  "HOW MANY SCRIPTS WERE IN THE FOLDERS IS CARRIED ALONGSIDE HOW MANY WERE LEFT OVER. The two answer different questions and only the first can fall quietly: no leftovers is what a swept folder says and also what a folder that has moved says, and a build settings edit is all it takes to move one.";
  "Nothing is removed here. What to do about a leftover under the folder that is being served is a question about what people have in front of them, so this only ever says what is there.";
  arguments_assert(arguments, 0);
  let prod = folder_public();
  let dev = folder_public_dev();
  let latest = folder_public_latest();
  let folders = [prod, dev, latest];
  async function public_chunks_orphaned_folder_lambda(folder) {
    let told = await folder_chunks_walked(folder);
    let folder_walked = property_get(told, "walked");
    let orphaned = property_get(told, "orphaned");
    let sizes = list_map_property(orphaned, "size");
    let folder_bytes = list_sum(sizes);
    let folder_row = {
      folder,
      walked: folder_walked,
      count: list_size(orphaned),
      bytes: folder_bytes,
      orphaned,
    };
    return folder_row;
  }
  let all = await list_map_unordered_async(
    folders,
    public_chunks_orphaned_folder_lambda,
  );
  let byte_counts = list_map_property(all, "bytes");
  let bytes = list_sum(byte_counts);
  let counts = list_map_property(all, "count");
  let count = list_sum(counts);
  let walked_counts = list_map_property(all, "walked");
  let walked = list_sum(walked_counts);
  let r = {
    walked,
    count,
    bytes,
    folders: all,
  };
  return r;
}
