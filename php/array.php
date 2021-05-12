<!DOCTYPE html>
<html>
<title>Array</title>
<body>
<?php
echo "<h3> Indexed array </h3>";
$name[0] = "Anu";
$name[1] = "Hema";
$name[2] = "Indhu";
echo $name[1];
echo "<br>";
echo "<h3> Associative array </h3>";
$mark = array("8565"=>"87","8566"=>"93","8567"=>"89");
echo "Roll number 8566 mark is:".$mark['8566'];
echo "<br>";
echo "<h3> Multidimensional array </h3>";
$detail = array(array("Tharani",21,"pattukkottai"),array("Anu",22,"chennai"));
echo "Name:".$detail[0][0].",Age:".$detail[0][1].",Place:".$detail[0][2];
echo "<br>";
echo "Name:".$detail[1][0].",Age:".$detail[1][1].",Place:".$detail[1][2];
?>
</body>
</html>
