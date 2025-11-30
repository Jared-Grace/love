import { marker } from "../../../love/public/src/marker.mjs";
export function localhost_is() {
  marker("1");
  let li =
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1" ||
    location.hostname === "::1";
  return li;
}
