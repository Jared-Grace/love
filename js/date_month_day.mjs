import { date_from_iso } from "./date_from_iso.mjs";
export function date_month_day(iso) {
  "a 'YYYY-MM-DD' date as a short 'Mon D' label in the browser's locale, e.g. 'Aug 3'";
  let d = date_from_iso(iso);
  let options = {
    month: "short",
    day: "numeric",
  };
  let label = d.toLocaleDateString("en-US", options);
  return label;
}
