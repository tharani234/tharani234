import java.io.*;
class Salary
{
  int id;
  String name;
}
class prog5
{
  public static void  main(String args[])
  {
   Salary s1=new Salary();
   Salary s2=new Salary();
    s1.id=10000;
    s1.name="anu";
    s2.id=20000;
    s2.name="priya";
   System.out.println(s1.id+" "+s1.name);
   System.out.println(s2.id+" "+s2.name);
  }
}