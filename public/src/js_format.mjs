import { browser_is } from "../../../love/public/src/browser_is.mjs";
export async function js_format(code) {
  let prettier = null,
    parserBabel = null;
  if (browser_is()) {
    let v = window.js_format_browser(code);
    return v;
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
