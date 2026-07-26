export function date_now_milliseconds() {
  "A plain count of milliseconds, for measuring how long something took. Two of";
  "these subtracted is a duration; one on its own means nothing to a reader.";
  let now = Date.now();
  return now;
}
