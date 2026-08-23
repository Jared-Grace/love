import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { web_assets_img_url } from "./web_assets_img_url.mjs";
export function g_img_game_url(path) {
  "$plain path";
  "Where a browser fetches one piece of the game's art, given where it sits under the game's own picture folder.";
  "IT ANSWERS THE WHOLE ADDRESS AND NEVER THE FRONT OF ONE. Three functions here used to hand back a front to stick the rest on, and that only worked while the pictures sat beside the page; storage spells the slashes in an address differently, so a front with the rest stuck on it names a file that is not there. Handing back the finished address is what makes that impossible to write.";
  "It also settled a second fault for free: the front had to say how deep the page was sitting, got that wrong on a phone reaching the page by the machine's name, and asked for every sprite one folder too deep. An address that starts at storage is the same address from anywhere.";
  let folder_name = "game";
  let combined = list_join_slash_forward([folder_name, path]);
  let url = web_assets_img_url(combined);
  return url;
}
