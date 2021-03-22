import java.io.*;
class language
{
public void displayInfo()
{
System.out.print("common englinsh language");
}
}
class java extends language
{
@Override
public void displayInfo()
 {
 System.out.print("\n java programming language");
 }
}
class prog3
{
 public static void main(String args[])
 {
java J1=new java();
J1.displayInfo();
language l1=new language();
l1.displayInfo();
}
}