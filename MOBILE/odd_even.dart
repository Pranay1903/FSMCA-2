import 'dart:io';

main()
{
    print("Enter A Number:");
    int no = int.parse(stdin.readLineSync()!);
    print("You entered: $no");

    if(no % 2==0) {
      print("$no is even");
    } else {
      print("$no is odd");
    }
}
