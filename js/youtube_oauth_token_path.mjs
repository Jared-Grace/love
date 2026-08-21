import { arguments_assert } from "./arguments_assert.mjs";
import { folder_secret_join_json } from "./folder_secret_join_json.mjs";
export function youtube_oauth_token_path() {
  "Where the permission to edit the channel is kept once it has been given.";
  "It sits beside the sign-in it was bought with, outside every repo, for the same reason that one does: this repo is public and its commands sweep the whole working folder without being told what is in it. A token is a live key to the channel, so it is treated as one.";
  arguments_assert(arguments, 0);
  let file_path = folder_secret_join_json("youtube_token");
  return file_path;
}
