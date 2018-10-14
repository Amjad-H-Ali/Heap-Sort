console.log("HeapSort!");

// Function that creates Max-Heap
// Parameters: an array, indx of current element in array, length of array.
const heapify = (arr, indx, size) => {

}

// Function heapifies array and swaps root with last leaf node
// Then "Deletes" last leaf node. Process is repeated until no more nodes remain. 
// Params: an array.
const heapSort = (arr) => {
	// Array length
	const size = arr.length;
	// Convert array to max-heap by bubbling up largest nodes to top.
	// For loop iterates through Parent nodes only.
	for (let i = (Math.floor(size/2) - 1); i >= 0; i --)
		heapify(arr, i, size);
}