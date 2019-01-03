class TuringMachine{

	constructor(){
		String.prototype.replaceAt = function (index, replacement){
			return this.substr(0, index) + replacement + this.substr(index+replacement.length)
		}		
	}
	
	addition(a,b){
		a = a*1
		b = b*1
		//Exception
		if(a < 0 || b < 0){
			return 'inputan salah'
		}

		//Initial Variable
		let input = ''
		let state = 'init'
		let nextState = 'init'
		let direction = 'N'
		let curr = 0
		let counter = 0
		let record = []

		/*
			INPUT ENCODER :
			(a,b) = _0^a10^b_
			(2,3) = _001000_
		*/
		input = input + '_'
		for(let i = 0; i < a; i++){
			input = input + '0'
		}
		input = input + '1'
		for(let i = 0; i < b; i++){
			input = input + '0'
		}
		input = input + '_'

		//Turing Machine
		while(true){
			counter++
			record.push({counter:counter,input:input,state:state,nextState:nextState,tape:input.charAt(curr),replaceTape:'',direction:direction})
			switch(state){
				case 'init':{
					if(input.charAt(curr) == '_'){
						state = 'q0'
						direction = 'right'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}else{
						return null
					}
					break
				}
				case 'q0':{
					if(input.charAt(curr) == '0'){
						input = input.replaceAt(curr, '_')
						state = 'q1'
						direction = 'right'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}else if(input.charAt(curr) == '1'){
						input = input.replaceAt(curr, '_')
						state = 'q2'
						direction = 'right'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}else{
						return null
					}
					break
				}
				case 'q1':{
					if(input.charAt(curr) == '0'){
						state = 'q1'
						direction = 'right'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}else if(input.charAt(curr) == '1'){
						input = input.replaceAt(curr, '0')
						state = 'q2'
						direction = 'right'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}else{
						return null
					}
					break
				}
				case 'q2':{
					let result = 0
					console.log(record)
					for(let i = 0; i < record[record.length -1].input.length; i++){
						if(record[record.length -1].input.charAt(i) == '0'){
							result++
						}
					}
					record.unshift({result:result})
					return record
				}
			}
			record[record.length - 1].nextState = state
			record[record.length - 1].direction = direction

		}
		
	}

	substraction(a,b){
		a = a*1
		b = b*1
		//exception
		if(a < 0 || b < 0 || a < b){
			alert('input salah')
			return null
		}
		//initial variable
		let input = ''
		let state = 'init'
		let nextState = 'init'
		let direction = 'N'
		let curr = 0
		let counter = 0
		let record = []

		/*
			INPUT ENCODER : 
			(a,b) = _0^b10^a_
		*/		
		input = input + '_'
		for(let i = 0; i < b; i++){
			input = input + '0'
		}
		input = input + '1'
		for(let i = 0; i < a; i++){
			input = input + '0'
		}
		input = input + '_'

		while(true){
			counter++
			record.push({counter:counter,input:input,state:state,nextState:nextState,tape:input.charAt(curr),replaceTape:'',direction:direction})
			switch(state){
				case 'init':{
					if(input.charAt(curr) == '_'){
						state = 'q0'
						direction = 'right'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}else{
						return null
					}
					break
				}
				case 'q0':{
					if(input.charAt(curr) == '0'){
						input = input.replaceAt(curr,'_')
						state = 'q1'
						direction = 'right'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}else if(input.charAt(curr) == '1'){
						input = input.replaceAt(curr,'_')
						state = 'q4'
						direction = 'right'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}else{
						return null
					}
					break
				}
				case 'q1':{
					if(input.charAt(curr) == '0' || input.charAt(curr) == '1'){
						direction = 'right'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}else if(input.charAt(curr) == '_'){
						state = 'q2'
						direction = 'left'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr--
					}else{
						return null
					}
					break
				}
				case 'q2':{
					if(input.charAt(curr) == '0'){
						input = input.replaceAt(curr, '_')
						state = 'q3'
						direction = 'left'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr--
					}else{
						return null
					}
					break
				}
				case 'q3':{
					if(input.charAt(curr) == '0' || input.charAt(curr) == '1'){
						direction = 'left'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr--
					}else if(input.charAt(curr) == '_'){
						state = 'q0'
						direction = 'right'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}else{
						return null
					}
					break
				}
				case 'q4':{
					let result = 0
					for(let i = 0; i < record[record.length -1].input.length; i++){
						if(record[record.length -1].input.charAt(i) == '0'){
							result++
						}
					}
					record.unshift({result:result})
					console.log(record)
					return record
				}
			}
			record[record.length - 1].nextState = state
			record[record.length - 1].direction = direction
		}
	}

	multiplication(a,b){
		a = a*1
		b = b*1
		//Exception
		if(a < 0 || b < 0){
			alert('input salah')
			return null
		}

		//initial variable
		let input = ''
		let state = 'init'
		let nextState = 'init'
		let direction = 'N'
		let curr = 0
		let counter = 0
		let record = []

		/*
			INPUT ENCODER : 
			(a,b) = _0^b10^a1_
		*/
		input = input + '_'
		for (let i = 0; i < a; i++) {
			input = input + '0'
		}
		input = input + '1'
		for (let i = 0; i < b; i++) {
			input = input + '0'
		}
		input = input + '1'
		input = input + '_'
		//Turing Machine
		while(true){
			counter++
			record.push({counter:counter,input:input,state:state,nextState:nextState,tape:input.charAt(curr),replaceTape:'',direction:direction})
			switch(state){
				case 'init':{
					if(input.charAt(curr) == '_'){
						state = 'q0'
						direction = 'right'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}
					break	
				}
				case 'q0':{
					if(input.charAt(curr) == '0'){
						input = input.replaceAt(curr, '_')
						state = 'q1'
						direction = 'right'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}else if(input.charAt(curr) == '1'){
						input = input.replaceAt(curr, '_')
						state = 'q7'
						direction = 'right'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}else{
						return null
					}
					break	
				}
				case 'q1':{
					if(input.charAt(curr) == '0'){
						direction = 'right'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}else if(input.charAt(curr) == '1'){
						state = 'q2'
						direction = 'right'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}else{
						return null
					}
					break	
				}
				case 'q2':{
					if(input.charAt(curr) == '0'){
						input = input.replaceAt(curr, 'X')
						state = 'q3'
						direction = 'right'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}else if(input.charAt(curr) == '1'){
						state = 'q5'
						direction = 'left'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr--
					}else{
						return null
					}
					break	
				}
				case 'q3':{
					if(input.charAt(curr) == '0' || input.charAt(curr) == '1'){
						direction = 'right'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}else if(input.charAt(curr) == '_'){
						input = input.replaceAt(curr, '0')
						input = input + '_'
						state = 'q4'
						direction = 'left'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr--
					}else{
						return null
					}
					break	
				}
				case 'q4':{
					if(input.charAt(curr) == '0' || input.charAt(curr) == '1'){
						direction = 'left'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr--
					}else if(input.charAt(curr) == 'X'){
						direction = 'right'
						state = 'q2'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}else{
						return null
					}
					break	
				}
				case 'q5':{
					if(input.charAt(curr) == 'X'){
						input = input.replaceAt(curr, '0')
						direction = 'left'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr--
					}else if(input.charAt(curr) == '1'){
						state = 'q6'
						direction = 'left'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr--
					}else{
						return null
					}
					break	
				}
				case 'q6':{
					if(input.charAt(curr) == '0'){
						direction = 'left'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr--
					}else if(input.charAt(curr) == '_'){
						state = 'q0'
						direction = 'right'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}else{
						return null
					}
					break	
				}
				case 'q7':{
					if(input.charAt(curr) == '0'){
						input = input.replaceAt(curr, '_')
						direction = 'right'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}else if(input.charAt(curr) == '1'){
						input = input.replaceAt(curr, '_')
						state = 'q8'
						direction = 'right'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}else{
						return null
					}
					break	
				}
				case 'q8':{
					let result = 0
					for(let i = 0; i < record[record.length -1].input.length; i++){
						if(record[record.length -1].input.charAt(i) == '0'){
							result++
						}
					}
					record.unshift({result:result})
					return record
				}
			}
			record[record.length - 1].nextState = state
			record[record.length - 1].direction = direction
		}

	}

	division(a,b){
		a = a*1
		b = b*1
		if(a < b || a <= 0 || b <= 0 || a == null || b == null){
			alert('inputan salah')
			return null
		}
		//initial variable
		let input = ''
		let state = 'init'
		let nextState = 'init'
		let direction = 'N'
		let curr = 0
		let counter = 0
		let record = []
		/*
			INPUT ENCODER : 
			(a,b) = _0^b10^a1_
		*/
		input = input + '_'
		for(let i = 0; i < b; i++){
			input = input + '0'
		}
		input = input + '1'
		for(let i = 0; i < a; i++){
			input = input + '0'
		}
		input = input + '1'
		input = input + '_'
		
		//Turing Machine
		while(true){
			counter++
			record.push({counter:counter,input:input,state:state,nextState:nextState,replaceTape:'',tape:input.charAt(curr),direction:direction})
			switch(state){
				case 'init':{
					if(input.charAt(curr) == '_'){
						state = 'q0'
						direction = 'right'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}else{
						return null
					}
					break
				}case 'q0':{
					if(input.charAt(curr) == '0'){
						input = input.replaceAt(curr,'X')
						state = 'q1'
						direction = 'right'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}else if(input.charAt(curr) == '1'){
						state = 'q5'
						direction = 'right'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}else{
						return null
					}
					break
				}case 'q1':{
					if(input.charAt(curr) == '0'){
						direction = 'right'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}else if(input.charAt(curr) == '1'){
						state = 'q2'
						direction = 'right'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}else{
						return null
					}
					break
				}case 'q2':{
					if(input.charAt(curr) == '0'){
						direction = 'right'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}else if(input.charAt(curr) == '1' || input.charAt(curr) == 'X'){
						state = 'q3'
						direction = 'left'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr--
					}else{
						return null
					}
					break
				}case 'q3':{
					if(input.charAt(curr) == '0'){
						input = input.replaceAt(curr,'X')
						state = 'q4'
						direction = 'left'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr--
					}else if(input.charAt(curr) == '1'){
						input = input.replaceAt(curr,'_')
						state = 'q9'
						direction = 'left'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr--
					}else{
						return null
					}
					break
				}case 'q4':{
					if(input.charAt(curr) == '0' || input.charAt(curr) == '1'){
						direction = 'left'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr--
					}else if(input.charAt(curr) == 'X'){
						state = 'q0'
						direction = 'right'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}else{
						return null
					}
					break
				}case 'q5':{
					if(input.charAt(curr) == '0' || input.charAt(curr) == '1' || input.charAt(curr) == 'X'){
						direction = 'right'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}else if(input.charAt(curr) == '_'){
						input = input.replaceAt(curr, '0')
						input = input + '_'
						state = 'q6'
						direction = 'left'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr--
					}else{
						return null
					}
					break
				}case 'q6':{
					if(input.charAt(curr) == '0'){
						direction = 'left'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr--
					}else if(input.charAt(curr) == '1'){
						state = 'q7'
						direction = 'left'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr--
					}else{
						return null
					}
					break
				}case 'q7':{
					if(input.charAt(curr) == '0' || input.charAt(curr) == 'X'){
						direction = 'left'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr--
					}else if(input.charAt(curr) == '1'){
						state = 'q8'
						direction = 'left'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr--
					}else{
						return null
					}
					break
				}case 'q8':{
					if(input.charAt(curr) == 'X'){
						input = input.replaceAt(curr,'0')
						direction = 'left'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr--
					}else if(input.charAt(curr) == '_'){
						state = 'q0'
						direction = 'right'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}else{
						return null
					}
					break
				}case 'q9':{
					if(input.charAt(curr) == '0' || input.charAt(curr) == 'X'){
						input = input.replaceAt(curr, '_')
						direction = 'left'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr--
					}else if(input.charAt(curr) == '_'){
						direction = 'right'
						state = 'q10'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}else{
						return null
					}
					break
				}case 'q10':{
					if(input.charAt(curr) == '_' || input.charAt(curr) == 'X'){
						input = input.replaceAt(curr, '_')
						direction = 'right'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}else if(input.charAt(curr) == '1'){
						input = input.replaceAt(curr, '_')
						direction = 'right'
						state = 'q11'
						record[record.length - 1].replaceTape = input.charAt(curr)
						curr++
					}else{
						return null
					}
					break
				}case 'q11':{
					let result = 0
					for(let i = 0; i < record[record.length -1].input.length; i++){
						if(record[record.length -1].input.charAt(i) == '0'){
							result++
						}
					}
					record.unshift({result:result})
					return record
				}
			}
			record[record.length - 1].nextState = state
			record[record.length - 1].direction = direction
			
		}

	}
	factorial(a){
		a = a*1
		if(a <= 0 || a == null){
			alert('inputan salah')
			return null
		}
		//initial variable
		let input1 = ''
		let input2 = '___'
		let input3 = '___'
			let state = 'init'
		let nextState = 'init'
		let direction1 = 'netral'
		let direction2 = 'netral'
		let direction3 = 'netral'
		let curr1 = 0
		let curr2 = 0
		let curr3 = 0
		let counter = 0
		let record = []
		/*
			INPUT ENCODER : 
			(a,b) = _0^b10^a1_
		*/
		input1 = input1 + '_'
		for(let i = 0; i < a; i++){
			input1 = input1 + '0'
		}
		input1 = input1 + '1'
		input1 = input1 + '_'
		
		//Turing Machine
		while(true){
			counter++
			record.push({counter:counter,input1:input1,input2:input2,input3:input3,state:state,nextState:nextState,tape1:input1.charAt(curr1),tape2:input2.charAt(curr2),tape3:input3.charAt(curr3),rTape1:'',rTape2:'',rTape3:'',direction1:direction1,direction2:direction2,direction3:direction3})
			switch(state){
				case 'init':{
					if(input1.charAt(curr1) == '_' && input2.charAt(curr2) == '_' && input3.charAt(curr2) == '_'){
						state = 'q0'
						direction1 = 'right'
						direction2 = 'right'
						direction3 = 'right'
						record[record.length - 1].rTape1 = input1.charAt(curr1)
						record[record.length - 1].rTape2 = input2.charAt(curr2)
						record[record.length - 1].rTape3 = input3.charAt(curr3)
						curr1++
						curr2++
						curr3++
					}else{
						return null
					}
					break
				}case 'q0':{
					if(input1.charAt(curr1) == '0' && input2.charAt(curr2) == '_' && input3.charAt(curr3) == '_' ){
						input2 = input2.replaceAt(curr2, '0')
						input2 = input2 + '_'
						input2 = '_' + input2
						curr2++
						record[record.length - 1].rTape1 = input1.charAt(curr1)
						record[record.length - 1].rTape2 = input2.charAt(curr2)
						record[record.length - 1].rTape3 = input3.charAt(curr3)
						direction1 = 'right'
						direction2 = 'right'
						direction3 = 'netral'
						curr1++
						curr2++
					}else if(input1.charAt(curr1) == '1' && input2.charAt(curr2) == '_' && input3.charAt(curr3) == '_'){
						input1 = input1.replaceAt(curr1, '_')
						state = 'q1'
						direction1 = 'left'
						direction2 = 'left'
						direction3 = 'netral'
						record[record.length - 1].rTape1 = input1.charAt(curr1)
						record[record.length - 1].rTape2 = input2.charAt(curr2)
						record[record.length - 1].rTape3 = input3.charAt(curr3)
						curr1--
						curr2--
					}else{
						return null
					}
					break
				}case 'q1':{
					if(input1.charAt(curr1) == '0' && input2.charAt(curr2) == '0' && input3.charAt(curr3) == '_'){
						
						input2 = input2.replaceAt(curr2, '_')
						state = 'q2'
						direction1 = 'netral'
						direction2 = 'left'
						direction3 = 'right'
						record[record.length - 1].rTape1 = input1.charAt(curr1)
						record[record.length - 1].rTape2 = input2.charAt(curr2)
						record[record.length - 1].rTape3 = input3.charAt(curr3)
						curr2--
						curr3++
					}else if(input1.charAt(curr1) == '_' && input2.charAt(curr2) == '_' && input3.charAt(curr3) == '_'){
						input1 = input1.replaceAt(curr1, '0')
						input1 = input1 + '_'
						input1 = '_' + input1
						curr1++
						state = 'q2'
						record[record.length - 1].rTape1 = input1.charAt(curr1)
						record[record.length - 1].rTape2 = input2.charAt(curr2)
						record[record.length - 1].rTape3 = input3.charAt(curr3)
						direction1 = 'netral'
						direction2 = 'netral'
						direction3 = 'netral'
					}else{
						return null
					}
					break
				}case 'q2':{
					if(input1.charAt(curr1) == '0' && input2.charAt(curr2) == '0' && input3.charAt(curr3) == '_'){
						console.log('masyuk q2')
						input3 = input3.replaceAt(curr3, '0')
						input3 = input3 + '_'
						input3 = '_' + input3
						curr3++
						record[record.length - 1].rTape1 = input1.charAt(curr1)
						record[record.length - 1].rTape2 = input2.charAt(curr2)
						record[record.length - 1].rTape3 = input3.charAt(curr3)
						direction1 = 'left'
						direction2 = 'netral'
						direction3 = 'right'
						curr1--
						curr3++
					}else if(input1.charAt(curr1) == '0' && input2.charAt(curr2) == '0' && input3.charAt(curr3) == '0'){
						record[record.length - 1].rTape1 = input1.charAt(curr1)
						record[record.length - 1].rTape2 = input2.charAt(curr2)
						record[record.length - 1].rTape3 = input3.charAt(curr3)
						direction1 = 'left'
						direction2 = 'netral'
						direction3 = 'right'
						curr1--
						curr3++
					}else if(input1.charAt(curr1) == '_' && input2.charAt(curr2) == '0' && input3.charAt(curr3) == '_'){
						record[record.length - 1].rTape1 = input1.charAt(curr1)
						record[record.length - 1].rTape2 = input2.charAt(curr2)
						record[record.length - 1].rTape3 = input3.charAt(curr3)
						direction1 = 'right'
						direction2 = 'left'
						direction3 = 'netral'
						state = 'q3'
						curr1++
						curr2--
					}else if(input1.charAt(curr1) == '0' && input2.charAt(curr2) == '_' && input3.charAt(curr3) == '_'){
						state = 'q7'
						record[record.length - 1].rTape1 = input1.charAt(curr1)
						record[record.length - 1].rTape2 = input2.charAt(curr2)
						record[record.length - 1].rTape3 = input3.charAt(curr3)
						direction1 = 'netral'
						direction2 = 'right'
						direction3 = 'netral'
						curr2++
					}else{
						return null
					}
					break
				}case 'q3':{
					if(input1.charAt(curr1) == '0' && input2.charAt(curr2) == '0' && input3.charAt(curr3) == '_'){
						input3 = input3.replaceAt(curr3, '0')
						input3 = input3 + '_'
						input3 = '_' + input3
						curr3++
						record[record.length - 1].rTape1 = input1.charAt(curr1)
						record[record.length - 1].rTape2 = input2.charAt(curr2)
						record[record.length - 1].rTape3 = input3.charAt(curr3)
						direction1 = 'right'
						direction2 = 'netral'
						direction3 = 'right'
						curr1++
						curr3++
					}else if(input1.charAt(curr1) == '0' && input2.charAt(curr2) == '0' && input3.charAt(curr3) == '0'){
						direction1 = 'right'
						direction2 = 'netral'
						direction3 = 'right'
						record[record.length - 1].rTape1 = input1.charAt(curr1)
						record[record.length - 1].rTape2 = input2.charAt(curr2)
						record[record.length - 1].rTape3 = input3.charAt(curr3)
						curr1++
						curr3++
					}else if(input1.charAt(curr1) == '_' && input2.charAt(curr2) == '0' && input3.charAt(curr3) == '_'){
						state = 'q2'
						direction1 = 'left'
						direction2 = 'left'
						direction3 = 'netral'
						record[record.length - 1].rTape1 = input1.charAt(curr1)
						record[record.length - 1].rTape2 = input2.charAt(curr2)
						record[record.length - 1].rTape3 = input3.charAt(curr3)
						curr1--
						curr2--
					}else if(input1.charAt(curr1) == '0' && input2.charAt(curr2) == '_' && input3.charAt(curr3) == '_'){
						state = 'q4'
						direction1 = 'netral'
						direction2 = 'right'
						direction3 = 'netral'
						record[record.length - 1].rTape1 = input1.charAt(curr1)
						record[record.length - 1].rTape2 = input2.charAt(curr2)
						record[record.length - 1].rTape3 = input3.charAt(curr3)
						curr2++
					}else{
						return null
					}
					break
				}case 'q4':{
					if(input1.charAt(curr1) == '0' && input2.charAt(curr2) == '0' && input3.charAt(curr3) == '_'){
						state = 'q5'
						input2 = input2.replaceAt(curr2, '_')
						direction1 = 'netral'
						direction2 = 'right'
						direction3 = 'left'
						record[record.length - 1].rTape1 = input1.charAt(curr1)
						record[record.length - 1].rTape2 = input2.charAt(curr2)
						record[record.length - 1].rTape3 = input3.charAt(curr3)
						curr2++
						curr3--
					}else{
						return null
					}
					break
				}case 'q5':{
					if(input1.charAt(curr1) == '0' && input2.charAt(curr2) == '0' && input3.charAt(curr3) == '0'){
						direction1 = 'right'
						direction2 = 'netral'
						direction3 = 'left'
						record[record.length - 1].rTape1 = input1.charAt(curr1)
						record[record.length - 1].rTape2 = input2.charAt(curr2)
						record[record.length - 1].rTape3 = input3.charAt(curr3)
						curr1++
						curr3--
					}else if(input1.charAt(curr1) == '_' && input2.charAt(curr2) == '0' && input3.charAt(curr3) == '0'){
						input1 = input1.replaceAt(curr1, '0')
						input1 = input1 + '_'
						input1 = '_' + input1
						curr1++
						direction1 = 'right'
						direction2 = 'netral'
						direction3 = 'left'
						record[record.length - 1].rTape1 = input1.charAt(curr1)
						record[record.length - 1].rTape2 = input2.charAt(curr2)
						record[record.length - 1].rTape3 = input3.charAt(curr3)
						curr1++
						curr3--
					}else if(input1.charAt(curr1) == '_' && input2.charAt(curr2) == '0' && input3.charAt(curr3) == '0'){
						input1 = input1.replaceAt(curr1, '0')
						input1 = input1 + '_'
						input1 = '_' + input1
						curr1++
						record[record.length - 1].rTape1 = input1.charAt(curr1)
						record[record.length - 1].rTape2 = input2.charAt(curr2)
						record[record.length - 1].rTape3 = input3.charAt(curr3)
						direction1 = 'right'
						direction2 = 'netral'
						direction3 = 'left'
						curr1++
						curr3--
					}else if(input1.charAt(curr1) == '_' && input2.charAt(curr2) == '0' && input3.charAt(curr3) == '_'){
						state = 'q6'
						direction1 = 'left'
						direction2 = 'right'
						direction3 = 'netral'
						record[record.length - 1].rTape1 = input1.charAt(curr1)
						record[record.length - 1].rTape2 = input2.charAt(curr2)
						record[record.length - 1].rTape3 = input3.charAt(curr3)
						curr1--
						curr2++
					}else if(input1.charAt(curr1) == '0' && input2.charAt(curr2) == '_' && input3.charAt(curr3) == '0'){
						state = 'q10'
						direction1 = 'netral'
						direction2 = 'netral'
						direction3 = 'netral'
						record[record.length - 1].rTape1 = input1.charAt(curr1)
						record[record.length - 1].rTape2 = input2.charAt(curr2)
						record[record.length - 1].rTape3 = input3.charAt(curr3)
					}else{
						return null
					}
					break
				}case 'q6':{
					if(input1.charAt(curr1) == '0' && input2.charAt(curr2) == '0' && input3.charAt(curr3) == '_'){
						direction1 = 'netral'
						direction2 = 'right'
						direction3 = 'netral'
						record[record.length - 1].rTape1 = input1.charAt(curr1)
						record[record.length - 1].rTape2 = input2.charAt(curr2)
						record[record.length - 1].rTape3 = input3.charAt(curr3)
						curr2++
					}else if(input1.charAt(curr1) == '0' && input2.charAt(curr2) == '_' && input3.charAt(curr3) == '_'){
						state = 'q2'
						direction1 = 'netral'
						direction2 = 'left'
						direction3 = 'right'
						record[record.length - 1].rTape1 = input1.charAt(curr1)
						record[record.length - 1].rTape2 = input2.charAt(curr2)
						record[record.length - 1].rTape3 = input3.charAt(curr3)
						curr2--
						curr3++
					}else{
						return null
					}
					break
				}case 'q7':{
					if(input1.charAt(curr1) == '0' && input2.charAt(curr2) == '0' && input3.charAt(curr3) == '_'){
						input2 = input2.replaceAt(curr2, '_')
						state = 'q8'
						direction1 = 'netral'
						direction2 = 'right'
						direction3 = 'left'
						record[record.length - 1].rTape1 = input1.charAt(curr1)
						record[record.length - 1].rTape2 = input2.charAt(curr2)
						record[record.length - 1].rTape3 = input3.charAt(curr3)
						curr2++
						curr3--
					}else{
						return null
					}
					break
				}case 'q8':{
					if(input1.charAt(curr1) == '0' && input2.charAt(curr2) == '0' && input3.charAt(curr3) == '0'){
						direction1 = 'left'
						direction2 = 'netral'
						direction3 = 'left'
						record[record.length - 1].rTape1 = input1.charAt(curr1)
						record[record.length - 1].rTape2 = input2.charAt(curr2)
						record[record.length - 1].rTape3 = input3.charAt(curr3)
						curr1--
						curr3--
					}else if(input1.charAt(curr1) == '_' && input2.charAt(curr2) == '0' && input3.charAt(curr3) == '0'){
						input1 = input1.replaceAt(curr1, '0')
						input1 = input1 + '_'
						input1 = '_' + input1
						curr1++
						record[record.length - 1].rTape1 = input1.charAt(curr1)
						record[record.length - 1].rTape2 = input2.charAt(curr2)
						record[record.length - 1].rTape3 = input3.charAt(curr3)
						direction1 = 'left'
						direction2 = 'netral'
						direction3 = 'left'
						curr1--
						curr3--
					}else if(input1.charAt(curr1) == '_' && input2.charAt(curr2) == '0' && input3.charAt(curr3) == '_'){
						state = 'q9'
						direction1 = 'right'
						direction2 = 'right'
						direction3 = 'netral'
						record[record.length - 1].rTape1 = input1.charAt(curr1)
						record[record.length - 1].rTape2 = input2.charAt(curr2)
						record[record.length - 1].rTape3 = input3.charAt(curr3)
						curr1++
						curr2++
					}else if(input1.charAt(curr1) == '0' && input2.charAt(curr2) == '_' && input3.charAt(curr3) == '0'){
						state = 'q10'
						direction1 = 'netral'
						direction2 = 'netral'
						direction3 = 'netral'
						record[record.length - 1].rTape1 = input1.charAt(curr1)
						record[record.length - 1].rTape2 = input2.charAt(curr2)
						record[record.length - 1].rTape3 = input3.charAt(curr3)
					}else{
						return null
					}
					break
				}case 'q9':{
					if(input1.charAt(curr1) == '0' && input2.charAt(curr2) == '0' && input3.charAt(curr3) == '_'){
						direction1 = 'netral'
						direction2 = 'right'
						direction3 = 'netral'
						record[record.length - 1].rTape1 = input1.charAt(curr1)
						record[record.length - 1].rTape2 = input2.charAt(curr2)
						record[record.length - 1].rTape3 = input3.charAt(curr3)
						curr2++
					}else if(input1.charAt(curr1) == '0' && input2.charAt(curr2) == '_' && input3.charAt(curr3) == '_'){
						state = 'q3'
						direction1 = 'netral'
						direction2 = 'left'
						direction3 = 'right'
						record[record.length - 1].rTape1 = input1.charAt(curr1)
						record[record.length - 1].rTape2 = input2.charAt(curr2)
						record[record.length - 1].rTape3 = input3.charAt(curr3)
						curr2--
						curr3++
					}else{
						return null
					}
					break
				}case 'q10':{
					let result = 0
					for(let i = 0; i < record[record.length -1].input1.length; i++){
						if(record[record.length -1].input1.charAt(i) == '0'){
							result++
						}
					}
					record.unshift({result:result})
					console.log(record)
					return record
				}
			}
			record[record.length - 1].nextState = state
			record[record.length - 1].direction1 = direction1
			record[record.length - 1].direction2 = direction2
			record[record.length - 1].direction3 = direction3
		}
	}

}




