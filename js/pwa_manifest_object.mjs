import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function pwa_manifest_object(name) {
  let start_url = text_combine_multiple(["/", name, ".html"]);
  let icon_192 = {
    src: text_combine_multiple(["/", name, "-192.png"]),
    sizes: "192x192",
    type: "image/png",
    purpose: "any",
  };
  let icon_512 = {
    src: text_combine_multiple(["/", name, "-512.png"]),
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
    icons: [icon_192, icon_512],
  };
  return r;
}
