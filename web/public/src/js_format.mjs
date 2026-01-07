import { marker } from "../../../love/public/src/marker.mjs";
export async function js_format(code) {
  marker("1");
  let prettier = null,
    parserBabel = null;
  prettier = await import("prettier");$s
  const babel = "prettier/plugins/babel";
  parserBabel = await import(babel);
  const formatted = await prettier.format(code, {
    parser: "babel",
    plugins: [parserBabel],
    braceStyle: "allman",
  });
  return formatted;
}
