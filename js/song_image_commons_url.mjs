export function song_image_commons_url(title, width) {
  "build a Wikimedia Commons image URL from a File: title with the File: prefix already stripped; Special:FilePath redirects to the real upload path, so the md5 folder hash never has to be known or stored";
  let encoded = encodeURIComponent(title);
  let url =
    "https://commons.wikimedia.org/wiki/Special:FilePath/" +
    encoded +
    "?width=" +
    width;
  return url;
}
