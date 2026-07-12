import { text_combine } from "./text_combine.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { git_remote_origin_url_set } from "./git_remote_origin_url_set.mjs";
import { equal } from "./equal.mjs";
import { list_first } from "./list_first.mjs";
import { list_skip_end_count } from "./list_skip_end_count.mjs";
import { text_split_slash_forward } from "./text_split_slash_forward.mjs";
import { git_remote_origin_url_get } from "./git_remote_origin_url_get.mjs";
export async function git_ssh(folder) {
  let url_current = await git_remote_origin_url_get(folder);
  let split = text_split_slash_forward(url_current);
  let first = list_first(split);
  if (equal(first, "https:")) {
    let user_repo = list_skip_end_count(split, 2);
    let joined = list_join_slash_forward(user_repo);
    let combined = text_combine("git@github.com:", joined);
    await git_remote_origin_url_set(folder, combined);
  }
  let url_new = await git_remote_origin_url_get(folder);
  return url_new;
}
