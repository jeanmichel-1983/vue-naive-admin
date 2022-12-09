import { request } from '@/utils'

export default {
  getPasswords: (params = {}) => request.get('passwords', { params }),
  addPassword: (data) => request.post('/password', data),
  updatePassword: (data) => request.put(`/password/${data.id}`, data),
  deletePassword: (id) => request.delete(`/password/${id}`),
}
