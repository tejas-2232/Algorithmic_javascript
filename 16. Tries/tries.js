/*
 Trie (Prefix Tree) implementation

 This file provides a Trie (prefix tree) implementation with common
 operations: insert, search, startsWith, delete, and prefix search.

 Why tries?
 - Tries (prefix trees) store strings in a tree structure where each
   edge represents a character. They are particularly efficient for
   prefix-based operations because a prefix corresponds to a single
   traversal from the root to a node.
 - Typical uses include autocomplete / typeahead, spell-checkers,
   dictionaries, IP routing (longest-prefix matching in some forms),
   and any problem that needs fast prefix lookup or enumerating all
   keys with a given prefix.
 - Performance characteristics are predictable: operations such as
   insert, search and prefix checks run in O(L) time where L is the
   length of the input word or prefix (independent of the number of
   stored words).

 When to use a Trie vs alternatives
 - Use a Trie when you need:
   * Fast prefix queries (e.g., find all words starting with 'pre')
   * Memory/space is acceptable for the alphabet size (tries can be
     memory-heavy because each node stores children slots)
   * Deterministic worst-case performance per-key (O(L))
 - Alternatives:
   * Hash set / Map: faster for exact lookups (average O(1)) but does
     not support efficient prefix enumeration.
   * Sorted array / binary search tree: supports prefix searches via
     range queries but has O(log N + k) behavior, where k is the
     number of matching results — and string comparisons may cost O(L).
   * Compressed tries / Patricia / DAWG: more memory efficient for large
     dictionaries but more complex to implement.

 Usage notes
 - This implementation assumes lowercase English letters (a-z) and
   uses an array of 26 children per node for simplicity. Non-lowercase
   characters are ignored by the public methods.
 - The file includes small example runs in the "run directly" guard so
   you can `node` the file to see expected behaviour. It also exports
   `Trie` and `TrieNode` for requiring from other modules.

 Complexity (assuming input words of length L):
 - insert: O(L)
 - search: O(L)
 - startsWith: O(L)
 - delete: O(L)

 Space complexity: O(ALPHABET_SIZE * total_nodes) for the children arrays.
 This implementation uses 26 children slots per node (lowercase a-z).
*/

class TrieNode {
  constructor(val = null, isEnd = false) {
    this.val = val;
    // children array for 'a'..'z'
    this.children = new Array(26).fill(null);
    this.isEnd = isEnd;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Insert a lowercase word into the trie. Non a-z chars are ignored.
  insert(word) {
    let node = this.root;
    for (let ch of word) {
      const index = ch.charCodeAt(0) - "a".charCodeAt(0);
      if (index < 0 || index >= 26) continue; // ignore non-lowercase letters
      if (!node.children[index]) node.children[index] = new TrieNode(ch);
      node = node.children[index];
    }
    node.isEnd = true; // mark end of word
  }

  // Search for a full word (must be marked as end)
  search(word) {
    let node = this.root;
    for (let ch of word) {
      const index = ch.charCodeAt(0) - "a".charCodeAt(0);
      if (index < 0 || index >= 26) return false;
      if (!node.children[index]) return false;
      node = node.children[index];
    }
    return !!node && node.isEnd === true;
  }

  // Check if any word in trie starts with prefix
  startsWith(prefix) {
    let node = this.root;
    for (let ch of prefix) {
      const index = ch.charCodeAt(0) - "a".charCodeAt(0);
      if (index < 0 || index >= 26) return false;
      if (!node.children[index]) return false;
      node = node.children[index];
    }
    return true;
  }

  // Delete a word from trie. Returns true if deletion succeeded (word existed).
  delete(word) {
    // recursive helper returns true if the parent should delete the child
    const _delete = (node, depth) => {
      if (!node) return false;
      if (depth === word.length) {
        if (!node.isEnd) return false; // word not present
        node.isEnd = false; // unmark end
        // if node has no children, inform parent to delete the reference
        return node.children.every((c) => c === null);
      }

      const ch = word[depth];
      const index = ch.charCodeAt(0) - "a".charCodeAt(0);
      if (index < 0 || index >= 26) return false; // invalid char
      const child = node.children[index];
      if (!child) return false; // word not present

      const shouldDeleteChild = _delete(child, depth + 1);
      if (shouldDeleteChild) {
        node.children[index] = null;
        // if current node is not end of another word and has no other children
        return !node.isEnd && node.children.every((c) => c === null);
      }
      return false;
    };

    // start recursion from root
    return _delete(this.root, 0);
  }

  // Collect all words under a node with given prefix
  _collectWords(node, prefix, results) {
    if (!node) return;
    if (node.isEnd) results.push(prefix);
    for (let i = 0; i < 26; i++) {
      const child = node.children[i];
      if (child) {
        const ch = String.fromCharCode("a".charCodeAt(0) + i);
        this._collectWords(child, prefix + ch, results);
      }
    }
  }

  // Return all words in trie that start with the given prefix
  wordsWithPrefix(prefix) {
    let node = this.root;
    for (let ch of prefix) {
      const index = ch.charCodeAt(0) - "a".charCodeAt(0);
      if (index < 0 || index >= 26) return [];
      if (!node.children[index]) return [];
      node = node.children[index];
    }
    const results = [];
    this._collectWords(node, prefix, results);
    return results;
  }
}

// Example usage when run directly
if (require.main === module) {
  const trie = new Trie();
  const words = ["app", "apple", "application", "apt", "bat", "batch", "baton"];
  for (const w of words) trie.insert(w);

  console.log("search app ->", trie.search("app")); // true
  console.log("search apple ->", trie.search("apple")); // true
  console.log("search apply ->", trie.search("apply")); // false
  console.log("startsWith ap ->", trie.startsWith("ap")); // true
  console.log("words with prefix 'app' ->", trie.wordsWithPrefix("app"));

  // demonstrate delete
  console.log("delete app ->", trie.delete("app"));
  console.log("search app after delete ->", trie.search("app")); // false
  console.log("search apple after delete ->", trie.search("apple")); // true
  console.log(
    "words with prefix 'app' after delete ->",
    trie.wordsWithPrefix("app")
  );
}

module.exports = { Trie, TrieNode };
