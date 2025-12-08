import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { html_remove } from "../../../love/public/src/html_remove.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function html_loading(lambda) {
  let b2 = browser_is();
  if (b2) {
    marker("1");
    let body = html_document_body();
    let div = null;
    div = html_div(body);
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
    html_style_assign(div, s);
  }
  let result = await lambda();
  html_remove(div);
  return result;
}
