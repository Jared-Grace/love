import { arguments_assert } from "./arguments_assert.mjs";
export function calendar_privacy_html(contact) {
  arguments_assert(arguments, 1);
  ("The privacy page Facebook asks for before strangers may sign in: what is kept, why, who sees it, and how to delete it — in plain words.");
  ("`contact` is the public way to reach the owner (an email or a Facebook page); it is the human's choice, so it is handed in, never written here.");
  let lines = [
    "<h1>Calendar: privacy</h1>",
    "<p>This calendar lets people book a call with each other.</p>",
    "<h2>What we keep</h2>",
    "<ul><li>Your Facebook id and name.</li><li>Your WhatsApp number.</li><li>Your time zone.</li><li>The meetings you book or host.</li><li>If you host: your free hours.</li></ul>",
    "<h2>Why</h2>",
    "<p>Only to book calls and remind people of them.</p>",
    "<h2>Who sees it</h2>",
    "<p>When you book a call, you and the other person see each other's name, WhatsApp number and time zone. No one else does.</p>",
    "<p>We never sell it. We show no ads.</p>",
    "<h2>Where it is kept</h2>",
    "<p>On Cloudflare's servers.</p>",
    "<h2>Delete your data</h2>",
    '<p>Sign in and press "Delete my data". Everything about you is removed at once, including your meetings.</p>',
    "<p>Or ask us: " + contact + ".</p>",
  ];
  let r = lines.join("\n");
  return r;
}
