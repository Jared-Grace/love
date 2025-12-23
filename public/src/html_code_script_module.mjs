export function html_code_script_module(middle) {
  let v = `<script type="${"module"}"> 
    ${middle}
  </script>`;
  return v;
}
