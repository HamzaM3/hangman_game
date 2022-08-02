import React from "react";

function Hangman({nb_errors}) {
    console.log(nb_errors)
    let black = (nb) => nb_errors >= nb ? 'black' : '';
    return <div className='hangman'>
        <div className={'bar top ' + black(3)}></div>
        <div className={'bar top-left ' + black(5)}></div>
        <div className='man'>
            <div className={'head ' + black(6)}></div>
            <div className={'body ' + black(7)}>
                <div className={'limb right top ' + black(8)}></div>
                <div className={'limb left top ' + black(9)}></div>
                <div className={'limb right bottom ' + black(10)}></div>
                <div className={'limb left bottom ' + black(11)}></div>
            </div>
        </div>
            <div className={'bar right ' + black(2)}>
            <div className={'bar top-right ' + black(4)}></div>
        </div>
        <div className={'bar bottom ' + black(1)}></div>
  </div>
}

export default Hangman;