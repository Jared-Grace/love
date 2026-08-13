export function firebase_storage_host() {
  "The name the file store answers to when a page or a script asks it for one file by name.";
  "Its sibling is the same storage reached through the cloud's own listing service, which is a different name for the same bytes and takes a different address shape - so the two are named apart rather than one being derived from the other.";
  let r = "firebasestorage.googleapis.com";
  return r;
}
