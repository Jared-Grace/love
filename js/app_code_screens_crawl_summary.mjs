import { property_greater_than } from "./property_greater_than.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_screens_crawl_summary(records, errors) {
  "the compact, deterministic verdict from a crawl: how many screens were seen, and the mechanical failures worth acting on - screens with horizontal overflow, blank screens, and any javascript errors. Kept small on purpose so the seam prints an actionable summary rather than every screen's text";
  function overflows(record) {
    let bad = property_greater_than(record, "overflow", 0);
    return bad;
  }
  function is_empty(record) {
    let empty = property_get(record, "empty");
    return empty;
  }
  function label(record) {
    let id = property_get(record, "id");
    let screen = property_get(record, "screen");
    let kind = property_get(record, "kind");
    let overflow = property_get(record, "overflow");
    let item = {
      id,
      screen,
      kind,
      overflow,
    };
    return item;
  }
  let overflow_records = list_filter(records, overflows);
  let overflow_failures = list_map(overflow_records, label);
  let empty_records = list_filter(records, is_empty);
  let empty_failures = list_map(empty_records, label);
  let screens = list_size(records);
  let summary = {
    screens,
    overflow_failures,
    empty_failures,
    errors,
  };
  return summary;
}
