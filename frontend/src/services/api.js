import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export const rideService = {
  buscarTodas: () => api.get('/caronas'),
  oferecer: (data) => api.post('/oferecer', data),
  atualizar: (id, data) => api.put(`/caronas/${id}`, data),
  deletar: (id) => api.delete(`/caronas/${id}`),
  reservar: (id) => api.patch(`/caronas/${id}/reservar`)
};