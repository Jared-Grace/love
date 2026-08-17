import { http_head_options } from "./http_head_options.mjs";
import { http_generic } from "./http_generic.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_not_is } from "./null_not_is.mjs";
export async function url_available_is(url) {
  "Whether there is something at an address, asked without fetching it.";
  "The asking is a head request, so the far end answers with its yes or no and none of the thing itself. Over a sweep of hundreds of addresses that is the difference between a question and a download.";
  "Anything other than a success reads as absent - a refusal, a not-found, a connection that never opened. Telling those apart would matter to somebody diagnosing the far end and does not matter to somebody asking whether to fetch, which is the only question here.";
  let options = http_head_options();
  async function lambda() {
    let answered = await http_generic(url, options);
    return answered;
  }
  let r = await catch_null_async(lambda);
  let available = null_not_is(r);
  return available;
}
