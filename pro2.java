import java.io.*;
class parent
{
	public void display()
	{
		System.out.print("\n This is the parent class");
	}
}
class child extends parent
{
	public void display1()
	{
		System.out.print("\n This is the child class");
	}
}
class pro2
{
	public static void main (String args[])
	{
	parent o=new parent();
	child o1=new child();
	o.display();
	o1.display1();
}
}
