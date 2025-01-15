# Searching Algorithms
Searching algorithms are essential tools in computer science used to locate specific items within a collection of data. These algorithms are designed to efficiently navigate through data structures to find the desired information, making them fundamental in various applications such as databases, web search engines, and more.

## Linear Search Algorithm: 
In Linear Search, we iterate over all the elements of the array and check if it the current element is equal to the target element. If we find any element to be equal to the target element, then return the index of the current element. Otherwise, if no element is equal to the target element, then return -1 as the element is not found. Linear search is also known as sequential search.

For example: Consider the array arr[] = {10, 50, 30, 70, 80, 20, 90, 40} and key = 30
![image](https://github.com/user-attachments/assets/eb4dc2c3-686c-4e4e-ab9e-fd69f721991a)

## Binary Search Algorithm:
Binary search is a search algorithm used to find the position of a target value within a sorted array. It works by repeatedly dividing the search interval in half until the target value is found or the interval is empty. The search interval is halved by comparing the target element with the middle value of the search space.

For example: Consider an array arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91}, and the target = 23.
![image](https://github.com/user-attachments/assets/5bcb9f0d-2b7d-479c-86ca-a14ee40855af)

## Two Pointers Technique:
Two pointers is really an easy and effective technique that is typically used for Two Sum in Sorted Arrays, Closest Two Sum, Three Sum, Four Sum, Trapping Rain Water and many other popular interview questions. Given a sorted array arr (sorted in ascending order) and a target, find if there exists any pair of elements (arr[i], arr[j]) such that their sum is equal to the target.

Example: 
Initialize: left = 0, right = n – 1
Run a loop while left < right, do the following inside the loop

Compute current sum, sum = arr[left] + arr[right]
If the sum equals the target, we’ve found the pair.
If the sum is less than the target, move the left pointer to the right to increase the sum.
If the sum is greater than the target, move the right pointer to the left to decrease the sum.

-> Array[] = {1,4,45,6,10,-8}, Target_Value = [16]
![image](https://github.com/user-attachments/assets/786d085f-3203-4352-a172-3ab3abf0a376)

