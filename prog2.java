import java.io.*;
import java.util.Scanner;
class parent  
{
public void display(String value) 
{
System.out.print("\n The Value passed as parameter for Parent class is "+value );
 }
}
class child extends parent 
{
public void display1(String value) 
{
System.out.print("\n The Value passed as parameter for Child class is "+value );
 }
}
class prog2
{
public static void main(String args[])
 {
 child o1 = new child();
 String parent,child;
 Scanner scan = new Scanner(System.in);
 System.out.print("Enter Parent class input:");
 parent=scan.nextLine();
 System.out.print("Enter Child class input:");
 child=scan.nextLine();
 o1.display(parent);
 o1.display1(child);
}
}