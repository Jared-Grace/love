import { json_to } from "./json_to.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function calendar_worker_test_check_firebase() {
  arguments_assert(arguments, 0);
  ("Sends a junk Firebase ticket to the calendar Worker's test address. The Worker fetches Google's real public keys before checking, so 401 token proves that fetch and the check run on Cloudflare; a 500 would mean they broke.");
  let answer = await fetch(
    "https://calendar.christarose.workers.dev/calendar/api/login_firebase",
    {
      method: "POST",
      body: json_to({
        id_token: "not.a.ticket",
      }),
    },
  );
  let read = await answer.json();
  let r = answer.status + " " + read.reason;
  return r;
}
