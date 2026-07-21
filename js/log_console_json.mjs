import { json_format_to } from "./json_format_to.mjs";
export function log_console_json(value) {
  "logs a result as JSON rather than console.log's util.inspect, which silently abbreviates — [Object] past depth 2, '... N more items' past 100 — leaving a reader unable to tell elision from data";
  try {
    let json = json_format_to(value);
    console.log(json);
  } catch (e) {
    ("circular references, BigInt: unrepresentable in JSON, so fall back rather than lose a result the work already produced");
    console.log(value);
  }
}
