import { html_style_merge } from "./html_style_merge.mjs";
import { html_div } from "./html_div.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { marker } from "./marker.mjs";
export function html_loading() {
  marker("1");
  let body = html_document_body();
  let div = html_div(body);
  let s = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "1000",
  };
  html_style_merge(div, s);
}
