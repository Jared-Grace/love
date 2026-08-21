import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_oauth_client } from "./youtube_oauth_client.mjs";
import { youtube_oauth_scope } from "./youtube_oauth_scope.mjs";
import { youtube_oauth_redirect_url } from "./youtube_oauth_redirect_url.mjs";
import { property_get } from "./property_get.mjs";
import { text_query_encode } from "./text_query_encode.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function youtube_oauth_consent_url() {
  "The address a person opens to be shown what is being asked for and to say yes or no to it.";
  "Nothing here can grant anything. It only builds the question, and the answering happens in the browser under the person's own account - which is why this is the half that can be printed and looked at before it is opened, and why the machine never needs to be trusted with the saying yes.";
  "Two of the words asked for are what make the permission outlive the afternoon. Offline says a token is wanted that keeps working after the browser is closed, and consent forces the question to be asked out loud again rather than answered silently from a yes given before - without which Google hands back a token that dies with the session and no way to renew it.";
  "It will warn that the app is not verified. That is expected and is not a fault: verification is for an app asking strangers for access, and this one is the owner of the channel asking themselves.";
  arguments_assert(arguments, 0);
  let client = await youtube_oauth_client();
  let client_id = property_get(client, "client_id");
  let auth_uri = property_get(client, "auth_uri");
  let redirect_uri = youtube_oauth_redirect_url();
  let scope = youtube_oauth_scope();
  let pairs = {
    client_id: client_id,
    redirect_uri: redirect_uri,
    response_type: "code",
    scope: scope,
    access_type: "offline",
    prompt: "consent",
  };
  let query = text_query_encode(pairs);
  let url = text_combine_multiple([auth_uri, "?", query]);
  return url;
}
