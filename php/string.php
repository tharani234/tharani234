<!DOCTYPE html>
<html>
<title>String</title>
<body>
<?php
$ln_str = 'Display the string length';
$count_str = 'counts the number of words in a string.';
$reverse_str = 'An empty vessel makes much noise';
$replace_str = 'For a complete list of useful string functions';
 
echo strlen($ln_str);
echo "<br>";
echo str_word_count($count_str);
echo "<br>";
echo strrev($reverse_str);
echo "<br>";
echo strpos("All string functions", "string");
echo "<br>";
echo str_replace("functions", "methods", $replace_str);
?>
</body>
</html>
