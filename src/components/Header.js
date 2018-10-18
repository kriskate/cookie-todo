import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ addTodo }) => (
  <div>
    <h1><a href="https://www.reddit.com/user/D2cookie">/r/D2cookie</a> last hit challenges</h1>
  <header className="header">
    <div>
      <p>All the challanges are done in lobby games, no cheats, no bots, 1v0</p>
      <p>There are no additional rules - unless stated in the challenge itself.</p>
      <p>YES, they are all possible, just hard</p>
    </div>
  </header>
  </div>
)

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header
