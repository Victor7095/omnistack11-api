const request = require('supertest');
const app = require('../../app');
const connection = require('../../database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const res = await request(app).post('/ongs').send({
        name: 'Nome Teste',
        email: 'email@teste.com',
        whatsapp: '1234567891',
        city: 'Cidade Teste',
        uf: 'UF'
    });

    expect(res.body).toHaveProperty('id');
    expect(res.body.id).toHaveLength(8);
  });
});