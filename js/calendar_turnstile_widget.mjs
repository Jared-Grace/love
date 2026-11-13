import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { calendar_turnstile_site_key } from "./calendar_turnstile_site_key.mjs";
export async function calendar_turnstile_widget(parent) {
  arguments_assert(arguments, 1);
  ("Cloudflare's are-you-a-person box, drawn inside parent. Answers {token, reset}: token() is the proof to send with a booking, or empty text while the box is not yet passed; reset() asks for a fresh proof, since each one is spent by one booking.");
  ("Cloudflare's script is loaded once per page, the first time a box is wanted, and only on the page that books - nobody else's visit touches Cloudflare's checker.");
  let box = html_div(parent);
  let element = html_component_element_get(box);
  if (not(window.turnstile)) {
    await new Promise(function lambda(resolve, reject) {
      let script = document.createElement("script");
      script.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
  let proof = "";
  let id = window.turnstile.render(element, {
    sitekey: calendar_turnstile_site_key(),
    callback: function lambda2(t) {
      proof = t;
    },
    "expired-callback": function lambda3() {
      proof = "";
    },
  });
  let r = {
    token: function lambda4() {
      return proof;
    },
    reset: function lambda5() {
      proof = "";
      window.turnstile.reset(id);
    },
  };
  return r;
}
