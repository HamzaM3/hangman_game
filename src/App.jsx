import React from "react";
import Hangman from './Hangman'
import Word from './Word'
import Keyboard from './Keyboard'
import Message from './Message'

function inter(a, b) {
    let res = []
    for (let x of a) {
        if (b.includes(x) && !res.includes(x))
            res.push(x)
    }
    return res;
}

function App() {
    
    let [word, setWord] = React.useState('')
    let [selectedLetters, setSelectedLetters] = React.useState([]);
    
    function nbErrors() {
        return selectedLetters.length - inter(word.split(''), selectedLetters).length;
    }

    async function getNewWord() {
        let [newWord] = await fetch('https://random-word-api.herokuapp.com/word').then(resp=>resp.json())
        setWord(newWord.toUpperCase())
    }

    function addLetter(letter) {
        return () => {
            if (!(win() || lost()))
                setSelectedLetters((s) => !s.includes(letter) ? [...s, letter] : s)
        }
    }
    
    function win() {
        for (let l of word.split('')) {
            if (!selectedLetters.includes(l))
                return false;
        }
        return true;
    }

    function lost() {
        return nbErrors() === 11;
    }

    async function resetGame() {
        await getNewWord();
        setSelectedLetters([])
    }

    React.useEffect(() => {
      getNewWord()
    }, [])
    

    return <div className='game'>
        <Word word={word} selectedLetters={selectedLetters}/>
        <Keyboard selectedLetters={selectedLetters} addLetter={addLetter}/>
        <div className='reset-button' onClick={resetGame}>Restart</div>
        <Hangman nb_errors={nbErrors()}/>
        <Message win={win} lost={lost}/>
    </div>
}

export default App;