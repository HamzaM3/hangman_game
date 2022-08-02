
function Word ({word, selectedLetters}) {
    console.log(word, selectedLetters)
    return <div className='word'>
        {
            word.split('').map((x,i) => {
                if (selectedLetters.includes(x.toUpperCase())) {
                    return <div key={word+`-${i}`} className='found-letter'>{x}</div>
                } else {
                    return <div key={word+`-${i}`} className='hidden-letter'></div>
                }
            })
        }
    </div>
}

export default Word;