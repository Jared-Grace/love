import { text_frozen } from "./text_frozen.mjs";
export function dev_trace_storage_key() {
  "Where a /dev/ page keeps its trace on the device. Frozen because it sits in a phone's storage: renaming code must not orphan what is already written there.";
  let key = text_frozen("dev_trace");
  return key;
}
