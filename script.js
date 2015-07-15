function init() 
{
	/// <summary>Initiates the game. It clears the previous clock, 
	///		initialise the variables, sets the user images to 0, inserts all the
	/// default images, shuffles the deck and starts the counting time</summary>
      
      
	clearTimeout(timer_id);
	/// <var type='Number'>Set minutes to 0 for countTime function</var>
 	minute = 0;
 	/// <var type='Number'>Set counter for clicked images to 0</var>
 	counter_for_clickedimages = 0; 
 	/// <var type='Number'>Set counter for finished images to 0</var>
 	counter_for_finishedimage = 0; 
 	/// <var type='Number'>Intiate timer id for setTimerOut function in 
 	/// countTime function</var>
 	timer_id = 0;
 	/// <var type='Number'>Set seconds to 0 for countTime function</var>
 	seconds=0;
	allow_click = true; 
	/// <var>Set the total number of images</var>
	number_of_images = 10;
	
	setUserImages();
	shuffle(map_to_image);
	insertDefaultImages();
	countTime();
	
}


function setUserImages()
{
	/// <summary>It sets the all user_images array to 0. By default this array
	/// value would be 0. Only when user makes 2 successfull pairs for cards, 
	/// this would set 1 for each of the 2 respective image ids </summary>
		for (var i = 0; i < number_of_images ; i++) {
		user_images[i] = 0;
	}
}

function insertDefaultImages()
{
	/// <summary>It sets all the card images to deck-back i.e. back of the card.
	/// It is called when game is completed</summary>
	for (var i = 0; i < 10; i++) {
		document.getElementById(('img'+i)).src = "images/deck-back.png";
  }

}

function showImage(img_id) {
	
    /// <summary>Allows selection of 2 cards. These cards are mapped to shuffled
    /// array and displays selected cards on screen. After the selection of 
    /// cards it calls changeBackToDefaultImage fucntion</summary>
    /// <param name="img_id" type="Number">The image identifier of card</param>
    
	if (allow_click==true) 
	{
		allow_click = false; 
		
		
		document.getElementById('img'+img_id).src = 
		'images/image_'+map_to_image[img_id]+'.png';
		
		
		
		if (counter_for_clickedimages == 0) 
		{
			counter_for_clickedimages++;
			clicked_images[0] = img_id;
			allow_click = true;
		} 

		else 
		{
			clicked_images[1] = img_id;
			counter_for_clickedimages = 0;
			setTimeout('changeBackToDefaultImage()', 600);
      	}
	}
}

