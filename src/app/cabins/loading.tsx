import React from 'react'
import PropTypes from 'prop-types'
import Spinner from '../_components/Spinner'

function loading(props: any) {
  return (
    <div className="grid items-center justify-center">
  <Spinner />
  <p className="text-xl text-primary-200">Loading cabin data...</p>
</div>
  )
}

loading.propTypes = {}

export default loading
