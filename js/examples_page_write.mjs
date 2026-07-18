import { examples_corpus_read } from "./examples_corpus_read.mjs";
import { examples_page_html } from "./examples_page_html.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { html_name_to_path } from "./html_name_to_path.mjs";
import { html_name_to_path_dev } from "./html_name_to_path_dev.mjs";
export async function examples_page_write() {
  let examples = await examples_corpus_read();
  let html = examples_page_html(examples);
  let out = html_name_to_path("examples");
  let out_dev = html_name_to_path_dev("examples");
  await file_overwrite(out, html);
  await file_overwrite(out_dev, html);
  return out;
}
