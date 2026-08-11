import { file_name_app_is } from "./file_name_app_is.mjs";
import { firebase_prod_file_names } from "./firebase_prod_file_names.mjs";
import { list_filter } from "./list_filter.mjs";
export async function firebase_prod_app_asset_file_names(app_name) {
  "the pieces a page actually ships with, which is not always both of the two it is written as. taking the pair on faith made every page that carries no script of its own report one that was never uploaded, and a single such nothing was enough to end a whole report early. the served folder is asked instead, so a page is described by what is there rather than by what is usually there";
  "The pair is also not the most a page can ship. A build is free to cut a piece of an app out into a script of its own, and one of those is as much a piece of the page as the script it came out of - so a check that this page has not moved has to cover it too, or the one file that can change unwatched is the one nobody named.";
  let present = await firebase_prod_file_names();
  function app_lambda(file_name) {
    let mine = file_name_app_is(file_name, app_name);
    return mine;
  }
  let file_names = list_filter(present, app_lambda);
  return file_names;
}
