import { g_arc_write_upload_path } from "./g_arc_write_upload_path.mjs";
import { g_arc_write } from "./g_arc_write.mjs";
import { g_generate_upload_generic } from "./g_generate_upload_generic.mjs";
export async function g_arc_write_upload() {
  "Sends every chapter of written arcs up to storage, which is what puts them where the content backup can find them and where a played game can read them.";
  "UNSAFE TO RE-RUN WITH A HALF-WRITTEN CHAPTER IN IT, in the same way the sermon upload is. An arc is written by a model and then edited by hand, so what is on this machine is the newest version and sending it over the top is right - but a chapter still being edited goes up mid-edit, and there is nothing on the far end to say so.";
  let path_get = g_arc_write_upload_path;
  let fn = g_arc_write;
  await g_generate_upload_generic(fn, path_get);
}
