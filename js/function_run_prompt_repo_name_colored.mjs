import { chalk_green_or_red_bg } from "./chalk_green_or_red_bg.mjs";
import { folder_home_repo } from "./folder_home_repo.mjs";
import { folder_exists } from "./folder_exists.mjs";
import { not } from "./not.mjs";
export async function function_run_prompt_repo_name_colored(repo_name) {
  ("Which repo a run is standing in, coloured so that the ordinary ones stand out in the prompt.");
  ("Which repos are the ordinary ones is read off the disk rather than typed here. A repo that keeps its own folder somewhere other than the repos root is the one this is meant to mark, and a list of those names written down in this repo would be a second place to keep that answer, kept in public, going stale the first time one of them moved.");
  let home = folder_home_repo(repo_name);
  let ordinary = await folder_exists(home);
  let apart = not(ordinary);
  let chalk_color_fn = chalk_green_or_red_bg(apart);
  let colored = await chalk_color_fn(repo_name);
  return colored;
}
