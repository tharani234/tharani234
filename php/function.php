<!DOCTYPE html>
<html>
<body>
<?php
function task() 
{
  echo "php";
}
task();
echo "<br>";
function blood($gname)
{
  echo "anu $gname positive";
}
blood("O");
echo "<br>";
function calculate(int $x, int $y) 
{
  return $x % $y;
}
echo calculate(29,"6types"); 
echo "<br>";
function setplace(string $place = "chennai")
{
  echo "I'm coming from: $place <br>";
}
setplace("madurai");
setplace();
function addNumbers(int $a, int $b) : int
{
  return $a%$b;
}
echo addNumbers(8,3); 
?>
</body>
</html>
