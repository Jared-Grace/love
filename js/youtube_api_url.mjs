import { arguments_assert } from "./arguments_assert.mjs";
import { text_query_encode } from "./text_query_encode.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function youtube_api_url(path, params) {
  "$plain path";
  "$plain params";
  "The full address of one of YouTube's own doors, given the short name of the door and the named values to hand it.";
  "This is the official way in, not the one the watch page uses. The functions already here read what a browser would be shown and are refused nothing because they ask for nothing - they also cannot change a single word. Writing needs the door that checks who is asking, and that door lives at a different address with a different shape, so it gets a name of its own rather than being folded into the reading one.";
  arguments_assert(arguments, 2);
  let query = text_query_encode(params);
  let url = text_combine_multiple([
    "https://www.googleapis.com/youtube/v3/",
    path,
    "?",
    query,
  ]);
  return url;
}
