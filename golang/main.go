package main

import (
	"fmt"
	"strings"
)

func checkPalindrome(str string) bool {
	runes := []rune(strings.ToLower(str)
	start, end := 0, len(runes)-1

	for start < end {
		if runes[start] != runes[end] {
			return false
		}
		start++
		end--
	}

	return true
}

func fibonacci(n int) []int {
	series := []int{0, 1}
	for i := 2; i < n; i++ {
		next := series[i-1] + series[i-2]
		series = append(series, next)
	}

	return series
}

func main() {

	//Palindrome
	result := checkPalindrome("katak")
	fmt.Println(result)

	result = checkPalindrome("hello")
	fmt.Println(result)

	//Fibonacci
	Result := fibonacci(10)
	fmt.Println(Result)
}
