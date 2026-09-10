import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine } from "./text_combine.mjs";
import { http_answer } from "./http_answer.mjs";
import { buffer_text_to } from "./buffer_text_to.mjs";
import { divide_round } from "./divide_round.mjs";
import { equal } from "./equal.mjs";
import { assert_json } from "./assert_json.mjs";
import { buffer_to_json } from "./buffer_to_json.mjs";
export async function youtube_video_upload_bytes(session_url, bytes) {
  "$plain session_url";
  "$plain bytes";
  "Hands the whole of a film to the address kept open for it, and gives back the record of the video that now exists, including the word it can be reached by.";
  "The address already carries who is asking inside it, so nothing is signed here. Signing it again is not harmless - the permission written on the ask disagrees with the permission the address was opened under, and the refusal that follows names the permission rather than the repetition.";
  "The whole file goes in one go rather than in pieces. Pieces are what the two-step way is for and they are worth having for a film large enough that losing the sending halfway matters, but a piece is only worth sending once there is something that counts how far it got - and until that exists, sending in pieces is the same single failure with more places to get the counting wrong.";
  "The reply is read as a record rather than thrown away, because the name YouTube gives the video is decided by YouTube and appears nowhere else. Whoever asked for the sending cannot work it out and cannot ask for it afterwards without it.";
  arguments_assert(arguments, 2);
  let byte_count = property_get(bytes, "length");
  let length = text_combine("", byte_count);
  let options = {
    method: "PUT",
    headers: {
      ["Content-Type"]: "video/mp4",
      ["Content-Length"]: length,
    },
    body: bytes,
  };
  let answer = await http_answer(session_url, options);
  let status = property_get(answer, "status");
  let answered = property_get(answer, "bytes");
  let said = buffer_text_to(answered);
  let rounded = divide_round(status, 100);
  let welcomed = equal(rounded, 2);
  assert_json(welcomed, {
    status,
    said,
  });
  let record = buffer_to_json(answered);
  return record;
}
