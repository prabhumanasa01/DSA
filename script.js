
const descriptions = {

    /* Programming Basics */

    variables:
        "A variable is a named location used to store data. For example, a variable can store a number, name, or other value.",

    datatypes:
        "Data types tell the computer what type of data is being stored. Common types include integer, float, character, string and boolean.",

    conditions:
        "Conditional statements allow a program to make decisions. The most common examples are if, else if and else.",

    loops:
        "Loops are used to execute the same block of code multiple times. Common loops are for, while and do-while.",

    functions:
        "A function is a reusable block of code designed to perform a particular task. Functions help keep programs organized.",


    /* Arrays */

    array:
        "An array stores multiple values of the same type in a continuous sequence of memory locations.",

    arrayTraversal:
        "Array traversal means visiting each element of an array one by one, usually using a loop.",

    arraySearch:
        "Searching means finding a particular value inside an array. Linear search and binary search are common techniques.",

    arrayInsert:
        "Insertion means adding a new element to an array at a particular position.",

    arrayDelete:
        "Deletion means removing an element from an array and adjusting the remaining elements.",


    /* Strings */

    strings:
        "A string is a sequence of characters. Strings are used to store and work with text.",

    stringTraversal:
        "String traversal means visiting each character of a string one by one.",

    palindrome:
        "A palindrome is a word or sequence that reads the same forward and backward. Example: MADAM.",

    anagram:
        "Two strings are anagrams if they contain the same characters with the same frequencies. Example: LISTEN and SILENT.",


    /* Searching and Sorting */

    linearSearch:
        "Linear search checks every element one by one until the required element is found.",

    binarySearch:
        "Binary search works on a sorted array. It repeatedly divides the search area into two parts.",

    bubbleSort:
        "Bubble sort repeatedly compares adjacent elements and swaps them when they are in the wrong order.",

    selectionSort:
        "Selection sort repeatedly finds the smallest element and places it in the correct position.",

    insertionSort:
        "Insertion sort builds the sorted array one element at a time by inserting each element into its correct position.",


    /* Linked List */

    linkedList:
        "A linked list is a data structure made of nodes. Each node contains data and a link to another node.",

    singly:
        "A singly linked list contains nodes where each node points to the next node.",

    doubly:
        "A doubly linked list contains links to both the previous and next nodes.",

    reverseList:
        "Reversing a linked list changes the direction of its links so that the last node becomes the first node.",


    /* Stack */

    stack:
        "A stack follows LIFO: Last In, First Out. The last element added is the first element removed.",

    stackArray:
        "A stack can be implemented using an array. Push adds an element and pop removes the top element.",

    parentheses:
        "Balanced parentheses problems use a stack to check whether opening and closing brackets are correctly matched.",


    /* Queue */

    queue:
        "A queue follows FIFO: First In, First Out. The first element added is the first element removed.",

    circularQueue:
        "A circular queue connects the last position back to the first position so that unused space can be reused.",

    deque:
        "A deque, or double-ended queue, allows insertion and deletion from both the front and the rear.",


    /* Recursion */

    recursion:
        "Recursion occurs when a function calls itself to solve a smaller version of the same problem.",

    baseCase:
        "A base case tells a recursive function when to stop calling itself. Without a base case, recursion can continue indefinitely.",

    backtracking:
        "Backtracking tries possible solutions and goes back when a chosen path does not lead to a valid solution.",


    /* Hashing */

    hashing:
        "Hashing converts data into a value called a hash. It is commonly used for fast searching and storing data.",

    hashmap:
        "A HashMap stores data as key-value pairs and usually allows fast insertion and searching.",

    hashset:
        "A HashSet stores unique values and does not allow duplicate elements.",


    /* Trees */

    tree:
        "A tree is a hierarchical data structure consisting of nodes connected by edges. It starts with a root node.",

    binaryTree:
        "A binary tree is a tree where each node can have at most two children.",

    treeTraversal:
        "Tree traversal means visiting all nodes of a tree. Common methods are inorder, preorder, postorder and level order.",

    bst:
        "A Binary Search Tree is a binary tree where smaller values are placed on the left and larger values are placed on the right.",


    /* Heap */

    heap:
        "A heap is a special tree-based data structure commonly used to implement priority queues.",

    minHeap:
        "In a min heap, the smallest element is always present at the root.",

    maxHeap:
        "In a max heap, the largest element is always present at the root.",


    /* Graphs */

    graph:
        "A graph is a collection of vertices and edges. It is used to represent relationships between objects.",

    bfs:
        "Breadth First Search visits graph nodes level by level. It commonly uses a queue.",

    dfs:
        "Depth First Search explores as far as possible along one path before going back. It commonly uses recursion or a stack.",

    dijkstra:
        "Dijkstra's algorithm finds the shortest path from one starting vertex to other vertices in a graph with non-negative edge weights.",


    /* Dynamic Programming */

    dp:
        "Dynamic Programming solves complex problems by breaking them into smaller overlapping problems and storing their results.",

    memoization:
        "Memoization stores the results of previously solved problems so they do not have to be calculated again.",

    tabulation:
        "Tabulation solves smaller problems first and stores their results in a table, usually using an iterative approach.",

    knapsack:
        "The Knapsack Problem involves selecting items with given weights and values while staying within a maximum weight limit."
};


/* Show Description */

function showDescription(topic) {

    const descriptionBox =
        document.getElementById("descriptionBox");

    const text =
        descriptions[topic];

    if (text) {

        descriptionBox.innerHTML = `
            <h2>Topic Description</h2>

            <p>${text}</p>
        `;

        descriptionBox.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

}

