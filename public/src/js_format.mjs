import { marker } from "../../../love/public/src/marker.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
export async function js_format(code) {
  marker("1");
  let prettier = null,
    parserBabel = null;
  if (browser_is()) {
    prettier = window.prettier;
    parserBabel = prettierPlugins.babel;
  } else {
    prettier = await import("prettier");
    parserBabel = await import("prettier/plugins/babel");
  }
  const formatted = await prettier.format(code, {
    parser: "babel",
    plugins: [parserBabel],
    braceStyle: "allman",
  });
  return formatted;
}
