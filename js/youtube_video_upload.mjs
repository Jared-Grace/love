import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_buffer } from "./file_read_buffer.mjs";
import { property_get } from "./property_get.mjs";
import { youtube_video_upload_record } from "./youtube_video_upload_record.mjs";
import { youtube_video_upload_begin } from "./youtube_video_upload_begin.mjs";
import { youtube_video_upload_bytes } from "./youtube_video_upload_bytes.mjs";
import { youtube_video_address } from "./youtube_video_address.mjs";
export async function youtube_video_upload(
  file_path,
  title,
  description,
  privacy,
) {
  "$plain file_path";
  "$plain title";
  "$plain description";
  "$plain privacy";
  "Puts one film on the channel from a file on this machine, and gives back where it now is.";
  "It is the whole errand under one name because the three steps are not separable in practice. The middle one hands back an address that is good for this film and nothing else and dies if it is not used, so a person who ran them apart would be holding a key to a door that had already closed.";
  "What comes back is read out of YouTube's own reply rather than out of what was asked for. A film goes up under a name YouTube decides, and it goes up at a privacy YouTube decides too - a channel that is not yet allowed to publish quietly puts everything up closed, and a caller that trusted its own ask would report a public film that nobody outside the account can see.";
  "It says how large the file was, because that is the one figure that tells a sending that finished from a sending that was cut short and reported cheerfully.";
  arguments_assert(arguments, 4);
  let bytes = await file_read_buffer(file_path);
  let byte_count = property_get(bytes, "length");
  let record = youtube_video_upload_record(title, description, privacy);
  let session_url = await youtube_video_upload_begin(record, byte_count);
  let video = await youtube_video_upload_bytes(session_url, bytes);
  let video_id = property_get(video, "id");
  let address = youtube_video_address(video_id);
  let snippet = property_get(video, "snippet");
  let title_after = property_get(snippet, "title");
  let status = property_get(video, "status");
  let privacy_after = property_get(status, "privacyStatus");
  let r = {
    video_id: video_id,
    address: address,
    title: title_after,
    privacy: privacy_after,
    byte_count: byte_count,
  };
  return r;
}
