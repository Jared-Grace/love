export function storage_local_specify_set_text(storage_local_key, text) {
  "$plain storage_local_key";
  "$plain text";
  "Keeps text under storage_local_key in the device's own storage exactly as it is given, with nothing wrapped around it. The other whole-key writer wraps what it keeps in an object, and a reader of a key written before that wrapping existed reads the text as it was written.";
  localStorage.setItem(storage_local_key, text);
}
