import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_upload_url } from "./youtube_upload_url.mjs";
import { youtube_oauth_access_token } from "./youtube_oauth_access_token.mjs";
import { text_combine } from "./text_combine.mjs";
import { json_to } from "./json_to.mjs";
import { http_answer } from "./http_answer.mjs";
import { property_get } from "./property_get.mjs";
import { buffer_text_to } from "./buffer_text_to.mjs";
import { equal } from "./equal.mjs";
import { assert_json } from "./assert_json.mjs";
export async function youtube_video_upload_begin(record, byte_count) {
  "$plain record";
  "$plain byte_count";
  "Tells YouTube a film is coming and what it is to be called, and gets back the one address those particular bytes are to be sent to.";
  "Nothing of the film itself is sent here. The whole point of asking first is that everything that can be refused - a name too long, a word that is not a privacy setting, a permission that has run out - is refused before a single byte of a large file has gone anywhere, rather than after the whole of it has.";
  "The address that comes back is written in a note beside the reply and not in the reply, which is why the whole answer is asked for rather than its bytes. It is good for one film only and cannot be worked out from anything, so a run that loses it has to start the sending again from the beginning.";
  "How big the file is is told in advance, because that is what lets a sending that broke in the middle be carried on rather than restarted. YouTube cannot ask how much of a stream it has left to expect, so a figure that is wrong here is not a small error - it is a file recorded as finished while part of it is missing.";
  arguments_assert(arguments, 2);
  let params = {
    uploadType: "resumable",
    part: "snippet,status",
  };
  let url = youtube_upload_url(params);
  let access_token = await youtube_oauth_access_token();
  let authorization = text_combine("Bearer ", access_token);
  let length = text_combine("", byte_count);
  let options = {
    method: "POST",
    headers: {
      Authorization: authorization,
      ["Content-Type"]: "application/json",
      ["X-Upload-Content-Length"]: length,
      ["X-Upload-Content-Type"]: "video/mp4",
    },
    body: json_to(record),
  };
  let answer = await http_answer(url, options);
  let status = property_get(answer, "status");
  let bytes = property_get(answer, "bytes");
  let said = buffer_text_to(bytes);
  let welcomed = equal(status, 200);
  assert_json(welcomed, {
    url,
    status,
    said,
  });
  let headers = property_get(answer, "headers");
  let session_url = property_get(headers, "location");
  return session_url;
}
