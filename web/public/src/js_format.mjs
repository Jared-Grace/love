import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import parserBabel from "prettier/plugins/babel";
import prettier from "prettier";
export async function js_format(code) {
  marker("1");
  let pr = null,
    parserBabel = null;
  let plugins = null;
  let b = browser_is();
  if (b) {
    let pe = await import("parserEstree");
    parserBabel = await import("parserBabel");
    pr = await import("prettier");
    plugins = [parserBabel, pe];
  } else {
    pr = prettier;
    parserBabel = await import("prettier/plugins/babel");
    plugins = [parserBabel];
  }
  const formatted = await pr.format(code, {
    parser: "babel",
    plugins: plugins,
    braceStyle: "allman",
  });
  return formatted;
}
