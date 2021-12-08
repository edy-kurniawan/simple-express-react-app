const express = require('express');
const router = express.Router();
const model = require('../models/index');

// GET mahasiswa
router.get('/', async function (req, res, next) {
    try {
        const mahasiswa = await model.mahasiswa.findAll({
            include: 'kelas'
        });
        if (mahasiswa.length !== 0) {
            res.json({
                'status': 'OK',
                'messages': '',
                'data': mahasiswa
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
        const mahasiswaId = req.params.id;
        const mahasiswa = await model.mahasiswa.findOne({
            where: {
                id: mahasiswaId
            },  
            include: 'kelas'
        });
        if (mahasiswa.length !== 0) {
            res.json({
                'status': 'OK',
                'messages': '',
                'data': mahasiswa
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

// POST mahasiswa
router.post('/', async function (req, res, next) {
    try {
        const {
            nim,
            nama,
            id_kelas
        } = req.body;
        const mahasiswa = await model.mahasiswa.create({
            nim,
            nama,
            id_kelas
        });
        if (mahasiswa) {
            res.status(201).json({
                'status': 'OK',
                'messages': 'mahasiswa berhasil ditambahkan',
                'data': mahasiswa,
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

// UPDATE mahasiswa
router.patch('/:id', async function (req, res, next) {
    try {
        const mahasiswaId = req.params.id;
        const {
            nim,
            nama,
            id_kelas
        } = req.body;
        const mahasiswa = await model.mahasiswa.update({
            nim,
            nama,
            id_kelas
        }, {
            where: {
                id: mahasiswaId
            }
        });
        if (mahasiswa) {
            res.json({
                'status': 'OK',
                'messages': 'mahasiswa berhasil diupdate',
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

// DELETE mahasiswa
router.delete('/:id', async function (req, res, next) {
    try {
        await model.mahasiswa.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            'status': 'OK',
            'messages': 'mahasiswa berhasil dihapus'
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