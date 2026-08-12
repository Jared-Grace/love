export function app_g_dev_index_prefixes() {
  "the CATEGORY prefix for each dev route that belongs in a #index drill-down group — keyed by route name, value = its `a: b: ` path (segments joined by ': ', trailing ': '). the single source app_g_dev_index_tree nests by; a route with NO entry here sits at the top level. extend this to file more routes under categories. BESPOKE (object literal) — do NOT auto-canonicalize";
  let conversation = "conversation: ";
  let unbeliever = "conversation: unbeliever: ";
  let day = "day: ";
  let prefixes = {
    unbeliever: conversation,
    quick: unbeliever,
    gospel_share: unbeliever,
    hru: unbeliever,
    believe: unbeliever,
    pray: unbeliever,
    day_unbelievers: day,
    day_baptisms_collect: day,
    day_conversation: day,
    day_parts: day,
    day_hours: day,
  };
  return prefixes;
}
