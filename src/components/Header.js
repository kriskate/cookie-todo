import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ addTodo }) => (
  <header className="header">
    <h1><a href="https://www.reddit.com/user/D2cookie">/r/D2cookie</a> last hit challenges</h1>
    <div>
      <p>All the challanges are done in lobby games, no cheats, no bots, 1v0</p>
      <p>YES, they are all possible, just hard</p>
    </div>
  </header>
)

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header
