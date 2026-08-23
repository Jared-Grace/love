import { html_extension } from "./html_extension.mjs";
import { pwa_icon_name } from "./pwa_icon_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { web_assets_app_img_url } from "./web_assets_app_img_url.mjs";
export function pwa_manifest_object(name) {
  "$plain name";
  "Everything a browser is told about an app before it will offer to install it.";
  "The icons are given as whole addresses into storage rather than as names beside the page, because that is where they are kept. A manifest may point anywhere; what it may not do is point at a file that is not there.";
  let ext_h = html_extension();
  let start_url = text_combine_multiple(["/", name, ext_h]);
  let name_192 = pwa_icon_name(name, 192);
  let name_512 = pwa_icon_name(name, 512);
  let icon_ = {
    src: web_assets_app_img_url(name, name_192),
    sizes: "192x192",
    type: "image/png",
    purpose: "any",
  };
  let icon_512 = {
    src: web_assets_app_img_url(name, name_512),
    sizes: "512x512",
    type: "image/png",
    purpose: "any maskable",
  };
  let r = {
    name,
    short_name: name,
    start_url,
    scope: start_url,
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [icon_, icon_512],
  };
  return r;
}
