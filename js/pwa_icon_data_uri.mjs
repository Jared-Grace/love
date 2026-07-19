import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function pwa_icon_data_uri(emoji) {
  let svg = text_combine_multiple([
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>",
    "<rect width='100' height='100' fill='white'/>",
    "<text y='.9em' font-size='90'>",
    emoji,
    "</text></svg>",
  ]);
  let r = text_combine_multiple(["data:image/svg+xml,", svg]);
  return r;
}
