export function song_image_commons_url(title, width) {
  "build a Wikimedia Commons image URL from a File: title with the File: prefix already stripped; Special:FilePath redirects to the real upload path, so the md5 folder hash never has to be known or stored";
  "THE COMMONS HALF IS KEPT ON PURPOSE and is not waiting to be deleted, which reverses what was written down for it earlier. The hymn's own pictures are drawn rather than found, so from that film's point of view this reads as a leftover - but a second cut of the same hymn for a Roman Catholic audience would want older paintings, and the ones out of copyright are on Commons already. So this is the fetch that cut would be built on. Anything that would remove it has to answer that first.";
  let encoded = encodeURIComponent(title);
  let url =
    "https://commons.wikimedia.org/wiki/Special:FilePath/" +
    encoded +
    "?width=" +
    width;
  return url;
}
