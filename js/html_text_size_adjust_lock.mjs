import { html_style_head } from "./html_style_head.mjs";
export function html_text_size_adjust_lock() {
  "inject a global rule pinning the browser's automatic text sizing to 100% on the document root, so mobile Firefox renders the same explicit px / em sizes as Chrome instead of INFLATING the text (its font-inflation for 'readability', which enlarges the type and throws the intended layout off). a real stylesheet rule rather than an inline style, so each engine spelling applies where supported and is ignored where not: standard text-size-adjust (current Firefox), the -webkit- form (Chrome / Safari), the -moz- form (older Firefox Android). 100% means keep the authored size — behavior-preserving for engines that never inflate.";
  let css =
    "html { -webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; }";
  html_style_head(css);
}
