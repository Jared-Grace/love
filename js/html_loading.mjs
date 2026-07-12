import { browser_is } from "./browser_is.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_div } from "./html_div.mjs";
import { html_document_body } from "./html_document_body.mjs";
export async function html_loading(lambda) {
  let div = null;
  let b = browser_is();
  if (b) {
    let body = html_document_body();
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
  let result = null;
  try {
    result = await lambda();
  } catch (e) {
    throw e;
  } finally {
    if (b) {
      html_remove(div);
    }
  }
  return result;
}
