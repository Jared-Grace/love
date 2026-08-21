import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_oauth_client } from "./youtube_oauth_client.mjs";
import { youtube_oauth_redirect_url } from "./youtube_oauth_redirect_url.mjs";
import { property_get } from "./property_get.mjs";
import { http_post_json } from "./http_post_json.mjs";
export async function youtube_oauth_token_ask(code) {
  "$plain code";
  "Trades the one-use code the browser came back with for the token that actually opens the channel.";
  "The code is worth nothing on its own and dies in minutes - it only proves a person said yes just now. The trade is what turns that into permission, and it is done from here rather than from the browser because it carries the client password, which a browser would show to anybody watching.";
  "The reply holds two different things and it is worth knowing which is which. The access token is the one that opens doors and is spent within the hour; the refresh token is the one that buys more of them, and Google sends it only on a consent freshly given out loud. Lose the refresh token and the only way back is to ask the person again.";
  "The asking is handed over as plain named values rather than spelled out as a form, because the poster underneath always says the body is JSON and always writes it as JSON - so a form written by hand here arrives at Google as a single quoted string and is refused with nothing said about why. Google takes the named values either way, so the shorter road is also the one that cannot be undone by the layer below.";
  arguments_assert(arguments, 1);
  let client = await youtube_oauth_client();
  let client_id = property_get(client, "client_id");
  let client_secret = property_get(client, "client_secret");
  let token_uri = property_get(client, "token_uri");
  let redirect_uri = youtube_oauth_redirect_url();
  let pairs = {
    code: code,
    client_id: client_id,
    client_secret: client_secret,
    redirect_uri: redirect_uri,
    grant_type: "authorization_code",
  };
  let token = await http_post_json(token_uri, pairs);
  return token;
}
