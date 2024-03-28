function text_insert(s) {
    let e = document.getElementById('text');
    let start = e.selectionStart;
    let end = e.selectionEnd;
    
    e.value = e.value.substring(0, start) + s + e.value.substring(end);
    e.selectionStart = e.selectionEnd = start + s.length;
    // e.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowRight'}));
}

addEventListener("DOMContentLoaded", () => {
    document.getElementById("text").focus();
    document.getElementById("text").select();
})

// let CONV = " !\"#$%&'()*+,-./𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗:;<=>?@𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙[\]^_`𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳{|}~";
// cannot reliably use string indexing in complex unicode strings

const CONV = {
    "0": "𝟎",
    "1": "𝟏",
    "2": "𝟐",
    "3": "𝟑",
    "4": "𝟒",
    "5": "𝟓",
    "6": "𝟔",
    "7": "𝟕",
    "8": "𝟖",
    "9": "𝟗",
    "A": "𝐀",
    "B": "𝐁",
    "C": "𝐂",
    "D": "𝐃",
    "E": "𝐄",
    "F": "𝐅",
    "G": "𝐆",
    "H": "𝐇",
    "I": "𝐈",
    "J": "𝐉",
    "K": "𝐊",
    "L": "𝐋",
    "M": "𝐌",
    "N": "𝐍",
    "O": "𝐎",
    "P": "𝐏",
    "Q": "𝐐",
    "R": "𝐑",
    "S": "𝐒",
    "T": "𝐓",
    "U": "𝐔",
    "V": "𝐕",
    "W": "𝐖",
    "X": "𝐗",
    "Y": "𝐘",
    "Z": "𝐙",
    "a": "𝐚",
    "b": "𝐛",
    "c": "𝐜",
    "d": "𝐝",
    "e": "𝐞",
    "f": "𝐟",
    "g": "𝐠",
    "h": "𝐡",
    "i": "𝐢",
    "j": "𝐣",
    "k": "𝐤",
    "l": "𝐥",
    "m": "𝐦",
    "n": "𝐧",
    "o": "𝐨",
    "p": "𝐩",
    "q": "𝐪",
    "r": "𝐫",
    "s": "𝐬",
    "t": "𝐭",
    "u": "𝐮",
    "v": "𝐯",
    "w": "𝐰",
    "x": "𝐱",
    "y": "𝐲",
    "z": "𝐳",
}

document.getElementById("text").addEventListener("keydown", e => {
    if (e.key == "c" && e.ctrlKey) {
        navigator.clipboard.writeText(document.getElementById("text").value);
        document.getElementById("copied").style.display = "inline";
        setTimeout(() => {
            document.getElementById("copied").style.display = "none";
        }, 800)
    } else if (e.key == "r" && e.ctrlKey && !e.shiftKey) {
        // fast reload
        e.preventDefault();
        document.getElementById("text").value = "𝐓𝐲𝐩𝐞 𝐬𝐨𝐦𝐞𝐭𝐡𝐢𝐧𝐠 𝐡𝐞𝐫𝐞 ...";
        document.getElementById("text").select();
    } else if (e.key in CONV && !e.ctrlKey && !e.altKey && !e.metaKey) {
        // console.log(e.key.charCodeAt(0));
        // e.preventDefault();
        // text_insert(CONV[e.key.charCodeAt(0) - 32]);
        
        e.preventDefault();
        text_insert(CONV[e.key]);
    }
    // console.log(e.key, e.ctrlKey)
});
