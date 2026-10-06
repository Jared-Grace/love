import { arguments_assert } from "./arguments_assert.mjs";
import { null_is } from "./null_is.mjs";
import { ternary } from "./ternary.mjs";
import { http_status_answering_server } from "./http_status_answering_server.mjs";
import { property_get } from "./property_get.mjs";
import { catch_message_async } from "./catch_message_async.mjs";
import { not } from "./not.mjs";
import { http_error_message_absent_is } from "./http_error_message_absent_is.mjs";
export async function http_status_refusal_absent_is(answered, bytes_get) {
  "$plain answered";
  "Whether this repo reads a real server's refusal as the thing asked for not being there, asked through one given way of fetching.";
  "THE WAY OF FETCHING IS HANDED IN BECAUSE THERE ARE TWO OF THEM AND THEY HAVE TO AGREE. A script fetches one way and a page fetches another, and each builds its own complaint out of what came back. The judgement that reads those complaints is a single line shared by both, so either half can drift away from it alone, and the half that drifted still looks exactly like a half that works. Everything up to the fetch is the same question either way, so it is written once here and the fetch is the one thing a caller says.";
  "NOTHING ANSWERING AT ALL IS ASKED FOR BY HANDING NOTHING AS THE STATUS. The server is started and then stopped before anybody asks it, so the connection is refused with no status anywhere and no message to read - which is the case a reading has to get wrong quietly, because silence looks so much like an answer of no.";
  "IT STARTS AND STOPS ITS OWN SERVER, so a caller asking every case in a corpus gets a fresh far end for each one rather than one server wearing several meanings.";
  arguments_assert(arguments, 2);
  let unanswerable = null_is(answered);
  let status_code = ternary(unanswerable, 200, answered);
  let answering = await http_status_answering_server(status_code);
  let url = property_get(answering, "url");
  let close = property_get(answering, "close");
  if (unanswerable) {
    await close();
  }
  async function lambda() {
    let bytes = await bytes_get(url);
    return bytes;
  }
  let caught = await catch_message_async(lambda);
  let still_answering = not(unanswerable);
  if (still_answering) {
    await close();
  }
  let message = property_get(caught, "message");
  let absent = http_error_message_absent_is(message);
  return absent;
}
