/*
================================================================================
 Plataforma de Testes de Lógica de Programação (:
================================================================================

 INSTRUÇÕES PARA O TESTE:
 1. Seu objetivo é fazer com que TODOS os testes passem.
 2. Vá até a seção "ÁREA DE CÓDIGO" e implemente a lógica
    de cada uma das funções.
 3. NÃO ALTERE NADA FORA da área designada para seu código.
 4. Para rodar os testes, execute no terminal: node teste-bruna.js

================================================================================
*/


// =============================================================================
//  ENGINE DE TESTES (NÃO MODIFICAR ESTA SEÇÃO)
// =============================================================================

function deepEqual(a, b) {
  if (a === b) return true;

  if (a && b && typeof a === 'object' && typeof b === 'object') {
    if (a.constructor !== b.constructor) return false;

    if (Array.isArray(a)) {
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.length; i++) {
        if (!deepEqual(a[i], b[i])) return false;
      }
      return true;
    }

    if (Object.keys(a).length !== Object.keys(b).length) return false;
    for (const key in a) {
      if (!b.hasOwnProperty(key) || !deepEqual(a[key], b[key])) return false;
    }
    return true;
  }
  return false;
}

function runTests(problemName, userFunction, testCases) {
  console.log(`\n--- Executando Testes para: [${problemName}] ---`);
  let passes = 0;
  testCases.forEach((test, index) => {
    const testName = test.name || `Teste ${index + 1}`;
    try {
      const result = userFunction(...test.input);
      const passed = deepEqual(result, test.expected);

      if (passed) {
        console.log(`  ✅ ${testName}: Passou`);
        passes++;
      } else {
        console.log(`  ❌ ${testName}: Falhou`);
        console.log(`     - Entrada:  ${JSON.stringify(test.input)}`);
        console.log(`     - Esperado: ${JSON.stringify(test.expected)}`);
        console.log(`     - Recebido: ${JSON.stringify(result)}`);
      }
    } catch (error) {
      console.log(`  ❌ ${testName}: Erro durante a execução - ${error.message}`);
    }
  });
  console.log(`--------------------------------------------------`);
  console.log(`Resultado para [${problemName}]: ${passes} de ${testCases.length} testes passaram.`);
  console.log(`--------------------------------------------------`);
}


// =============================================================================
//  ÁREA DE CÓDIGO  (MODIFIQUE APENAS AQUI)
// =============================================================================

/**
 * QUESTÃO 1: FizzBuzz
 * Problema: Modificamos o FizzBuzz! Em vez de imprimir, a função deve retornar
 * um array com os resultados da sequência de 1 a n.
 */
function fizzBuzz(n) {
  // SEU CÓDIGO AQUI
  return []; // Apague esta linha e implemente sua solução
}


/**
 * QUESTÃO 2: Fatorial
 * Problema: Retorne o fatorial do número `num`.
 */
function fatorial(num) {
  // SEU CÓDIGO AQUI
  return null; // Apague esta linha e implemente sua solução
}


/**
 * QUESTÃO 3: Verificador de Palíndromo
 * Problema: Retorne `true` se `str` for um palíndromo.
 * A verificação deve ignorar espaços, pontuação e maiúsculas/minúsculas.
 */
function ehPalindromo(str) {
  // SEU CÓDIGO AQUI
  return null; // Apague esta linha e implemente sua solução
}


/**
 * QUESTÃO 4: Sequência de Fibonacci
 * Problema: Retorne o n-ésimo termo da sequência de Fibonacci.
 */
function fibonacci(n) {
  // SEU CÓDIGO AQUI
  return null; // Apague esta linha e implemente sua solução
}


/**
 * QUESTÃO 5: Mediana de Dois Arrays (Difícil)
 */
function encontrarMediana(arr1, arr2) {
  // SEU CÓDIGO AQUI
  return null; // Apague esta linha e implemente sua solução
}


/**
 * QUESTÃO 6: Par ou Ímpar (Fácil)
 */
