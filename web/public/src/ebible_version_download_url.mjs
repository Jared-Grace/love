export function ebible_version_download_url(bible_folder, name) {
  let v = "https://ebible.org/Scriptures/" + bible_folder + "_" + name + ".zip";
  return v;
}
