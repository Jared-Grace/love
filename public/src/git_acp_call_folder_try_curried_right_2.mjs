import { git_acp_call_folder_try } from "../../../love/public/src/git_acp_call_folder_try.mjs";
export async function git_acp_call_folder_try_curried_right_2(f_name, args) {
  let r2 = async function git_acp_call_folder_try_curried_right_2_result(
    folder,
  ) {
    let r = await git_acp_call_folder_try(folder, f_name, args);
    return r;
  };
  return r2;
}
