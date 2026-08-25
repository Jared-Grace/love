import { arguments_assert } from "./arguments_assert.mjs";
export function node_only_package_names() {
  "Installed libraries that only ever work on a build machine, so a page that carries one carries it in order never to run it.";
  "★ THIS ONE CANNOT BE DERIVED AND THE BUILT-IN LIST CAN. Node will say what it carries itself; nothing will say which of the installed libraries want a machine rather than a page, because that is a fact about each library and not about this repo. So it is written down, and being written down it is the half that goes short - a name missing from here is a hole nothing complains about.";
  "The server half of the database library is the reason the list exists. Three and a half megabytes of it were fetched while running, under a name, and the reading meant to catch that was looking only for Node's own disk and process modules - so nine pages carried it and every gate stayed green.";
  "A library with a real browser half must stay out of this, however server-shaped it looks. The code formatter is the standing example: it fetches its own parsers in a page and works there, so naming it here would report weight that is genuinely wanted.";
  arguments_assert(arguments, 0);
  let names = [
    "firebase-admin",
    "express",
    "playwright",
    "puppeteer",
    "webpack",
    "terser-webpack-plugin",
    "vite",
    "clipboardy",
  ];
  return names;
}
