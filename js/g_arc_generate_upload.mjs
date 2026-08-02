import { g_arc_generate_upload_path } from "./g_arc_generate_upload_path.mjs";
import { g_arc_generate } from "./g_arc_generate.mjs";
import { g_generate_upload_generic } from "./g_generate_upload_generic.mjs";
export async function g_arc_generate_upload() {
  "Sends every chapter's written arc lengths up to storage, which is what puts them where the content backup can find them.";
  "Unlike the sermon upload this is safe to re-run. A sermon in storage may have been edited by hand since it was generated, so sending a fresh one over the top destroys work; arc lengths are nobody's handwriting, so the newest is always the right one.";
  let path_get = g_arc_generate_upload_path;
  let fn = g_arc_generate;
  await g_generate_upload_generic(fn, path_get);
}
