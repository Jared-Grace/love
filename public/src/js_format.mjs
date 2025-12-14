import { browser_is } from "../../../love/public/src/browser_is.mjs";
export async function js_format(code) {
  let prettier = null,
    parserBabel = null;
  if (browser_is()) {
    prettier = await import("https://esm.sh/prettier@3.2.5");
    parserBabel = await import("https://esm.sh/prettier@3.2.5/plugins/babel");
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
