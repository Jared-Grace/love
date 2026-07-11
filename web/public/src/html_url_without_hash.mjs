export function html_url_without_hash() {
  let url_full = new URL(window.location.href);
  url_full.hash = "";
  let url = url_full.toString();
  return url;
}
