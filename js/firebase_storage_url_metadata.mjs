export function firebase_storage_url_metadata(storage_path, project_url) {
  "Where storage answers about a file rather than with it - what it weighs, when it was written, and which writing this is.";
  "It is the address of the file itself, and asking for the contents is that same address with one thing added, so this is the shorter of the two and the other is built on it.";
  let replaced = text_replace(storage_path, "/", "%2F");
  let url = text_combine_multiple([
    "https://firebasestorage.googleapis.com/v0/b/",
    project_url,
    "/o/",
    replaced,
  ]);
  return url;
}
