import { log } from "../../../love/public/src/log.mjs";
import { string_replace } from "../../../love/public/src/string_replace.mjs";
import { function_rename } from "../../../love/public/src/function_rename.mjs";
export async function function_rename_replace(f_name_before, from, to) {
  let f_name_after = string_replace(f_name_before, from, to);
  log({
    f_name_after,
    f_name_before,
    from,
    to,
  });
  let v = await function_rename(f_name_before, f_name_after);
  return v;
}
