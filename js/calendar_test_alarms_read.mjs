import { not } from "./not.mjs";
import { error_json } from "./error_json.mjs";
import { http_json } from "./http_json.mjs";
export async function calendar_test_alarms_read(slug) {
  "$plain slug";
  "What the TEST calendar server's alarm feed answers for the host whose booking link is slug - the same answer the phone Alarm app reads when its address points at the test server.";
  "The site and the route are fixed here and the host word is the only thing a caller chooses, so it can hold a grant once where a curl would have to be read afresh every time. Anything but letters, digits, _ and - is refused before any request leaves.";
  let slug_is = /^[A-Za-z0-9_-]{1,64}$/.test(slug);
  if (not(slug_is)) {
    error_json({
      slug,
      hint: "a host word is letters, digits, _ and -",
    });
  }
  let url =
    "https://calendar.christarose.workers.dev/calendar/api/alarms?host=" + slug;
  let answer = await http_json(url, {});
  return answer;
}
