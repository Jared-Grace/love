import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_db_session_create } from "./calendar_db_session_create.mjs";
export async function calendar_facebook_login(request, env) {
  arguments_assert(arguments, 2);
  ("Host sign-in with Facebook at /calendar/login/facebook. Without a code it sends the browser to Facebook's dialog, holding a random state in a short cookie; Facebook sends the browser back here with a code, which is traded for a token, and the token for the person's Facebook id. The id becomes the session's uid as fb_<id>, and the browser lands on /calendar#key=<key> — after #, so the key never reaches a server log.");
  ("★ ONLY THE ID IS ASKED FOR, never the name: a host's display name is not stored in the cloud by sign-in. The host types the name they want shown.");
  ("The return address is built from the address asked, so a test address works once it is also listed in the Meta app's Valid OAuth Redirect URIs.");
  let url = new URL(request.url);
  let back = url.origin + url.pathname;
  let cookie_name = "calendar_fb_state";
  let page = function lambda(text, status) {
    let r = new Response(text, {
      status,
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "cache-control": "no-store",
      },
    });
    return r;
  };
  let code = url.searchParams.get("code");
  if (equal(code, null)) {
    if (url.searchParams.has("error")) {
      let r2 = page("Facebook sign-in was cancelled.", 400);
      return r2;
    }
    let state = crypto.randomUUID();
    let dialog = new URL("https://www.facebook.com/dialog/oauth");
    dialog.searchParams.set("client_id", env.FACEBOOK_APP_ID);
    dialog.searchParams.set("redirect_uri", back);
    dialog.searchParams.set("state", state);
    dialog.searchParams.set("scope", "public_profile");
    let r3 = new Response(null, {
      status: 302,
      headers: {
        location: dialog.toString(),
        "set-cookie":
          cookie_name +
          "=" +
          state +
          "; Path=/calendar/login; HttpOnly; Secure; SameSite=Lax; Max-Age=600",
        "cache-control": "no-store",
      },
    });
    return r3;
  }
  let cookies = request.headers.get("Cookie") ?? "";
  function lambda2(part) {
    let r8 = part.trim();
    return r8;
  }
  function lambda3(part) {
    let r9 = part.startsWith(cookie_name + "=");
    return r9;
  }
  let held = cookies.split(";").map(lambda2).find(lambda3);
  let state2 = url.searchParams.get("state");
  if (
    equal(held, undefined) ||
    equal(state2, null) ||
    not_equal(held, cookie_name + "=" + state2)
  ) {
    let r4 = page("Sign-in expired. Please try again.", 400);
    return r4;
  }
  let trade = new URL("https://graph.facebook.com/oauth/access_token");
  trade.searchParams.set("client_id", env.FACEBOOK_APP_ID);
  trade.searchParams.set("client_secret", env.FACEBOOK_APP_SECRET);
  trade.searchParams.set("redirect_uri", back);
  trade.searchParams.set("code", code);
  let traded = await (await fetch(trade)).json();
  if (not_equal(typeof traded.access_token, "string")) {
    let r5 = page("Facebook did not accept the sign-in.", 502);
    return r5;
  }
  let me_url = new URL("https://graph.facebook.com/me");
  me_url.searchParams.set("fields", "id");
  me_url.searchParams.set("access_token", traded.access_token);
  let me = await (await fetch(me_url)).json();
  if (not_equal(typeof me.id, "string") || not(/^[0-9]+$/.test(me.id))) {
    let r6 = page("Facebook did not say who signed in.", 502);
    return r6;
  }
  let now_iso = new Date().toISOString();
  let key = await calendar_db_session_create(env.DB, "fb_" + me.id, now_iso);
  let r7 = new Response(null, {
    status: 302,
    headers: {
      location: url.origin + "/calendar#key=" + key,
      "set-cookie":
        cookie_name +
        "=; Path=/calendar/login; HttpOnly; Secure; SameSite=Lax; Max-Age=0",
      "cache-control": "no-store",
    },
  });
  return r7;
}
