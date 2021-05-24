function shout(phrase){
    return phrase.toUpperCase()
}

function whisper(phrase){
    return phrase.toLowerCase()
}

function logShout(phrase){
    console.log(shout(phrase))
}

function logWhisper(phrase){
    console.log(whisper(phrase))
}

function sayHiToGrandma(greeting){
    if (greeting === whisper(greeting)){
        return "I can't hear you!"
    } else if (greeting === shout(greeting)){
        return "YES INDEED!"
    } else if (greeting === "I love you, Grandma."){
        return "I love you, too."
    }
}