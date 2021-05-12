<!DOCTYPE html>
<html>
<body>

<?php 
$x = "Instagram";
$y = "Facebook";
$a = 7895;
$b = 76.32;
$var=10;
$vehicles = array("Bus","Car","Bike");

echo $x;
echo "<br>"; 
echo $y;
echo "<br>";
echo $z=$x.$y."<br>";
var_dump($a);
echo "<br>";
var_dump($b);
echo "<br>"; 
var_dump($var>10);
echo "<br>"; 
var_dump($var==true);
echo "<br>"; 
var_dump($vehicles);
echo "<br>"; 
   class data{
public $str = "Samsung";
function show_data()
{
return $this->str;
}
  }
$mobile = new data;
var_dump($mobile);
?>

</body>
</html>
