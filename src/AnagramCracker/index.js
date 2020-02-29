import React, { useState } from 'react'
import Form from '../shared/Form'
import { fetchAnagrams } from '../shared/apiRequests'

const AnagramCracker = () => {
  return <Form fetchResults={fetchAnagrams} label="letters" />
}

export default AnagramCracker
