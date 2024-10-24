<script> 
// JavaScript code to Segregate 0s and 1s in an array 

// Function to segregate 0s and 1s 
function segregate0and1(arr, n) 
{ 
	let count = 0; // Counts the no of zeros in arr 

	for (let i = 0; i < n; i++) { 
		if (arr[i] == 0) 
			count++; 
	} 

	// Loop fills the arr with 0 until count 
	for (let i = 0; i < count; i++) 
		arr[i] = 0; 

	// Loop fills remaining arr space with 1 
	for (let i = count; i < n; i++) 
		arr[i] = 1; 
} 

// Function to print segregated array 
function print(arr, n) 
{ 
	document.write("Array after segregation is "); 

	for (let i = 0; i < n; i++) 
		document.write(arr[i] + " "); 
} 

// Driver function 

	let arr = [ 0, 1, 0, 1, 1, 1 ]; 
	let n = arr.length; 
	
	segregate0and1(arr, n); 
	print(arr, n); 
	

// This code is contributed by Surbhi Tyagi 

</script>
