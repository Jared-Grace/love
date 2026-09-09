import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
export async function gloss_chapter_pointers_dangling_repair_span_scratch(
  read,
) {
  arguments_assert(arguments, 1);
  let object = property_get(read, "chapter");
  let contents = json_format_to(object);
  let file_path = property_get(read, "path");
  await file_overwrite_uncached(file_path, contents);
}
