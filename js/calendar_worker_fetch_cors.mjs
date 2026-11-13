import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { calendar_worker_fetch } from "./calendar_worker_fetch.mjs";
export async function calendar_worker_fetch_cors(request, env) {
  arguments_assert(arguments, 2);
  ("The calendar Worker's entry: ",
    fn_name("calendar_worker_fetch"),
    " with every answer marked readable by a page on any address, and the browser's preflight question answered before it.");
  ("Why any address is safe: the session key travels as Authorization: Bearer, never a cookie, so a page on another site holds no key to spend and the browser sends none for it. What this opens is only what the bare address already answers to anyone with curl.");
  ("Why it is needed at all: the dev page on localhost and the phone's LAN address talk to the workers.dev test address, which is another origin. Once the page and the routes share christarose.org, nothing needs it, and it costs nothing there.");
  let headers = {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, POST, OPTIONS",
    "access-control-allow-headers": "authorization, content-type",
    "access-control-max-age": "86400",
  };
  if (equal(request.method, "OPTIONS")) {
    let r = new Response(null, {
      status: 204,
      headers,
    });
    return r;
  }
  let answer = await calendar_worker_fetch(request, env);
  let marked = new Response(answer.body, answer);
  for (let [name, value] of Object.entries(headers)) {
    marked.headers.set(name, value);
  }
  return marked;
}
