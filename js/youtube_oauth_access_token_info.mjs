import { arguments_assert } from "./arguments_assert.mjs";
import { http_answer } from "./http_answer.mjs";
import { property_get } from "./property_get.mjs";
import { buffer_text_to } from "./buffer_text_to.mjs";
import { json_from } from "./json_from.mjs";
export async function youtube_oauth_access_token_info(access_token) {
  arguments_assert(arguments, 1);
  ("What Google's sign-in service says about one key it handed over: the permissions it carries, how long it has left, and whether it recognises the key at all - never the key itself.");
  ("★ THE KEY IS SENT ONLY TO GOOGLE'S OWN SIGN-IN SERVICE AND NEVER PRINTED. What comes back is chosen field by field rather than passed through, so nothing that opens the channel can reach a screen or a log by way of this.");
  let url =
    "https://oauth2.googleapis.com/tokeninfo?access_token=" +
    encodeURIComponent(access_token);
  let answer = await http_answer(url, {
    method: "GET",
    headers: {},
    body: null,
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
