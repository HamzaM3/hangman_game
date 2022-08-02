function Keyboard ({selectedLetters, addLetter}) {
    let keyLayoutTop = 'QWERTYUIOP';
    let keyLayoutMiddle = 'ASDFGHJKL';
    let keyLayoutBottom = 'ZXCVBNM';

    return <div class='keyboard'>
        <div class='top'>
            {
                keyLayoutTop.split('').map(x => {
                    if (selectedLetters.includes(x)) {
                        return <div key={`keyboard-${x}`} className='selected-letter'>{x}</div>
                    } else {
                        return <div key={`keyboard-${x}`} className='unselected-letter' onClick={addLetter(x)}>{x}</div>
                    }
                })
            }
        </div>
        <div class='middle'>
            {
                keyLayoutMiddle.split('').map(x => {
                    if (selectedLetters.includes(x)) {
                        return <div key={`keyboard-${x}`} className='selected-letter'>{x}</div>
                    } else {
                        return <div key={`keyboard-${x}`} className='unselected-letter' onClick={addLetter(x)}>{x}</div>
                    }
                })
            }
        </div>
        <div class='bottom'>
            {
                keyLayoutBottom.split('').map(x => {
                    if (selectedLetters.includes(x)) {
                        return <div key={`keyboard-${x}`} className='selected-letter'>{x}</div>
                    } else {
                        return <div key={`keyboard-${x}`} className='unselected-letter' onClick={addLetter(x)}>{x}</div>
                    }
                })
            }
        </div>
    </div>
}

export default Keyboard;