import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function calendar_host_window(host) {
  arguments_assert(arguments, 1);
  ('How far ahead a guest may book this host: {notice_hours, days_ahead} - an hour must start at least notice_hours from now and less than days_ahead days from now. host is a hosts row, or the host the free route sends a guest; a host who never saved these (null, or missing from an older reply) gets 24 hours and 14 days, the window every host had before they could choose (human, 2026-11-22: "minimum hours from now for being able to choose a time").');
  function kept(value, starting) {
    let r = equal(value, null) || equal(value, undefined) ? starting : value;
    return r;
  }
  let r2 = {
    notice_hours: kept(host.notice_hours, 24),
    days_ahead: kept(host.days_ahead, 14),
  };
  return r2;
}
