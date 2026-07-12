import webpack from "webpack";
export function webpack_config_node_scheme_strip_plugin() {
  function lambda(resource) {
    resource.request = resource.request.replace(/^node:/, "");
  }
  let plugin = new webpack.NormalModuleReplacementPlugin(/^node:/, lambda);
  return plugin;
}
