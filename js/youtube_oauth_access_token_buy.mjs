import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_oauth_token_post } from "./youtube_oauth_token_post.mjs";
import { youtube_oauth_token_path } from "./youtube_oauth_token_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
export async function youtube_oauth_access_token_buy() {
  "A key that opens the channel for the next hour, bought fresh with the lasting permission already granted.";
  "It buys a new one every time rather than keeping the last one and watching a clock. A kept key needs the moment it dies written down beside it, and a clock read wrong fails in the worst way there is - it looks like the permission was revoked, when all that happened was that a key was used a minute too late.";
  "Buying is cheap and costs nothing against the daily allowance, because it is asked of the sign-in service rather than of YouTube. That is what makes always-fresh affordable rather than merely safe. A sweep of many hundreds of videos would be the case for holding one and reusing it, and that is the point at which to add the clock rather than before.";
  arguments_assert(arguments, 0);
  let file_path = youtube_oauth_token_path();
  let token = await file_read_json(file_path);
  let refresh_token = property_get(token, "refresh_token");
  let pairs = {
    refresh_token: refresh_token,
    grant_type: "refresh_token",
  };
  let fresh = await youtube_oauth_token_post(pairs);
  let access_token = property_get(fresh, "access_token");
  return access_token;
}
