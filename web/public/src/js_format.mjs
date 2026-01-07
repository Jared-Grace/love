import { marker } from "../../../love/public/src/marker.mjs";
export async function js_format(code) {
  marker("1");
  let prettier = null,
    parserBabel = null;
  prettier = await import("prettier");
  parserBabel = await import("prettier/plugins/babel");
  const formatted = await prettier.format(code, {
    parser: "babel",
    plugins: [parserBabel],
    braceStyle: "allman",
  });
  return formatted;
  let babel = null;
  babel = "prettier/plugins/babel";
}
