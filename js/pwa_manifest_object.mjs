import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { pwa_icon_data_uri } from "./pwa_icon_data_uri.mjs";
export function pwa_manifest_object(name) {
  let start_url = text_combine_multiple(["/", name, ".html"]);
  let icon = {
    src: pwa_icon_data_uri("🙏"),
    sizes: "any",
    type: "image/svg+xml",
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
    icons: [icon],
  };
  return r;
}
