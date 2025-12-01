import { each_async } from "../../../love/public/src/each_async.mjs";
import { folder_read_paths_async } from "../../../love/public/src/folder_read_paths_async.mjs";
import { g_objection_generate } from "../../../love/public/src/g_objection_generate.mjs";
export async function g_objection_generate_migrate_generic(file_each) {
  let fn = g_objection_generate;
  const path = "D:\\user\\storage\\function\\" + fn.name;
  let combineds = await folder_read_paths_async(path);
  await each_async(combineds, file_each);
}
