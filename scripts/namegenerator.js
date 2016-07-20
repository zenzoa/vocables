// function generateWord (numSyllables) {
//     var word = []
//     for (var i in range(numSyllables-1)) {
//         word.push(generateSyllable)
//     }
//
//     // Pick a number of syllables
//     var numSyllables = randomIn([1,2,3])
//
//     // Add first syllable
//     var word = generateSyllable(true, false)
//
//     // Add rest of syllables
//     for (var i in range(numSyllables-1)) {
//         // Remove hanging e's from earlier syllables
//         if (word.charAt(word.length-1) === 'e') {
//             word = word.slice(0, word.length-2)
//         }
//
//         // Add a new syllable
//         word = word + generateSyllable(false, (i === numSyllables-2))
//     }
//
//     // Capitalize word
//     return capitalize(word)
// }
//
// function generateSyllable (firstSyllable, lastSyllable) {
//     // Figure out whether to include onset and coda
//     //var includeOnset = randomIn([true, false])
//     //var includeCoda = randomIn([true, false])
//
//     // Generate parts of syllable
//     var onset = randomIn(onsets)
//     var nucleus = randomIn(nuclei)
//     var coda = randomIn(codas)
//
//     // Put syllable together
//     var syllable = onset + nucleus + coda
//
//     // Return the syllable
//     return syllable
// }

function capitalize (s) {
    return s.charAt(0).toUpperCase() + s.slice(1)
}

function randomIn (list) {
    var i = Math.floor(Math.random() * list.length)
    return list[i]
}

function range (num) {
    return [...Array(num).keys()]
}

var nuclei = [
    'a',
    'e',
    'i',
    'o',
    'u'
]

var onsets = [
    '',
    'p', 't', 'c', 'k', 'f', 's',
    'b', 'd', 'g', 'v', 'z', 'j',
    'r', 'l', 'm', 'n', 'h', 'w', 'y',
    'ch', 'sh', 'th', 'x', 'qu',
    'pl', 'bl', 'kl', 'cl', 'gl',
    'pr', 'br', 'kr', 'cr', 'gr', 'tr', 'dr',
    'fl', 'sl', 'vl',
    'fr', 'thr', 'shr',
    'sw', 'sp', 'st', 'sk', 'sc', 'sm', 'sn',
    'spr', 'str', 'scr', 'skr', 'squ', 'spl', 'skl'
]

var codas = [
    '',
    'p', 't', 'ck', 'f', 's', 'z',
    'b', 'd', 'g', 'v', 'x',
    'r', 'l', 'm', 'n', 'ng',
    'sh', 'ch', 'th',
    'lp', 'lt', 'ld', 'lch', 'lg', 'lk',
    'rp', 'rb', 'rt', 'rd', 'rch', 'rg', 'rk',
    'lf', 'lv', 'ls',
    'rf', 'rv', 'rs',
    'lm', 'ln',
    'rm', 'rn', 'rl',
    'mp', 'nt', 'nd', 'nch', 'nk',
    'ns', 'ft', 'sp', 'st', 'sk',
    'pt', 'kt', 'ct', 'ps', 'ts',
    'lx', 'nx', 'xt'
]
