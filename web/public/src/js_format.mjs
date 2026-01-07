import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function js_format(code) {
  marker("1");
  let prettier = null,
    parserBabel = null;
  prettier = await import("prettier");
  let babel = null;
  let b = browser_is();
  if (b) {
    babel = "parser-babel";
  } else {
    babel = "prettier/plugins/babel";
  }
  parserBabel = await import(babel);
  const formatted = await prettier.format(code, {
    parser: "babel",
    plugins: [parserBabel],
    braceStyle: "allman",
  });
  return formatted;
}
