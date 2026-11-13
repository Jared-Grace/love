import { json_to } from "./json_to.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { calendar_api_base } from "./calendar_api_base.mjs";
import { equal } from "./equal.mjs";
export async function calendar_api_call(method, route, body, key) {
  arguments_assert(arguments, 4);
  ("One question from the calendar page to the calendar Worker, answered as {status, body} - the same shape ",
    fn_name("calendar_api_handle"),
    " gives, so the page reads an answer the way the tests do.");
  ("A GET carries body in the address (only a host's link name ever goes there - never a name or a number); a POST carries it as JSON. key is the session key the page holds, or null, and travels as Authorization: Bearer, never a cookie.");
  ("A network failure is answered as status 0, reason network, rather than thrown, so every caller has one branch for every way of not getting a yes.");
  let url = calendar_api_base() + route;
  let headers = {};
  if (key) {
    headers.authorization = "Bearer " + key;
  }
  let options = {
    method,
    headers,
  };
  if (equal(method, "GET")) {
    let query = new URLSearchParams(body).toString();
    if (query) {
      url = url + "?" + query;
    }
  } else {
    headers["content-type"] = "application/json";
    options.body = json_to(body);
  }
  try {
    let answer = await fetch(url, options);
    let read = await answer.json();
    let r = {
      status: answer.status,
      body: read,
    };
    return r;
  } catch {
    let r2 = {
      status: 0,
      body: {
        ok: false,
        reason: "network",
      },
    };
    return r2;
  }
}
