const stairs = require('../src/stairs');

describe('Testes da questão 1', () => {
    test('Verifica se a função passwordValidate existe', () => {
        expect(typeof stairs).toBe('function');
    });
    test('Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.', () => {
        expect(stairs()).toBe(undefined);
    });
    test('testa se é lançado um erro quando o parâmetro não é um número ', () => {
      expect(() => { stairs("a") }).toThrow();
    });
    test('testa se a mensagem de erro é: "Favor informar um número"', () => {
        expect(() => { stairs() }).toThrowError(new Error('Favor informar um número'));
    });
});