import { marker } from "../../../love/public/src/marker.mjs";
export function html_url_without_hash() {
  marker("1");const url = new URL(window.location.href);
url.hash = "";
const urlWithoutHash = url.toString();
$r,urlWithoutHash
}
