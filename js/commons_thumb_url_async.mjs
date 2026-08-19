import { catch_null_async } from "./catch_null_async.mjs";
export async function commons_thumb_url_async(title, width) {
  "the address Wikimedia Commons serves a scaled copy of a named picture from, asked for over its own interface, or null when it will not say; the round trip is worth making because that address sits on the upload host, which grants a page permission to read the pixels back, whereas the Special:FilePath shortcut only redirects there and the permission is lost on the way";
  async function get() {
    let query = new URLSearchParams({
      action: "query",
      format: "json",
      origin: "*",
      prop: "imageinfo",
      iiprop: "url",
      iiurlwidth: String(width),
      titles: "File:" + title,
    });
    let address = "https://commons.wikimedia.org/w/api.php?" + query;
    let response = await fetch(address);
    let body = await response.json();
    let pages = body.query.pages;
    let keys = Object.keys(pages);
    let page = pages[keys[0]];
    let url = page.imageinfo[0].thumburl;
    return url;
  }
  let r = await catch_null_async(get);
  return r;
}
