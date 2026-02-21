export function html_url_without_hash() {
  const url_full = new URL(window.location.href);
  url_full.hash = "";
  const url = url_full.toString();
  return url;
}
