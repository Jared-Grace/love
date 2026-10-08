import { json_from } from "./json_from.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_oauth_access_token } from "./youtube_oauth_access_token.mjs";
import { http_answer } from "./http_answer.mjs";
import { property_get } from "./property_get.mjs";
import { buffer_text_to } from "./buffer_text_to.mjs";
export async function youtube_oauth_access_token_allows() {
  arguments_assert(arguments, 0);
  ("What Google says the key the channel is opened with is allowed to do: the permissions it carries, how long it has left, and whether Google recognises it at all - never the key itself.");
  ("★ IT EXISTS FOR THE DAY YOUTUBE REFUSES A KEY THE SIGN-IN SERVICE HAS JUST HANDED OVER. Measured 2026-10-08: a freshly bought key was accepted for asking which channel this is and refused, as invalid, for uploading and for listing the channel's videos. A refusal like that says nothing about why; Google's own description of the key is the one place that tells a key granted less than was asked for apart from a key that is fine and a fault somewhere else.");
  ("★ THE KEY IS SENT ONLY TO GOOGLE'S OWN SIGN-IN SERVICE AND NEVER PRINTED. What comes back is chosen field by field rather than passed through, so nothing that opens the channel can reach a screen or a log by way of this.");
  let access_token = await youtube_oauth_access_token();
  let url =
    "https://oauth2.googleapis.com/tokeninfo?access_token=" +
    encodeURIComponent(access_token);
  let answer = await http_answer(url, {
    method: "GET",
    headers: {}, body: null,
  });
  let status = property_get(answer, "status");
  let buffer = property_get(answer, "bytes");
  let said = buffer_text_to(buffer);
  let info = json_from(said);
  let r = {
    status,
    scope: info.scope ?? null,
    expires_in: info.expires_in ?? null,
    error: info.error ?? null,
    error_description: info.error_description ?? null,
  };
  return r;
}
