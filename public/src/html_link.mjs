import { promise_new } from "../../../love/public/src/promise_new.mjs";
import { html_loading } from "../../../love/public/src/html_loading.mjs";
import { lambda_invoke } from "../../../love/public/src/lambda_invoke.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { html_element } from "../../../love/public/src/html_element.mjs";
import { html_document_head } from "../../../love/public/src/html_document_head.mjs";
export function html_link() {
  let head = html_document_head();
  let link = html_element(head, "link");
  link.onload = function lambda() {
    console.log("Stylesheet loaded!");
  };
  async function lambda3() {
    async function lambda4() {
      let result2 = await promise_new(
        async function lambda2(resolve, reject) {},
      );
    }
    let result = await html_loading(lambda4);
  }
  lambda_invoke(lambda3);
  return l;
}
