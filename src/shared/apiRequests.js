const baseUrl = process.env.REACT_APP_BACKEND_URL

export const fetchMatches = async pattern => {
  var url = new URL(baseUrl + '/api/matches')
  url.searchParams.append('pattern', pattern)
  const response = await fetch(url)
  return response.json()
}

export const fetchAnagrams = async letters => {
  var url = new URL(baseUrl + '/api/anagrams')
  url.searchParams.append('letters', letters)
  const response = await fetch(url)
  return response.json()
}

export const fetchSynonyms = async word => {
  var url = new URL(baseUrl + '/api/synonyms')
  url.searchParams.append('word', word)
  const response = await fetch(url)
  return response.json()
}

export const fetchDefinitions = async word => {
  var url = new URL(baseUrl + '/api/definitions')
  url.searchParams.append('word', word)
  const response = await fetch(url)
  return response.json()
}
