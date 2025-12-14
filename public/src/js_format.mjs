export async function js_format(code) {let prettierModule, babelPlugin;
  if (browser_is()) {
     prettier = await import("https://esm.sh/prettier@3.2.5");
     parserBabel = await import(
      "https://esm.sh/prettier@3.2.5/plugins/babel"
    );
  } else {
    // Node.js fallback (optional)
    prettierModule = await import("prettier");
    babelPlugin = await import("prettier/plugins/babel");
  }
  const formatted = await prettier.format(code, {
    parser: "babel",
    plugins: [parserBabel],
    braceStyle: "allman",
  });
  return formatted;
}
