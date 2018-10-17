import React from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

const MainSection = ({ todosCount, completedCount, actions }) =>
  (
    <section className="main">
      <VisibleTodoList />
      {
        !!todosCount &&
        <Footer
          reset={actions.reset}
          completedCount={completedCount}
          activeCount={todosCount - completedCount}
        />
      }
    </section>
  )

MainSection.propTypes = {
  todosCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection;