import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_oauth_client } from "./youtube_oauth_client.mjs";
import { property_get } from "./property_get.mjs";
import { object_merge } from "./object_merge.mjs";
import { http_post_json } from "./http_post_json.mjs";
export async function youtube_oauth_token_post(pairs) {
  "Ask Google's sign-in service for a token, signing the ask with this program's own name and password and sending it wherever that client says tokens are traded.";
  "THE CALLER BRINGS WHAT MAKES ITS ASK DIFFERENT AND NOTHING ELSE. There are two asks - a one-use code traded for lasting permission, and lasting permission traded for an hour's key - and the only thing they disagree about is which grant is named and what is handed over with it. Everything else was written out twice: the same three values pulled off the same client, and the same post.";
  "THE NAME AND PASSWORD ARE ADDED HERE RATHER THAN ASKED FOR, because an ask that forgets them is refused by Google with a message about the grant, which sends the reader to the half of the ask that was right.";
  "WHERE IT POSTS COMES FROM THE CLIENT AND IS NEVER SPELLED OUT. The client file is the thing Google itself wrote, so a service that moves its trading address moves it in that file and this follows without being edited.";
  arguments_assert(arguments, 1);
  let client = await youtube_oauth_client();
  let token_uri = property_get(client, "token_uri");
  let client_id = property_get(client, "client_id");
  let client_secret = property_get(client, "client_secret");
  object_merge(pairs, {
    client_id: client_id,
    client_secret: client_secret,
  });
  let answered = await http_post_json(token_uri, pairs);
  return answered;
}
