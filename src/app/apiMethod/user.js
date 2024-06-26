import client, { API_URL } from './client'

export const user = () => {
  return {
    fetchUsers: async (searchQuery = '', status = '', society = '') => {
      try {
        const response = await fetch(`${API_URL}/users?timestamp=${Date.now()}&searchQuery=${searchQuery}&status=${status}&society=${society}`, { cache: 'no-cache', next: { revalidate: 5 } })
        const data = await response.json()

        return { data }
      } catch (error) {
        throw error
      }
    },
    fetchOwners: async () => {
      try {
        const response = await fetch(`${API_URL}/owners`, { cache: 'no-cache', next: { revalidate: 5 } })
        const data = await response.json()

        return { data }
      } catch (error) {
        throw error
      }
    },
    updateUser: async data => {
      try {
        const response = await client.put(`/user/${data.user_id}`, data)
        return response
      } catch (error) {
        throw error
      }
    },
  }
}
