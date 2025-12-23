export function html_code_script_module_generic(script_type, middle) {
  let v = `<script type="${script_type}"> 
    ${middle}
  </script>`;
  return v;
}
