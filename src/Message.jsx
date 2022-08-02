function Message({win, lost}) {
    return <div className={`message ${win() ? 'won' : lost() ? 'lost' : ''}`}>
        {win() ? 'You won' : lost() ? 'You lost' : ''}
    </div>
}

export default Message;