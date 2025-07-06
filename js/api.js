const BASE_URL = 'http://localhost:3000'

const api = {
  async buscarPensamentos() {
    try {
      const response = await axios.get(`${BASE_URL}/pensamentos`)
      return await response.data
    }
    catch {
      alert('Erro ao buscar pensamentos')
      throw error
    }
  },

  async salvarPensamento(pensamento) {
    try {
      const response = await axios.post(`${BASE_URL}/pensamentos`, pensamento)
      return await response.data
    }
    catch {
      alert('Erro ao salvar pensamento')
      throw error
    }
  },

  async buscarPensamentoPorID(id) {
    try {
      const response = await axios.get(`${BASE_URL}/pensamentos${id}`)
      return await response.data
    }
    catch {
      alert('Erro ao buscar pensamento')
      throw error
    }
  },

  async editarPensamento(pensamento) {
    try {
      const response = await axios.put(`${BASE_URL}/pensamentos/${pensamento.id}`, pensamento)
      return await response.data
    }
    catch {
      alert('Erro ao editar pensamento')
      throw error
    }
  },

  async excluirPensamento(id) {
    try {
      const response = await axios.delete(`${BASE_URL}/pensamentos/${id}`)
      return await response.data
    }
    catch {
      alert('Erro ao excluir um pensamento')
      throw error
    }
  }

}

export default api
