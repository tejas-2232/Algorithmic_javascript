const readline = require('readline');

/**
 * Explanation : This is a javascript implementation of dijkstra's algorithm
 *              to find the shortest path between two nodes in a graph.
 *             The graph is represented as an adjacency list.
 *              The algorithm is implemented using a min heap.
 *
 *
 * Sample Input :
 *  5 5
 * 1 2 1
 * 1 3 2
 * 2 3 1
 * 2 4 2
 *
 * Sample Output :
 * 1 2 1
 * 2 3 1
 * 3 4 2
 *
 * Time Complexity : O(ElogV)
 * Space Complexity : O(V)
 *
 *
 * Algorithm Thinking :
 *  1. Initialize the distance of all nodes to infinity.
 * 2. Initialize the distance of the source node to 0.
 * 3. Insert all the nodes into a min heap.
 * 4. While the heap is not empty, do the following:
 * 5. Extract the node with the minimum distance from the heap.
 * 6. For each neighbor of the extracted node, do the following:
 * 7. If the distance to the neighbor is greater than the distance to the
 * extracted node plus the weight of the edge between them, then update the
 * distance of the neighbor.
 * 8. Insert the neighbor into the heap.
 * 9. Repeat steps 4-8 until the heap is empty.
 * 10. The distance array now contains the shortest distance from the source
 * node to all other nodes in the graph.
 * 11. The algorithm is complete.
 *
 * Implementation :
 * It can be implemented using a min heap. [Using class or function]
 *
 * for this implementation, we will use the functional approach to implement the min heap
 */


const PriorityQueue = () => {
  const heap = [];

  const swap = (i, j) => {
    const temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
  };

  const parent = (i) => Math.floor((i - 1) / 2);

  const left = (i) => 2 * i + 1;

  const right = (i) => 2 * i + 2;

  const heapify = (i) => {
    const l = left(i);
    const r = right(i);
    let smallest = i;

    if (l < heap.length && heap[l].weight < heap[smallest].weight) {
      smallest = l;
    }

    if (r < heap.length && heap[r].weight < heap[smallest].weight) {
      smallest = r;
    }

    if (smallest !== i) {
      swap(i, smallest);
      heapify(smallest);
    }
  };

  const insert = (node, weight) => {
    heap.push({ node, weight });
    let i = heap.length - 1;

    while (i !== 0 && heap[parent(i)].weight > heap[i].weight) {
      swap(i, parent(i));
      i = parent(i);
    }
  };

  const extractMin = () => {
    if (heap.length === 1) {
      return heap.pop().node;
    }

    const root = heap[0].node;
    heap[0] = heap.pop();
    heapify(0);

    return root;
  };

  const isEmpty = () => heap.length === 0;

  return {
    insert,
    extractMin,
    isEmpty,
  };
}


const dijkstra = (graph, source) => {
  const dist = new Array(graph.length).fill(Infinity); // Initialize the distance of all nodes to infinity.
  dist[source] = 0; // Initialize the distance of the source node to 0.

  const pq = PriorityQueue(); // Insert all the nodes into a min heap.
  pq.insert(source, 0); // Insert the source node into the heap.

  while (!pq.isEmpty()) {  // While the heap is not empty, do the following:
    const u = pq.extractMin(); // Extract the node with the minimum distance from the heap.

    for (let i = 0; i < graph[u].length; i += 1) {  // For each neighbor of the extracted node, do the following:
      const v = graph[u][i].node; // For each neighbor of the extracted node, do the following:
      const weight = graph[u][i].weight; // For each neighbor of the extracted node, do the following:

      if (dist[v] > dist[u] + weight) {   // If the distance to the neighbor is greater than the distance to the extracted node plus the weight of the edge between them, then update the distance of the neighbor.
        dist[v] = dist[u] + weight; 
        pq.insert(v, dist[v]); // Insert the neighbor into the heap.
      }
    }
  }

  return dist;
}

const graph = [
  [{ node: 1, weight: 1 }, { node: 2, weight: 2 }],
  [{ node: 0, weight: 1 }, { node: 2, weight: 1 }, { node: 3, weight: 2 }],
  [{ node: 0, weight: 2 }, { node: 1, weight: 1 }, { node: 3, weight: 1 }],
  [{ node: 1, weight: 2 }, { node: 2, weight: 1 }],
  [{ node: 5, weight: 1 }],
  [{ node: 4, weight: 1 }],
  [{ node: 7, weight: 1 }, { node: 8, weight: 2 }, { node: 9, weight: 3 }],
  [{ node: 6, weight: 1 }, { node: 8, weight: 1 }],
];

const dist = dijkstra(graph, 6);

console.log(dist);