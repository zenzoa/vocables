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

function capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
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
    //'ee',
    //'oo',
    //'ou',
    //'ea',
    //'ie',
    //'ue',
    //'ay',
    //'ey',
    //'oy',
    //'ew',
    //'aw',
    //'ow',
    //'oa'
]

var onsets = [
    '',
    'p', 't', 'k', 'f', 's',
    'b', 'd', 'g', 'v', 'z',
    'r', 'l', 'm', 'n', 'h', 'w', 'y',
    'ch', 'sh', 'th',
    'x', 'qu',
    'pl', 'bl', 'cl', 'gl',
    'pr', 'br', 'cr', 'gr', 'tr', 'dr',
    //'tw', 'dw', 'gw', 'cw', 'pw',
    'fl', 'sl', 'vl', //'thl',
    'fr', 'thr', //'shr',
    //'hw', 'sw', 'thw', 'vw', 'fw',
    'sp', 'st', 'sk',
    'sm', 'sn',
    'spr', 'str', 'skr', 'squ', //'spl', 'skl',
    //'shl', 'shm', 'shn'
]

var codas = [
    '',
    'p', 't', 'k', 'f', 's',
    'b', 'd', 'g', 've', 'z',
    'r', 'l', 'm', 'n', 'ng',
    'sh', 'ch', 'ge',

    //'lp', 'lb', 'lt', 'ld', 'lch', 'lge', 'lk',
    'rp', 'rb', 'rt', 'rd', 'rch', 'rge', 'rk', 'rg',
    'lf', 'lve', 'lse', //'lsh', 'lth',
    'rf', 'rve', 'rse', //'rsh', 'rth'
    //'lm', 'ln',
    'rm', 'rn', 'rl',
    'mp', 'nt', 'nd', 'nch', 'nge', 'nk',
    'ns', //'mf', 'nz', 'mth', 'nth', 'ngth',
    'ft', 'sp', 'st', 'sk',
    //'fth',
    'pt','ct',
    'ps', 'th', 'ts', 'x', //'pth', 'dth',
    //'lpt', 'lfth', 'lts', 'lst', 'lkt', 'lx',
    //'rmth', 'rpt', 'rps', 'rts', 'rst', 'rct',
    'nx', //'mpt', 'mps', //'ndth', 'nct',
    'xt', //'xth',
]
