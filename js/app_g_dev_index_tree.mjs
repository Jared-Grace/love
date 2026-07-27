export function app_g_dev_index_tree(names, prefixes) {
  "build the #index drill-down TREE from dev-route names + their category prefixes (app_g_dev_index_prefixes): split each route's full path (prefix + name) on ': ' into segments and nest them, so 'conversation: unbeliever: gospel_share' becomes conversation → unbeliever → gospel_share. each node carries `hash` (the route to open when a route ends exactly here, else null) and `children` (a map of sub-label → node). a name that is BOTH a route and a category (e.g. unbeliever) carries a hash AND has children. PURE + testable — the DOM renderer (app_g_dev_index) walks this. BESPOKE (objects / loops) — do NOT auto-canonicalize";
  let root = {
    hash: null,
    children: {},
  };
  for (let name of names) {
    let prefix = prefixes[name] || "";
    let full = prefix + name;
    let segments = full.split(": ");
    let node = root;
    for (let seg of segments) {
      let existing = node.children[seg];
      if (!existing) {
        existing = {
          hash: null,
          children: {},
        };
        node.children[seg] = existing;
      }
      node = existing;
    }
    node.hash = name;
  }
  return root;
}
