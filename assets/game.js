$(document).ready(function() {
    
 //Start Variables
	var counter = 0;
	var wins = 0;
	var losses = 0;
	
 //Crystals Array
	var crystals = ['assets/images/crystal1.png','assets/images/crystal2.png','assets/images/crystal3.png','assets/images/crystal4.png'];
	
    //Update status text in <span>
	$('#win').text(wins);
	$('#loss').text(losses);
	
//Empty function to start new game...
	createCrystals();
	newGame();

	
	function newGame() {

		counter = 0;
		$('#yourScore').text(counter);
        //Create a random value between 19 and 120 and assign it to #numberTarget
		var numberToGuess = Math.floor(Math.random()*(120-19+1)+19);

		$('#numberTarget').text(numberToGuess);

        //When a crystal is clicked
		$('.crystalImage').on('click', function(){
		    //yourScore is updated in status panel
            counter = counter + $(this).data('num');
		  
		    $('#yourScore').text(counter);
            
            $('#status').empty();
            //Check is youscore is equal to targetscore
		    if (counter == numberToGuess){
		      $('#status').text('You won!');
		      wins += 1;
		      $('#win').text(wins);
		      $('#crystals').empty();
		      createCrystals();
		      newGame();
		        
		    } else if ( counter > numberToGuess){
		        $('#status').text('You lost!')
		        losses += 1;
		        $('#loss').text(losses);
		        $('#crystals').empty();
		        createCrystals();
		        newGame();
		    }
		});
	}
	
	function createCrystals () {
		var numbers = []
            //  Found how to use a while loop to create to assign to each crystal from a fellow GitHub user. Would have never figured this out left to my own devices.
            
			while(numbers.length < 4){
			  var randomnumber = Math.floor(Math.random()*(12-2)+2);
			  var check = false;
			  for (var i=0; i< numbers.length; i++){
				if (numbers[i] == randomnumber){
					check = true; break
				}
			  }
			  if(!check)numbers[numbers.length]=randomnumber;
			}		

		for (i = 0; i < numbers.length; i++) {
			var imageCrystal = $('<img>');
			imageCrystal.attr('data-num', numbers[i]);
			imageCrystal.attr('src', crystals[i]);
			imageCrystal.attr('alt', 'crystals');
			imageCrystal.addClass('crystalImage')
			$('#crystals').append(imageCrystal);
		}
	}


});