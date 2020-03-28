const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(req,res) {
        const incidents = await connection('incidents').select('*');
    
        return res.json(incidents);
    },
    async create(req,res) {
        const ong_id = req.headers.authorization;
        const { title, description, value } = req.body;
    
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });
    
        return res.json({ id });
    }
}