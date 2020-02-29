import React, { useState } from 'react'
import Form from '../shared/Form'
import { fetchDefinitions } from '../shared/apiRequests'

const DefinitionFinder = () => {
  return <Form fetchResults={fetchDefinitions} label="word" />
}

export default DefinitionFinder
