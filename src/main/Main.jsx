import React from 'react'
import Board from './components/Board'
import Reset from './components/Reset'
import Message from './components/Message'

function Main({squares, handleClick, message, resetGame}) {
  return (
    <main className='flex items-center flex-col'>
        <Message msg={message} />
        <Board squares={squares} handleClick={handleClick}/>
        <Reset resetGame={resetGame}/>
    </main>
  )
}

export default Main