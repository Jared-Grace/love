import { arguments_assert } from "./arguments_assert.mjs";
import { text_query_encode } from "./text_query_encode.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function youtube_upload_url(params) {
  "$plain params";
  "The address films are handed to, which is not the address everything else about a film is asked of.";
  "Google keeps the door that receives a file apart from the door that answers questions about files, and the two live under different names. A film sent to the asking door is refused with a complaint about the shape of the record, which sends the reader off to look at the record - the one part of it that was right.";
  arguments_assert(arguments, 1);
  let query = text_query_encode(params);
  let url = text_combine_multiple([
    "https://www.googleapis.com/upload/youtube/v3/videos",
    "?",
    query,
  ]);
  return url;
}
