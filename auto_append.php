<?php
$output = ob_get_contents();
ob_end_clean();

#$output = str_replace('http://localhost:4001/', 'https://lab.npeu.ox.ac.uk/wireframes/', $output);
$output = str_replace('href="/',    'href="/wireframes/', $output);
$output = str_replace('src="/',     'src="/wireframes/', $output);
$output = str_replace('data="/',    'data="/wireframes/', $output);
$output = str_replace('name="msapplication-config" content="/', 'name="msapplication-config" content="/wireframes/', $output);

echo $output;
?>