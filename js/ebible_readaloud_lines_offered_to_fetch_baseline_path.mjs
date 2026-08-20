import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function ebible_readaloud_lines_offered_to_fetch_baseline_path() {
  "Where the record of bibles already known to be offered with chapters of them still waiting to be fetched is kept.";
  "The bibles with chapters unread that no fetch would reach are not in here. They are kept next door, because the two lists are told apart by what anybody can do about them and this is the one whose whole message is to go and fetch.";
  let v = data_given_baselines_folder();
  let path = path_join([
    v,
    "ebible_readaloud_lines_offered_to_fetch_baseline.json",
  ]);
  return path;
}
