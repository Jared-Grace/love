import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_is_assert_json } from "./text_is_assert_json.mjs";
import { app_shared_api_post_json } from "./app_shared_api_post_json.mjs";
import { property_set_if_exists_not } from "./property_set_if_exists_not.mjs";
import { app_shared_api_generic } from "./app_shared_api_generic.mjs";
export async function app_shared_api(a) {
  arguments_assert(arguments, 1);
  let f_name = property_get(a, "f_name");
  text_is_assert_json(f_name, {
    hint: "the request should carry a text f_name to call — is f_name present on the request?",
    a,
  });
  ("the posting is done by the one written for this door rather than by the plain json post, because a call named here runs a function on the serving machine and the ceiling and the try count that suit an ordinary lookup are wrong for that in both directions.");
  ("IT IS A DEFAULT AND NOT A RULE. A request that already names its own way of posting keeps it, because the ceiling here is still a guess made on behalf of every caller, and the one caller that knows how long its own work takes is the one making the call. Rendering a video out of a chapter runs for minutes, so the minute this door allows would end it every single time, and the error it raised would be about the socket and would never name the ceiling that caused it.");
  ("The default is set rather than merely read so that the ordinary caller carries nothing and says nothing; only the rare long one has to know anything at all.");
  let fn_http = app_shared_api_post_json;
  property_set_if_exists_not(a, "fn_http", fn_http);
  let result = await app_shared_api_generic(a);
  return result;
}
