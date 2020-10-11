function anagramChecker(a, b) {
    return a.toLowerCase().split('').sort().join('') === b.toLowerCase().split('').sort().join('');
}

anagramChecker("Listen", "Silent");
