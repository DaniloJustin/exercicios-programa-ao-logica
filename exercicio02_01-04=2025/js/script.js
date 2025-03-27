    // Eu adicionei um "parseFloat" e um "prompt" 
    var conducao = parseFloat(prompt("digite o valor atual da passagem"))
	var conducao_dia = 4 
	var dias_mes = 30
	var gasto_diario, gasto_mensal

	gasto_diario = conducao * conducao_dia

	gasto_mensal = gasto_diario * dias_mes

    alert(" O valor gasto com conduções no mês é: R$ " + gasto_mensal)