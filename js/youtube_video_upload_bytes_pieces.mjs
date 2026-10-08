import {Agent, setGlobalDispatcher} from "undici";
import { math_min } from "./math_min.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { multiply } from "./multiply.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_video_upload_patience_ms } from "./youtube_video_upload_patience_ms.mjs";
import { property_get } from "./property_get.mjs";
import { youtube_video_upload_piece_size } from "./youtube_video_upload_piece_size.mjs";
import { http_answer } from "./http_answer.mjs";
import { buffer_to_json } from "./buffer_to_json.mjs";
import { youtube_video_upload_received } from "./youtube_video_upload_received.mjs";
import { buffer_text_to } from "./buffer_text_to.mjs";
import { assert_json } from "./assert_json.mjs";
import { sleep } from "./sleep.mjs";
export async function youtube_video_upload_bytes_pieces(session_url, bytes) {
  "Sends a film's bytes into an upload session YouTube already opened, one piece at a time, and answers the video record YouTube hands back once the last piece lands.";
  "★ A DROPPED CONNECTION ASKS THE SESSION, NEVER STARTS AGAIN. After any failure the next request is the status query (`Content-Range: bytes */total`), which answers how much arrived — or, when the whole film had landed and only the reply was lost, the finished video record itself. So a reset can neither duplicate the film nor lose its id; beginning a new session is what did both, and it lives in the caller, which this never calls.";
  "Only a 5xx or a broken connection is retried; any other refusal is the session saying no, and asking again would get the same no.";
  arguments_assert(arguments, 2);
  let patience = youtube_video_upload_patience_ms();
  let agent = new Agent({
    headersTimeout: patience,
    bodyTimeout: patience,
  });
  setGlobalDispatcher(agent);
  let total = property_get(bytes, "length");
  let size = youtube_video_upload_piece_size();
  let offset = 0;
  let failures = 0;
  let failures_most = 10;
  while (true) {
    let options = null;
    if (equal(failures, 0)) {
      let end = math_min(offset + size, total);
      let piece = bytes.subarray(offset, end);
      let difference = subtract(end, offset);
      options = {
        method: "PUT",
        headers: {
          ["Content-Type"]: "video/mp4",
          ["Content-Length"]: String(difference),
          ["Content-Range"]:
            "bytes " + offset + "-" + subtract(end, 1) + "/" + total,
        },
        body: piece,
      };
    } else {
      options = {
        method: "PUT",
        headers: {
          ["Content-Length"]: "0",
          ["Content-Range"]: "bytes */" + total,
        },
        body: undefined,
      };
    }
    let answer = null;
    try {
      answer = await http_answer(session_url, options);
    } catch (e) {
      answer = null;
    }
    let status = equal(answer, null) ? 0 : property_get(answer, "status");
    if (equal(status, 200) || equal(status, 201)) {
      let buffer = property_get(answer, "bytes");
      let record = buffer_to_json(buffer);
      return record;
    }
    if (equal(status, 308)) {
      offset = youtube_video_upload_received(answer);
      failures = 0;
      continue;
    }
    let retried = equal(status, 0) || greater_than_equal(status, 500);
    let buffer2 = property_get(answer, "bytes");
    let said = equal(answer, null)
      ? "connection failed"
      : buffer_text_to(buffer2);
    assert_json(retried, {
      status,
      said,
    });
    failures = failures + 1;
    let b = less_than_equal(failures, failures_most);
    assert_json(b, {
      status,
      said,
      offset,
      total,
    });
    let ms = multiply(failures, 5000);
    await sleep(ms);
  }
}
