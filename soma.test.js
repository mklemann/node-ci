const soma = require('./index')

test('Teste soma 1 + 1', () => {
    expect(soma(1,1)).toBe(2)
})