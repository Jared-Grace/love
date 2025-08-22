import prettier from "prettier";
import parserBabel from "prettier/plugins/babel";
export async function js_format(code) {
  if (false) {
    const prettier = await import("https://esm.sh/prettier@3.2.5");
    const parserBabel = await import(
      "https://esm.sh/prettier@3.2.5/plugins/babel"
    );
  }
  const formatted = await prettier.format(code, {
    parser: "babel",
    plugins: [parserBabel],
    braceStyle: "allman",
  });
  return formatted;
}
