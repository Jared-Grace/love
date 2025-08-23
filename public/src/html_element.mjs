export function html_element(parent, tag_name) {
  const e = document.createElement(tag_name);
  parent.appendChild(e);
  let v = {
    element: e,
  };
  return v;
}
