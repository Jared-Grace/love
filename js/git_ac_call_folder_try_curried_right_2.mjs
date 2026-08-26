import { git_ac_call_folder_try } from "./git_ac_call_folder_try.mjs";
export function git_ac_call_folder_try_curried_right_2(f_name, args) {
  let c = async function git_ac_call_folder_try_curried_right_2_result(folder) {
    let r = await git_ac_call_folder_try(folder, f_name, args);
    return r;
  };
  return c;
}
