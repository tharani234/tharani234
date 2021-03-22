import java.io.*;
import java.util.Scanner;
class prog1
{
public static void main(String args[])
{
subClass obj=new subClass();
obj.add();
obj.display();
}
}
class subClass
{
 int a,b;
public void add()
{
 
Scanner in=new Scanner(System.in);
System.out.print("Enter the value of a:");
a=in.nextInt();
System.out.println("Enter the value of b:");
b=in.nextInt();
}
public void display() 
{
 System.out.println("The value of a is "+a);
 System.out.println("The value of b is "+b);
 System.out.println("The Addition of a and b is "+(a+b));
}
}
