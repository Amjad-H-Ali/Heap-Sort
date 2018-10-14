console.log("HeapSort!");

// Function that creates Max-Heap
// Parameters: an array, indx of current element in array, length of array.
const heapify = (arr, indx, size) => {
	// Define and initialize left child indx, right child indx, and largest node indx.
	// Assume largest node indx is the parent node indx.
	let largest = indx,
			  l = (indx * 2) + 1,
			  r = (indx * 2) + 2;
	// If left child exist and is larger than current largest node, update largest variable with its index.
	if (l < size && arr[l] > arr[largest]) 
		largest = l;
	// If right child exist and is larger than current largest node, update largest variable with its index.
	if (r < size && arr[r] > arr[largest])
		largest = r;
	// If largest is not the parent node, then replace parent with the larger node.
	// Then recursively do the same to the children if any.
	if (indx !== largest) {
		swap(arr, indx, largest);
		heapify(arr, largest, size);
	}				  
}

// Function heapifies array and swaps root with last leaf node
// Then "Deletes" last leaf node. Process is repeated until no more nodes remain. 
// Params: an array.
const heapSort = (arr) => {
	// Array length
	const size = arr.length;
	// Convert array to max-heap by bubbling up largest children nodes to top.
	// For loop iterates through Parent nodes only.
	for (let i = (Math.floor(size/2) - 1); i >= 0; i --)
		heapify(arr, i, size);

	// Swap root node (which is the largest element) with the last leaf node.
	// And heapify array afterwards and 'delete' last node and repeat.
	for (let i = size - 1; i >= 0; i --) {
		// Swap root with last node.
		swap(arr, 0, i);

		// Pass in effected portion of array into heapify to make max-heap.
		heapify(arr, 0, i);
	}
	return arr;
}

// Swap function swaps elements in array.
const swap = (arr, indx1, indx2) => {
	const temp = arr[indx1];
	arr[indx1] = arr[indx2];
	arr[indx2] = temp;
}

console.log(heapSort([45, 1, 0, 0, 5, 6, 3, 5, 6, 5, 94, 23]));


