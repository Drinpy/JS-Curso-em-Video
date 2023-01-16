      let nome = prompt('Qual é o seu nome?'); // Armazena o nome digitado na variável Nome

      let maisculo = nome.toUpperCase() // Armazena o AUMENTATIVO de 'nome' na variavel 'maisculo'

      let s = 'JavaScript'
        
        alert(`Número de letras na palavra JavaScript: ${s.length}`) // O '.length' apresenta a quantidade de letras da palavra apontada pela variável
      
        //Exemplo de String
        alert('É um prazer te conhecer, ' + nome + "!") // Precisa de concatenação " '+ nome +' "
        //Exemplo de String
        alert( `O ${nome} estuda na unifal!`) // NÃO precisa de concatenação

        alert(`Tchau, ${maisculo}!`)

        alert(`Eu me chamo ${maisculo} e sempre será o aumentativo do nome ${maisculo}!`)

        alert(`Número de letras de ${nome}: ${maisculo.length}`)
