import React, { useState } from 'react'
import Form from '../shared/Form'
import { fetchSynonyms } from '../shared/apiRequests'

const SynonymFinder = () => {
  return <Form fetchResults={fetchSynonyms} label="word" />
}

export default SynonymFinder