function ehPar(num) {
  // SEU CÓDIGO AQUI
  return null; // Apague esta linha e implemente sua solução
}


/**
 * QUESTÃO 7: Remover Duplicatas (Difícil)
 */
function removerDuplicatas(arr) {
  // SEU CÓDIGO AQUI
  return []; // Apague esta linha e implemente sua solução
}


/**
 * QUESTÃO 8: Encontrar o Maior Número (Fácil)
 */
function encontrarMaior(numeros) {
  // SEU CÓDIGO AQUI
  return null; // Apague esta linha e implemente sua solução
}


// =============================================================================
//  DEFINIÇÃO E EXECUÇÃO DOS TESTES (NÃO MODIFICAR ESTA SEÇÃO)
// =============================================================================

// Casos de teste para FizzBuzz
runTests("FizzBuzz", fizzBuzz, [
  { name: "Teste básico (n=5)", input: [5], expected: [1, 2, "Fizz", 4, "Buzz"] },
  { name: "Teste com FizzBuzz (n=15)", input: [15], expected: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"] },
  { name: "Teste pequeno (n=1)", input: [1], expected: [1] },
]);

// Casos de teste para Fatorial
runTests("Fatorial", fatorial, [
    { name: "Teste padrão (5!)", input: [5], expected: 120 },
    { name: "Teste de caso base (0!)", input: [0], expected: 1 },
    { name: "Teste de caso base (1!)", input: [1], expected: 1 },
]);

// Casos de teste para Palíndromo
runTests("Palíndromo", ehPalindromo, [
    { name: "Teste simples", input: ["Arara"], expected: true },
    { name: "Teste com frase e espaços", input: ["Anotaram a data da maratona"], expected: true },
    { name: "Teste com pontuação e maiúsculas", input: ["Ame a ema!"], expected: true },
    { name: "Teste negativo", input: ["Plataforma"], expected: false },
]);

// Casos de teste para Fibonacci
runTests("Fibonacci", fibonacci, [
    { name: "Teste termo 7", input: [7], expected: 13 },
    { name: "Teste termo 0", input: [0], expected: 0 },
    { name: "Teste termo 1", input: [1], expected: 1 },
    { name: "Teste termo 10", input: [10], expected: 55 },
]);

// Casos de teste para Mediana
runTests("Mediana de Arrays", encontrarMediana, [
    { name: "Teste com resultado ímpar", input: [[1, 3], [2]], expected: 2 },
    { name: "Teste com resultado par", input: [[1, 2], [3, 4]], expected: 2.5 },
    { name: "Teste com arrays de tamanhos diferentes", input: [[1, 5, 10], [2, 3, 7, 8]], expected: 5 },
]);

// Casos de teste para Par ou Ímpar
runTests("Par ou Ímpar", ehPar, [
    { name: "Teste com número par", input: [10], expected: true },
    { name: "Teste com número ímpar", input: [7], expected: false },
    { name: "Teste com zero", input: [0], expected: true },
]);

// Casos de teste para Remover Duplicatas
runTests("Remover Duplicatas", removerDuplicatas, [
    { name: "Teste com números", input: [[1, 2, 2, 3, 4, 4, 5]], expected: [1, 2, 3, 4, 5] },
    { name: "Teste com strings", input: [["a", "b", "a", "c"]], expected: ["a", "b", "c"] },
    { name: "Teste sem duplicatas", input: [[10, 20, 30]], expected: [10, 20, 30] },
    { name: "Teste com array vazio", input: [[]], expected: [] },
]);

// Casos de teste para Encontrar o Maior Número
runTests("Encontrar o Maior Número", encontrarMaior, [
    { name: "Teste padrão", input: [[10, 50, 2, 9, 45]], expected: 50 },
    { name: "Teste com números negativos", input: [[-1, -5, -10]], expected: -1 },
    { name: "Teste com um único elemento", input: [[100]], expected: 100 },
]);