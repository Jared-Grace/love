import { fn_name } from "./fn_name.mjs";
import { json_to } from "./json_to.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_facebook_login } from "./calendar_facebook_login.mjs";
import { calendar_api_handle } from "./calendar_api_handle.mjs";
export async function calendar_worker_fetch(request, env) {
  arguments_assert(arguments, 2);
  ("The calendar Worker's whole web side: turns a Request into one call of ",
    fn_name("calendar_api_handle"),
    " and its answer into a JSON Response, and sends /calendar/login/facebook to ",
    fn_name("calendar_facebook_login"),
    ". Everything it decides lives in those two; this only translates.");
  ("env holds DB (the D1 database), RATE (a Workers rate limit binding), TURNSTILE_SECRET, FACEBOOK_APP_ID, FACEBOOK_APP_SECRET. The session key arrives as Authorization: Bearer <key>, never a cookie, so no other site can spend it.");
  let url = new URL(request.url);
  let json = function lambda(status, value) {
    let json2 = json_to(value);
    let r = new Response(json2, {
      status,
      headers: {
        "content-type": "application/json; charset=utf-8",
        "cache-control": "no-store",
      },
    });
    return r;
  };
  if (equal(url.pathname, "/calendar/login/facebook")) {
    let r2 = await calendar_facebook_login(request, env);
    return r2;
  }
  let prefix = "/calendar/api/";
  let b = url.pathname.startsWith(prefix);
  if (not(b)) {
    let r3 = json(404, {
      ok: false,
      reason: "route",
    });
    return r3;
  }
  let route = url.pathname.slice(prefix.length);
  let ip = request.headers.get("CF-Connecting-IP") ?? "unknown";
  let outside = {
    rate_ok: async function lambda2() {
      let limited = await env.RATE.limit({
        key: ip,
      });
      let r8 = limited.success;
      return r8;
    },
    turnstile_ok: async function lambda3(token) {
      let form = new URLSearchParams({
        secret: env.TURNSTILE_SECRET,
        response: token,
        remoteip: ip,
      });
      let answer = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          body: form,
        },
      );
      let checked = await answer.json();
      let eq = equal(checked.success, true);
      return eq;
    },
    uid_new: function lambda4() {
      let r9 = crypto.randomUUID();
      return r9;
    },
  };
  let body = Object.fromEntries(url.searchParams);
  if (equal(request.method, "POST")) {
    try {
      body = await request.json();
    } catch {
      let r4 = json(400, {
        ok: false,
        reason: "json",
      });
      return r4;
    }
    if (equal(body, null) || not_equal(typeof body, "object")) {
      let r5 = json(400, {
        ok: false,
        reason: "json",
      });
      return r5;
    }
  }
  let auth = request.headers.get("Authorization") ?? "";
  let key = auth.startsWith("Bearer ") ? auth.slice(7) : null;
  let now_iso = new Date().toISOString();
  try {
    let answer2 = await calendar_api_handle(
      env.DB,
      outside,
      request.method,
      route,
      body,
      key,
      now_iso,
    );
    let r6 = json(answer2.status, answer2.body);
    return r6;
  } catch (e) {
    console.error(e);
    let r7 = json(500, {
      ok: false,
      reason: "error",
    });
    return r7;
  }
}
