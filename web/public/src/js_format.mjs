import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import parserBabel from "prettier/plugins/babel";
import prettier from "prettier";
export async function js_format(code) {
  marker("1");
  let pr = null,
    pb = null;
  let b = browser_is();
  if (b) {
    pr = "parser-babel";
    pb = "prettier/plugins/babel";
  } else {
    pr = prettier;
    pb = parserBabel;
  }
  const formatted = await pr.format(code, {
    parser: "babel",
    plugins: [pb],
    braceStyle: "allman",
  });
  return formatted;
}
