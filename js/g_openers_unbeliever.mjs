export function g_openers_unbeliever() {
  "Everything the player may open with when approaching somebody who does not yet believe.";
  "It is a closed list so a generated turn can only be tagged with one of these, and so the tag itself says which belief state the person was in - a turn opened any of these ways belongs to an unbeliever.";
  let v = ["how are you", "what do you believe", "the gospel"];
  return v;
}
