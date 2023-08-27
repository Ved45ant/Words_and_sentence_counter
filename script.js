var string;

character_counter = (str) => {
    return ((str).length);
}
spaces_counter = (str) => {
    let char_spaces = 0;

    for (char of str) {
        if (char != " " && char !="\n") {
            char_spaces++;
        }
    }
    return char_spaces;
}

word_counter = (str) => {
    const splitters = /[ .?!\n]/;
    let words_array = str.split(splitters);

    let no_word = (word = words_array.filter(word => {
        return word != "";
    })).length

    return no_word;
}

sentences_counter = (str) => {
    let sentences = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == "." || string[i] == "?" || string[i] == "!") {
            sentences++;
        }
    }
    return sentences;
}
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
display_results = () => {
    string = document.getElementById('textarea').value;

    document.getElementById('Sentences').innerHTML = sentences_counter(string)
    document.getElementById('characters').innerHTML = character_counter(string) - sentences_counter(string);
    document.getElementById('Words').innerHTML = word_counter(string)
    document.getElementById('characters_spaces').innerHTML = spaces_counter(string)
}