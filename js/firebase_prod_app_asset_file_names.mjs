import { file_names_html_js } from "./file_names_html_js.mjs";
import { firebase_prod_file_names } from "./firebase_prod_file_names.mjs";
import { list_intersect } from "./list_intersect.mjs";
export async function firebase_prod_app_asset_file_names(app_name) {
  "the pieces a page actually ships with, which is not always both of them. taking the pair on faith made every page that carries no script of its own report one that was never uploaded, and a single such nothing was enough to end a whole report early. the served folder is asked instead, so a page is described by what is there rather than by what is usually there";
  let candidates = file_names_html_js(app_name);
  let present = await firebase_prod_file_names();
  let file_names = list_intersect(candidates, present);
  return file_names;
}
