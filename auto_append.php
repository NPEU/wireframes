<?php
$output = ob_get_contents();
ob_end_clean();

$output = str_replace('http://localhost:4001/', 'https://lab.npeu.ox.ac.uk/wireframe/', $output);

echo $output;
?>