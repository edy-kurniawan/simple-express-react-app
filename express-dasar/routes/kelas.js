const express = require('express');
const router = express.Router();
const model = require('../models/index');

// GET kelas
router.get('/', async function (req, res, next) {
    try {
        const kelas = await model.kelas.findAll({
            include: 'mahasiswa'
        });
        if (kelas.length !== 0) {
            res.json({
                'status': 'OK',
                'messages': '',
                'data': kelas
            })
        } else {
            res.json({
                'status': 'ERROR',
                'messages': 'EMPTY',
                'data': {}
            })
        }
    } catch (err) {
        res.json({
            'status': 'ERROR',
            'messages': err.message,
            'data': {}
        })
    }
});

//GET by ID
router.get('/:id', async function (req, res, next) {
    try {
        const kelasId = req.params.id;
        const kelas = await model.kelas.findOne({
            where: {
                id: kelasId
            },
            include: 'mahasiswa'
        });
        if (kelas.length !== 0) {
            res.json({
                'status': 'OK',
                'messages': '',
                'data': kelas
            })
        } else {
            res.json({
                'status': 'ERROR',
                'messages': 'EMPTY',
                'data': {}
            })
        }
    } catch (err) {
        res.json({
            'status': 'ERROR',
            'messages': err.message,
            'data': {}
        })
    }
});

// POST kelas
router.post('/', async function (req, res, next) {
    try {
        const {
            nim,
            nama,
            id_kelas
        } = req.body;
        const kelas = await model.kelas.create({
            nim,
            nama,
            id_kelas
        });
        if (kelas) {
            res.status(201).json({
                'status': 'OK',
                'messages': 'kelas berhasil ditambahkan',
                'data': kelas,
            })
        }
    } catch (err) {
        res.status(400).json({
            'status': 'ERROR',
            'messages': err.message,
            'data': {},
        })
    }
});

// UPDATE kelas
router.patch('/:id', async function (req, res, next) {
    try {
        const kelasId = req.params.id;
        const {
            nim,
            nama,
            id_kelas
        } = req.body;
        const kelas = await model.kelas.update({
            nim,
            nama,
            id_kelas
        }, {
            where: {
                id: kelasId
            }
        });
        if (kelas) {
            res.json({
                'status': 'OK',
                'messages': 'kelas berhasil diupdate',
            })
        }
    } catch (err) {
        res.status(400).json({
            'status': 'ERROR',
            'messages': err.message,
            'data': {},
        })
    }
});

// DELETE kelas
router.delete('/:id', async function (req, res, next) {
    try {
        await model.kelas.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            'status': 'OK',
            'messages': 'kelas berhasil dihapus'
        })
    } catch (err) {
        res.status(400).json({
            'status': 'ERROR',
            'messages': err.message,
            'data': {},
        })
    }
});

module.exports = router;