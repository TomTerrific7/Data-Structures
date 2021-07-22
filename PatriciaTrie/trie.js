const TrieNode = require('./TrieNode');

class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }
    // return true if the word is in the Trie
    // return false if not 
    contains(word) {
        let parent = this.root;

        for (let i = 0; i < word.length; i++) {
            if (parent.children[word[i]] === undefined) {
                return false;
            }
            parent = parent.children[word[i]];
        }

        return parent.isWord;
    }
    insert(word) {
        let parent = this.root;

        for (let i = 0; i < word.length; i++) {
            const char = word[i];

            let child;
            if (!parent.children[char]) {
                child = new TrieNode(char);
                parent.children[char] = child;
            }
            else {
                child = parent.children[char];
            }

            parent = child;
        }

        parent.isWord = true;
    }
}

module.exports = Trie;