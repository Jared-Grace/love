import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { each_object_async } from "../../../love/public/src/each_object_async.mjs";
import { kjv } from "../../../love/public/src/kjv.mjs";
export async function app_autopray_main() {
  let v = kjv();
  async function lambda2(verse_text, verse_reference) {
    let p = html_p_text(root, text);
  }
  await each_object_async(v, lambda2);
}
