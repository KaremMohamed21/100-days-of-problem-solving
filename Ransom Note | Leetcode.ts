// Solution 1
function canConstruct(ransomNote: string, magazine: string): boolean {	
	if (ransomNote.length > magazine.length) return false;
	
    for(let i = 0; i < ransomNote.length; i++) {
        const letter = ransomNote[i];
        if (!magazine.includes(letter)) return false;
        magazine = magazine.replace(letter, '');
    }

    return true;
};

// Solution 2
function canConstruct(ransomNote: string, magazine: string): boolean {
    if (ransomNote.length > magazine.length) return false;
    return ransomNote.split('').every(el => !magazine.includes(el) ? false : !!(magazine = magazine.replace(el, '')))
};
