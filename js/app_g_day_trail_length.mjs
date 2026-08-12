export function app_g_day_trail_length() {
  "how many tiles behind the player are remembered as the way the line walks.";
  "It has to be at least as long as the line can ever get, because the person at the back of the line stands on the oldest tile of it. Past that the extra tiles are never asked for, so this is a ceiling on a walk of any length rather than a measurement of anything.";
  let r = 12;
  return r;
}
