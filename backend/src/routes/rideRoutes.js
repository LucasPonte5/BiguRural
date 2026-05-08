const express = require('express');
const router = express.Router();
const rideController = require('../controllers/rideController');

// --- Definição das Rotas do Sistema UFRPE-Ride ---

// Rota para listar todas as caronas (Read)
router.get('/caronas', rideController.listar);

// Rota para cadastrar nova carona (Create)
router.post('/oferecer', rideController.oferecer);

// Rota para editar informações de uma carona (Update)
router.put('/caronas/:id', rideController.editar);

// Rota para remover uma carona do sistema (Delete)
router.delete('/caronas/:id', rideController.deletar);

// Rota específica para o requisito de reserva (Partial Update)
router.patch('/caronas/:id/reservar', rideController.reservar);

module.exports = router;