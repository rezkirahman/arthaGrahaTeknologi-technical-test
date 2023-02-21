package main

import (
	"fmt"
	"strings"
)

func checkPalindrome(str string) bool {
	// konversi string ke slice of runes untuk memudahkan pengolahan
	runes := []rune(strings.ToLower(str))
	// inisialisasi pointer untuk mengakses karakter pertama dan terakhir
	start, end := 0, len(runes)-1

	// lakukan iterasi sampai pointer start dan end bertemu
	for start < end {
		// jika karakter di posisi start dan end tidak sama, string bukan palindrome
		if runes[start] != runes[end] {
			return false
		}
		start++
		end--
	}

	// string adalah palindrome jika sampai di sini tidak ada karakter yang tidak sama
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
