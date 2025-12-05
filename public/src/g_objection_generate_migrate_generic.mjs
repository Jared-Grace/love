import { folder_user_storage_function_each } from "../../../love/public/src/folder_user_storage_function_each.mjs";
import { g_objection_generate } from "../../../love/public/src/g_objection_generate.mjs";
export async function g_objection_generate_migrate_generic(file_each) {
  let fn = g_objection_generate;
  await folder_user_storage_function_each(fn, file_each);
}
