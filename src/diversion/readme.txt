Think of binary numbers: sequences of 0's and 1's.
How many n-digit binary numbers are there that don't have two adjacent 1 bits?

For example, for three-digit numbers, Five of the possible eight combinations meet the criteria:

   000, 001, 010, 011, 100, 101, 110, 111.

What is the number for sequences of length 4, 5, 10, n?

Having worked out the pattern, there's a second part to the question: can you prove why that relationship exists?

(Source http://codekata.pragprog.com, Code Kata Fifteen -- A Diversion)

MY Notes:

digits   results
0        --- => 0
1        0, 1 => 2
2        00, 01, 10, 11 => 3
3        000, 001, 010, 011, 100, 101, 110, 111 => 5
4        0000, 0001, 0010, 0011, 0100, 0101, 0110, 0111, 1000, 1001, 1010, 1011, 1100, 1101, 1110, 1111 => 8
5        00000, 00001, 00010, 00011, 00100, 00101, 00110, 00111, 01000, 01001, 01010, 01011, 01100, 01101, 01110, 01111,
         10000, 10001, 10010, 10011, 10100, 10101, 10110, 10111, 11000, 11001, 11010, 11011, 11100, 11101, 11110, 11111   
         => 13
Hmmm this is looking close to a Fibonacci series 0,1,1,2,3,5,8,13,21,34,55
