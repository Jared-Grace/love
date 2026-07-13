import { git_ac_call_folder_try } from "../../love/js/git_ac_call_folder_try.mjs";
export function git_ac_call_folder_try_curried_right_2(f_name, args) {
  let c = async function git_ac_call_folder_try_curried_right_2_result(folder) {
    return await git_ac_call_folder_try(folder, f_name, args);
  };
  return c;
}
