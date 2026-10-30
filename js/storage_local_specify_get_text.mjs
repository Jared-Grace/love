export function storage_local_specify_get_text(storage_local_key) {
  "$plain storage_local_key";
  "The text this device's own storage holds under storage_local_key exactly as it was written, and nothing else: null when nothing is there. The reading partner of the writer that keeps text with nothing wrapped around it.";
  "Nothing is carried across from an old name here. A setting filed under an owner's old name is found by reading the old key through this, so this read must never go looking under yet another name.";
  let r = localStorage.getItem(storage_local_key);
  return r;
}
