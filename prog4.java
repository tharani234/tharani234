import java.io.*;
import java.util.Scanner;
class prog4
{
  public static void main(String args[])
  {
   overl obj=new overl();
    int in,a,b,c;
    double d,e;
   System.out.println("Choose any one from the below options:");
   System.out.println("1.Add two integers");
   System.out.println("2.Add three integers");
   System.out.println("3.Add two decimal values");
  Scanner scan=new Scanner(System.in);
    in=scan.nextInt();
    switch(in) 
	{
    case 1:
     System.out.println("Enter the value of two numbers:");
     a=scan.nextInt();
     b=scan.nextInt();
        obj.add(a,b);
        break;
    case 2:
     System.out.println("Enter the value of three numbers:");
     a=scan.nextInt();
     b=scan.nextInt();
     c=scan.nextInt();
        obj.add(a,b,c);
        break;
    case 3:
     System.out.println("Enter the value of two decimal numbers:");
     d=scan.nextDouble();
     e=scan.nextDouble();
        obj.add(d,e);
        break;
        default:
         System.out.print("Invalid Value");
         break;
    }
  }
}