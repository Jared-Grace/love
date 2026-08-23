export function web_assets_folder_name() {
  "The one top folder every file a browser fetches as an asset lives under, both in this repo and in storage.";
  "IT IS THE SAME WORD IN BOTH PLACES ON PURPOSE. A file's address in storage is its path under this folder here, character for character, so the two are read off each other rather than kept in step by hand. Spelled twice, the two drift the first time either moves, and the failure is a picture that quietly does not arrive rather than anything that goes red.";
  "The permission rules give this folder away to everybody by name (storage.rules), which is what makes an address under it fetchable with nobody signed in. A file placed OUTSIDE it uploads perfectly well and is then refused to every reader, one request at a time.";
  let folder_name = "web_assets";
  return folder_name;
}
