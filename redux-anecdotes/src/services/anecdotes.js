import axios from 'axios'

const getId = () => (100000 * Math.random()).toFixed(0)

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = {
    content: content,
    id: getId(),
    votes: 0
  }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const vote = async ({id, votes }) => {
  const response = await axios.patch(`${ baseUrl }/${id}`, {votes: votes + 1})
  return response.data
}

export default { getAll, createNew, vote }