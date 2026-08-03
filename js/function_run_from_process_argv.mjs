import { process_folder_repos_stand } from "./process_folder_repos_stand.mjs";
import { function_run } from "./function_run.mjs";
export async function function_run_from_process_argv() {
  const [, , f_name, ...args] = process.argv;
  await process_folder_repos_stand();
 let result=await function_run(f_name, args)
  return result
}
