<!DOCTYPE html>
<html>
<title>local</title>
<body>
<?php
$b = 5; 
 function values() {
  $a=20;
echo "<p> a  value is: $a</p>";
} 
values();
echo "<p> b value is: $b</p>";
?>
</body>
</html>

//global



<!DOCTYPE html>
<html>
<title>global</title>
<body>
<?php
$x = 56;
$y = 17;
function glb()
{
  $GLOBALS['z'] = $GLOBALS['x'] + $GLOBALS['y'];
} 
glb();
echo $z;
?>
</body>
</html>


//static



<!DOCTYPE html>
<html>
<title>static</title>
<body>
<?php
function add() {
  static $x = 67;
  echo $x;
  $x++;
}
add();
echo "<br>";
add();
echo "<br>";
add();
?> 
</body>
</html>
