import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_api_url } from "./youtube_api_url.mjs";
import { youtube_oauth_access_token_buy } from "./youtube_oauth_access_token_buy.mjs";
import { http_generic } from "./http_generic.mjs";
import { text_combine } from "./text_combine.mjs";
export async function youtube_api_bytes(method, path, params, body) {
  "$plain method";
  "$plain path";
  "$plain params";
  "$plain body";
  "Asks YouTube's own door something as the owner of the channel, whichever way of asking is wanted, and hands back what came back without reading it.";
  "Signing in even to read is what makes the answer the owner's own rather than the public's. A video that is private or unlisted is invisible to an unsigned ask and comes back plainly here, and the record handed over is the whole editable one rather than the part a stranger is shown.";
  "The four ways of asking differ only in the word naming them and in whether anything is sent along, so they are one thing here rather than four near-copies. Keeping them apart meant that a fix to how signing in works had to be made four times, and a fifth way of asking meant a fifth copy.";
  "What came back is left as bytes rather than read, because the ways of asking do not agree on what comes back. Three of them answer with a record and one answers with nothing at all, and reading nothing at all as a record fails - so the reading belongs to whoever knows which ask was made.";
  arguments_assert(arguments, 4);
  let url = youtube_api_url(path, params);
  let access_token = await youtube_oauth_access_token_buy();
  let authorization = text_combine("Bearer ", access_token);
  let options = {
    method: method,
    headers: {
      Authorization: authorization,
    },
    body: body,
  };
  let buffer = await http_generic(url, options);
  return buffer;
}
