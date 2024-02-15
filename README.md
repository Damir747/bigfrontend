https://bigfrontend.dev/problem

148. create a counter object
JavaScript
Share

easy  2975 accepted / 7211 tried

Create an object with property count, which increments every time count is accessed, initial value is 0.

const counter = createCounter()
counter.count // 0, then it should increment
counter.count // 1
counter.count // 2
counter.count = 100 // it cannot be altered
counter.count // 3

155. create a count function
JavaScript
Share

easy  3299 accepted / 9052 tried

Well done!You have solved it!

Please create a function count(), when called it should return how many times it has been called, count.reset() should also implemented.

count() // 1
count() // 2
count() // 3

count.reset()

count() // 1
count() // 2
count() // 3

163. integer to roman numerals
JavaScript
Algorithm
Share

easy  1547 accepted / 4401 tried

    This is reverse of 133. roman numerals to integer

Roman numerals are represented by combinations of following seven symbols, each with a fixed integer value.
Symbol 	I 	V 	X 	L 	C 	D 	M
Value 	1 	5 	10 	50 	100 	500 	1000

For Standard form, subtractive notation is used, meaning 4 is IV rather than IIII, 9 is IX rather than VIIII. Same rule applies to 40(XL) and 900(CM) .etc.

Simply speaking, the roman numerals in standard form follow these rules.

    symbols are listed from highest to lowest, from left to right
    from left to right, if the next symbol value is bigger than current one, it means subtracting, otherwise adding.

Please implement integerToRoman(). The input are all integers within valid range.


integerToRoman(123)
// 'CXXIII'

integerToRoman(1999)
// 'MCMXCIX'

integerToRoman(3420)
// 'MMMCDXX'

167. Intersection of unsorted arrays
JavaScript
Algorithm
Share

easy  3953 accepted / 10110 tried

Given two arrays, find the intersection(items occur in both arrays)

    arrays are not sorted, and might have duplicates.
    you can modify the arrays
    you can return the items in any order, but without duplicates.

This is an easy problem, What is the time & space complexity of your approach?

176. undefined to null
One of the differences between null and undefined is how they are treated differently in JSON.stringify().

JSON.stringify({a: null})      // '{"a":null}'
JSON.stringify({a: undefined}) // '{}'

JSON.stringify([null])         // '[null]'
JSON.stringify([undefined])    // '[null]'

This difference might create troubles if there are missing alignments between client and server. It might be helpful to enforce using only one of them.

You are asked to implement undefinedToNull() to return a copy that has all undefined replaced with null.

undefinedToNull({a: undefined, b: 'BFE.dev'})
// {a: null, b: 'BFE.dev'}

undefinedToNull({a: ['BFE.dev', undefined, 'bigfrontend.dev']})
// {a: ['BFE.dev', null, 'bigfrontend.dev']}