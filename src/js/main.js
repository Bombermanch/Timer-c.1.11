const addBtn = document.querySelector(".btn-add"),
	  minusBtn = document.querySelector(".btn-minus"),
	  resetBtn = document.querySelector(".btn-reset"),
	  startBtn = document.querySelector(".btn-start"),
	  //pauseBtn = document.querySelector(".btn-pause"),
	  minutesInput = document.querySelector(".timer__minutes"),
	  event = "mousedown",
	  secondsInput = document.querySelector(".timer__seconds"),
	  timerBlock = document.querySelector(".timer__numbers"),
	  finallyMessage = document.querySelector(".finally-message")

function addEvent(element){
	element.addEventListener( `${event}` , function(){
		if (element == addBtn){			
			add();
		}
		else if (element == resetBtn){
			reset();
			timerBlock.classList.remove('d-none')
			finallyMessage.classList.add('d-none')
		}
		else if (element == minusBtn){
			minus();
		}
		else if (element == startBtn){			
			const startTimer = setInterval(function(){
				minus();
				element.setAttribute('disabled', 'true')
				if (+secondsInput.value == 0){					
					element.removeAttribute('disabled')
					clearTimeout(startTimer)
					timerBlock.classList.add('d-none')
					finallyMessage.classList.remove('d-none')
				}
			}, 1000);			
		}
			
	});
}

function add(){
	if (secondsInput.value < 9){
	secondsInput.value++;
	secondsInput.value = '0' + secondsInput.value;	
	}
	else if (secondsInput.value < 59 ){
		secondsInput.value++
	}
	else if (secondsInput.value == 59 && minutesInput.value < 9){
		secondsInput.value = '00';
		minutesInput.value++;
		minutesInput.value = '0' + minutesInput.value;
		

	}
	else if (minutesInput.value >=9 ){
		secondsInput.value = '00';
		minutesInput.value++;
	}
	
}

function minus(){
	if (secondsInput.value <= 10 && secondsInput.value != '00'){
	secondsInput.value--;
	secondsInput.value = '0' + secondsInput.value;	
	}
	else if (secondsInput.value == '00' &&  minutesInput.value != '00'){
		secondsInput.value = 59;
		minutesInput.value--;
		minutesInput.value = '0' + minutesInput.value;
	}
	else if(minutesInput.value == '00' && secondsInput.value == '00'){
		reset();
	}
	else{
		secondsInput.value--;
	}
	
}

function reset(){
	minutesInput.value = '00'
	secondsInput.value = '00'
}


addEvent(addBtn);
addEvent(minusBtn);
addEvent(resetBtn);
addEvent(startBtn);
addEvent(pauseBtn);  



