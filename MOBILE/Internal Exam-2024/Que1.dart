import 'dart:io';

void main() {
  print('Enter first number:');
  int a = int.parse(stdin.readLineSync()!);

  print('Enter second number:');
  int b = int.parse(stdin.readLineSync()!);

  int gcdValue = gcd(a, b);
  print('GCD of $a and $b is $gcdValue');
}

int gcd(int a, int b) {
  if (b == 0) {
    return a;
  }
  return gcd(b, a % b);
}