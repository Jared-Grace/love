export function html_code_script_module(middle) {
  const script_type = "module";
  let code = `<script type="${script_type}"> 
    ${middle}
  </script>`;
  return code;
}
