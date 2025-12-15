import { browser_is } from "../../../love/public/src/browser_is.mjs";
export async function js_format(code) {
  let prettier = null,
    parserBabel = null;
  if (browser_is()) {
parserBabel=prettierPlugins.babel
  } else {
    prettier = await import("prettier");
    parserBabel = await import("prettier/plugins/babel");
  }
  const formatted = await prettier.format(code, {
    parser: "babel",
    plugins: [parserBabel],
    braceStyle: "allman",
  });

  prettier.format(messyCode, {
          parser: "babel",
          plugins: [prettierPlugins.babel] // ✅ works in v2.8.8
        })
  return formatted;
}
