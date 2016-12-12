// Trivia Game - WWE/WWF Trivia!
// 1.  Start game with a welcome screen and a button to push to start
// 2.  Show question with multiple choice answers
// 3.  Thirty second clock to answer question
// 4.  If user answers question within time-alloted or runs out of time:
//		a. Show message alerting user if right or wrong answer or if time-expired; Keep track of right or wrong answers and unanswered (time-expired)
//		b. always provide the right answer with a description
//		c. display graphic related to question and answer
// 5.  Proceed to next question and repeat steps 2 - 4 for desired amount of questions 
// 6.  At end of game: 
//		a. Display results: Correct, Wrong, Unanswered questions
//		b. Button to play again

// click start button - display question
// 		a. set timer for 30 seconds
// if choice selected before time up
//		a. display results
//		b. clear 30 second timer
//		b. set timer for 10 seconds to show new question
// if 30 second question timer expires
//		a. display results
//		b. set timer for 10 seconds to show new question


$(document).ready(function() {

	/**
	 * Randomize array element order in-place.
	 * Using Durstenfeld shuffle algorithm.
	 **/
	function shuffleArray(array) {
	    for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	    return array;
	};

	var triviagame = {
		questions: [question1 = {question: "Which wrestler has regularly faced crowd chants of 'Goldberg' during his matches, due to perceived similarity between him and Bill Goldberg?",
					choiceA: "a. Dave Batista", choiceB: "b. Brock Lesnar", choiceC: "c. Seamus", choiceD: "d. Ryback", correctChoice: "d", 
					desc: "Ryback - Ryback participated in the first season of NXT under the name Skip Sheffield.",
					searchkey: "Ryback"},
					question2 = {question: "Who holds the record for the longest WWE Championship reign?",
					choiceA: "a. The Ultimate Warrior", choiceB: "b. Bob Backlund", choiceC: "c. Hulk Hogan", choiceD: "d. Bruno Sammartino", correctChoice: "d", 
					desc: "Bruno Sammartino - 7 years, 8 months, and one day, to be exact.",
					searchkey: "Bruno Sammartino wwe"},
					question3 = {question: "To whom did the Honky Tonk Man lose his Intercontinental Championship at SummerSlam 1988 in only 31 seconds?",
					choiceA: "a. The Ultimate Warrior", choiceB: "b. Brutus the Barber Beefcake", choiceC: "c. Hulk Hogan", choiceD: "d. Macho Man", correctChoice: "a", 
					desc: "The Ultimate Warrior - That the Ultimate Warrior would be the Honky Tonk Man's opponent was not announced in advance of the event.",
					searchkey: "The Ultimate Warrior"},
					question4 = {question: "Making his debut in 1987, by what name was the bodyguard of The Million Dollar Man Ted DiBiase known?",
					choiceA: "a. Virgil", choiceB: "b. Max", choiceC: "c. Sammy", choiceD: "d. Wesley", correctChoice: "a", 
					desc: "Virgil - The name Virgil was meant as a jab at then-WCW wrestler Virgil Runnels, better known as Dusty Rhodes.",
					searchkey: "wwe Virgil"},
					question5 = {question: "Which wrestler of the 80s and 90s had a finishing move known as the Ghetto Blaster?",
					choiceA: "a. Bad News Brown", choiceB: "b. Junkyard Dog", choiceC: "c. One Man Gang", choiceD: "d. Akeem", correctChoice: "a", 
					desc: "Bad News Brown - Bad News Brown won a bronze in heavyweight judo at the 1976 Summer Olympics.",
					searchkey: "Bad News Brown wwe"},
					question6 = {question: "Who did Hulk Hogan win his only WWE Tag Team Championship with?",
					choiceA: "a. Brutus Beefcake", choiceB: "b. Macho Man", choiceC: "c. Edge", choiceD: "d. The Ultimate Warrior", correctChoice: "c", 
					desc: "Edge - Hulk Hogan and Edge beat Billy and Chuck for the title in 2002.",
					searchkey: "Edge Hulk Hogan"},
					question7 = {question: "The only match The Undertaker has won via disqualification at Wrestlemania was against which opponent?",
					choiceA: "a. Psycho Sid", choiceB: "b. Big Boss Man", choiceC: "c. Junkyard Dog", choiceD: "d. Giant Gonzales", correctChoice: "d", 
					desc: "Giant Gonzales - The disqualification came after Gonzalez choked the Undertaker with a chloroform-soaked cloth.",
					searchkey: "The Undertaker Giant Gonzales"},
					question8 = {question: "Wrestlemania I was held at which venue?",
					choiceA: "a. Rosemont Horizon", choiceB: "b. Silverdome", choiceC: "c. Trump Plaza", choiceD: "d. Madison Square Garden", correctChoice: "d", 
					desc: "Madison Square Garden - The main event was Hulk Hogan and Mr. T versus Roddy Piper and Paul Orndorff with special outside referee Muhammad Ali.",
					searchkey: "Wrestlemania"},
					question9 = {question: "Who was the first person to officially break the Master Lock of Chris Masters?",
					choiceA: "a. Bobby Lashley", choiceB: "b. Dave Finlay", choiceC: "c. Mark Henry", choiceD: "d. Kane", correctChoice: "a", 
					desc: "Bobby Lashley - The Master Lock was a finishing move Masters had debuted more than two years before.",
					searchkey: "Bobby Lashley"},
					question10 = {question: "Who did Hulk Hogan beat to capture his first WWF Championship from?",
					choiceA: "a. The Undertaker", choiceB: "b. The Iron Sheik", choiceC: "c. Andre the Giant", choiceD: "d. Bob Backlund", correctChoice: "b", 
					desc: "The Iron Sheik - Hogan is a 6-time WWF/WWE Champion.",
					searchkey: "wwe The Iron Sheik"},
					question11 = {question: "Which wrestler left the WWE to join the UFC, during which he won the UFC Heavyweight Championship, then returned to the WWE in April 2012?",
					choiceA: "a. Bill Goldberg", choiceB: "b. Brock Lesnar", choiceC: "c. The Rock", choiceD: "d. The Undertaker", correctChoice: "b", 
					desc: "Brock Lesnar - Lesnar became the youngest WWE Champion at age 25.",
					searchkey: "Brock Lesnar"},
					question12 = {question: "Who was the first inductee into the WWE Hall of Fame?",
					choiceA: "a. Hulk Hogan", choiceB: "b. Macho Man", choiceC: "c. Andre the Giant", choiceD: "d. Bruno Sammartino", correctChoice: "c", 
					desc: "Andre the Giant - Known as the 'Eighth Wonder of the World', Andre's death was the reason for the creation of the Hall of Fame in 1993.",
					searchkey: "Andre the Giant"},
					question13 = {question: "Which of the following is not a persona under which Mick Foley has wrestled - Dude Love, Psicosis or Mankind?",
					choiceA: "a. Dude Love", choiceB: "b. Psicosis", choiceC: "c. Mankind", choiceD: "d. Cactus Jack", correctChoice: "b", 
					desc: "Psicosis - He also wrestled as himself and made 'sockey', a sock he talked to on his hand, famous.",
					searchkey: "wwe Mankind Mick Foley"},
					question14 = {question: "Stephanie McMahon, daughter of WWE Chairman Vince McMahon, married which wrestler in 2003?",
					choiceA: "a. Shawn Michaels", choiceB: "b. Triple H", choiceC: "c. Randy Orton", choiceD: "d. The Rock", correctChoice: "b", 
					desc: "Triple H - The two began dating in 2000 during their scripted romance on the show.",
					searchkey: "Triple H Degeneration X"},
					question15 = {question: "Who was the host of 'The Highlight Reel'?",
					choiceA: "a. Rowdy Roddy Piper", choiceB: "b. Christian", choiceC: "c. Edge", choiceD: "d. Chris Jericho", correctChoice: "d", 
					desc: "Chris Jericho - A record nine-time Intercontinental Champion, he left the WWE in August 2012 to tour with his heavy metal band Fozzy for the remainder of the year.",
					searchkey: "Chris Jericho"},
					question16 = {question: "Which wrestler who died aged 58 in 2011 formed The Mega Powers tag team with Hulk Hogan, then dropped the WWF title to Hogan at Wrestlemania V?",
					choiceA: "a. George 'The Animal' Steel", choiceB: "b. Chris Benoit", choiceC: "c. Mr. Perfect", choiceD: "d. Randy 'Macho Man' Savage", correctChoice: "d", 
					desc: "The Macho Man Randy Savage - His real life brother also wrestled in the WWF as The Genius.",
					searchkey: "Macho Man Randy Savage"},
					question17 = {question: "In 1989 Hulk Hogan starred in the movie No Holds Barred, in which he wrestled a character played by Tommy Lister. What was the character's name?",
					choiceA: "a. Titan", choiceB: "b. Brutus 'The Barber' Beefcake", choiceC: "c. Zeus", choiceD: "d. Bad News Brown", correctChoice: "c", 
					desc: "Zeus - Despite being packaged as an unfazable monster heel, Zeus never won a match during his time in the WWF.",
					searchkey: "Zeus Hulk Hogan"},
					question18 = {question: "Who won an unprecedented 10th WWE Championship at Night of Champions on September 18, 2011?",
					choiceA: "a. Triple H", choiceB: "b. John Cena", choiceC: "c. CM Punk", choiceD: "d. Randy Orton", correctChoice: "b", 
					desc: "John Cena - The leader of the Cenation is a Boston native.",
					searchkey: "John Cena"},
					question19 = {question: "The son of Paul Bearer and brother of Kane, which WWE Superstar achieved a 20-0 record at Wrestlemania after defeating Triple H at Wrestlemania 28?",
					choiceA: "a. Bradshaw", choiceB: "b. Mideon", choiceC: "c. Viscera", choiceD: "d. The Undertaker", correctChoice: "d", 
					desc: "The Undertaker - The Undertaker (real name Mark Calaway) is the only remaining active competitor from the first episode of Raw in 1993.",
					searchkey: "The Undertaker Paul Bearer"},
					question20 = {question: "Which female cast member of Jersey Shore wrestled in a 6-person mixed tag team match at Wrestlemania 27?",
					choiceA: "a. Nicole 'Snooki' Polizzi", choiceB: "b. Jenni 'Jwoww' Farley", choiceC: "c. Sammi 'Sweetheart' Giancola", choiceD: "d. Deena Nicole Cortese", correctChoice: "a", 
					desc: "Snooki - Snooki, real name Nicole Polizzi, combined with John Morrison and Trish Stratus to defeat Dolph Ziggler and LayCool (Layla and Michelle McCool) (with Vickie Guerrero)",
					searchkey: "Snooki Trish Stratus"},
					question21 = {question: "Who broke the 'Perfect record' of Mr. Perfect, Curt Hennig?",
					choiceA: "a. Brutus 'The Barber' Beefcake", choiceB: "b. Hulk Hogan", choiceC: "c. Greg Valentine", choiceD: "d. Jake the Snake Roberts", correctChoice: "a", 
					desc: "Brutus 'The Barber' Beefcake - Although his first loss on television, Mr. Perfect was pinned by The Ultimate Warrior a week earlier in a show televised after the match with Beefcake.",
					searchkey: "Brutus The Barber Beefcake"},
					question22 = {question: "Who became the first person to win the WWF/WWE title ten times?",
					choiceA: "a. Hulk Hogan", choiceB: "b. The Rock", choiceC: "c. Randy Orton", choiceD: "d. John Cena", correctChoice: "d", 
					desc: "John Cena - Cena starred as John Triton in the 2006 film The Marine.",
					searchkey: "John Cena"},
					question23 = {question: "Who was 'screwed' in the Montreal Screwjob?",
					choiceA: "a. Shawn Michaels", choiceB: "b. Triple H", choiceC: "c. Tito Santana", choiceD: "d. Bret Hart", correctChoice: "d", 
					desc: "Bret Hart - In the Montreal Screwjob, reigning WWF Champion Bret Hart lost the title to Shawn Michaels by submission, even though Hart had not submitted.",
					searchkey: "Bret The Hitman Hart"},
					question24 = {question: "In real life Natalya married which superstar in 2013?",
					choiceA: "a. Tyson Kidd", choiceB: "b. Ryback", choiceC: "c. Rick Rude", choiceD: "d. Heath Slater", correctChoice: "a", 
					desc: "Tyson Kidd - Natalya was featured as one of the main cast of the reality show Total Divas in 2013.",
					searchkey: "Tyson Kidd Natalya"},
					question25 = {question: "David Otunga got engaged to which Academy Award-winning actress in 2008?",
					choiceA: "a. Charlize Theron", choiceB: "b. Jessica Chastain", choiceC: "c. Halle Berry", choiceD: "d. Jennifer Hudson", correctChoice: "d", 
					desc: "Jennifer Hudson - Otunga attended Harvard Law School, and worked for a law firm after his graduation.",
					searchkey: "Jennifer Hudson"},
					question26 = {question: "Who, as Donald Trump's representative, won the 'Battle of the Billionaires' at Wrestlemania 23 in 2007?",
					choiceA: "a. Chris Benoit", choiceB: "b. Bobby Lashley", choiceC: "c. Umaga", choiceD: "d. Batista", correctChoice: "b", 
					desc: "Bobby Lashley - Vince McMahon's representative Umaga lost, and as per the stipulation of the match, Vince McMahon's hair was then shaved off.",
					searchkey: "Bobby Lashley"},
					question27 = {question: "Phillip Brooks is better known by which name in the WWE?",
					choiceA: "a. The Miz", choiceB: "b. The Punisher", choiceC: "c. Kane", choiceD: "d. CM Punk", correctChoice: "d", 
					desc: "CM Punk - CM Punk lost to the Undertaker at Wrestlemania 29.",
					searchkey: "CM Punk"},
					question28 = {question: "Which wrestler was known as the 'Glamazon'?",
					choiceA: "a. Candace Michelle", choiceB: "b. Mickie James", choiceC: "c. Dave Finlay", choiceD: "d. Beth Phoenix", correctChoice: "d", 
					desc: "Beth Phoenix - Beth Phoenix was fired from the company in the storyline in 2012, but in reality, left for family reasons.",
					searchkey: "Beth Phoenix"},
					question29 = {question: "Who did the Shield defeat to win their first WWE Tag Team Championship?",
					choiceA: "a. The Prime Time Players", choiceB: "b. The Usos", choiceC: "c. The Dudley Boyz", choiceD: "d. Team Hell No", correctChoice: "d", 
					desc: "Team Hell No - Team Hell No had held the belt for 245 days.",
					searchkey: "wwe Team Hell No"},
					question30 = {question: "Who won season 1 of NXT?",
					choiceA: "a. Wade Barrett", choiceB: "b. CM Punk", choiceC: "c. Kaval", choiceD: "d. Kaitlyn", correctChoice: "a", 
					desc: "Wade Barrett - Barrett made his Raw debut in 2010 and rose to prominence as the leader of the Nexus, a stable composed of the NXT contestants.",
					searchkey: "Wade Barrett NXT"},
					question31 = {question: "Whom did The Rock defeat to win his first WWE Championship at the Survivor Series in 1998?",
					choiceA: "a. Shawn Michaels", choiceB: "b. Mankind", choiceC: "c. Vader", choiceD: "d. Stone Cold Steve Austin", correctChoice: "b", 
					desc: "Mankind - This was in the finals of the Deadly Game tournament for the vacant WWF Championship.",
					searchkey: "wwe Mankind Mick Foley"},
					question32 = {question: "Who won a record-tying fifth United States Championship on May 17, 2010, in Toronto, Canada?",
					choiceA: "a. Kofi Kingston", choiceB: "b. Wahoo McDaniel", choiceC: "c. Bret Hart", choiceD: "d. Booker T", correctChoice: "c", 
					desc: "Bret Hart - This tied Hart with Chris Benoit, Ric Flair, Lex Luger and Wahoo McDaniel for having the most official reigns.",
					searchkey: "Bret The Hitman Hart"},
					question33 = {question: "Nelson Frazier, Jr., who died aged 43 in 2014, was known in the WWE under all but which of these names?",
					choiceA: "a. Big Daddy V", choiceB: "b. Viscera", choiceC: "c. Mo", choiceD: "d. Mabel", correctChoice: "c", 
					desc: "Mo - Frazier competed under the name Viscera, and Mo was his partner whom he won the WWF World Tag Team Championship with.",
					searchkey: "Viscera wwe"},
					question34 = {question: "Who was the first African-American manager in WWE history?",
					choiceA: "a. Bobby Heenan", choiceB: "b. Teddy Long", choiceC: "c. Slick", choiceD: "d. Sharmell", correctChoice: "c", 
					desc: "Slick - Slick became an ordained Christian minister during time away from the WWE, and returned as Reverend Slick.",
					searchkey: "wwf Slick"},
					question35 = {question: "Peroxwhy?gen are a two-piece American rock band based in North Carolina and formed by Shannon Moore and which other wrestler?",
					choiceA: "a. Matt Hardy", choiceB: "b. Gregory Helms", choiceC: "c. Jeff Hardy", choiceD: "d. Evan Karagias", correctChoice: "c", 
					desc: "Jeff Hardy - Jeff Hardy won the WWE Championship at the Armageddon pay-per-view in December 2008.",
					searchkey: "Jeff Hardy Peroxwhygen"},
					question36 = {question: "What was the first name of Bruno Sammartino's son, who wrestled at the inaugural Wrestlemania?",
					choiceA: "a. David", choiceB: "b. Luke", choiceC: "c. Paul", choiceD: "d. Chris", correctChoice: "a", 
					desc: "David - David Sammartino was fired from the WWF after he was arrested for punching a fan who spat at him.",
					searchkey: "Bruno Sammartino wwe"},
					question37 = {question: "The Executioner, who wrestled the first match at the first Wrestlemania against Tito Santana, more famously wrestled under what name?",
					choiceA: "a. 'Playboy' Buddy Rose", choiceB: "b. The Undertaker", choiceC: "c. Big John Studd", choiceD: "d. King Kong Bundy", correctChoice: "a", 
					desc: "'Playboy' Buddy Rose - Rose died of natural causes in 2009, being morbidly obese at the time.",
					searchkey: "Buddy Rose Playboy"},
					question38 = {question: "Who became the first person to defeat The Undertaker at Wrestlemania 30?",
					choiceA: "a. John Cena", choiceB: "b. Brock Lesnar", choiceC: "c. Hulk Hogan", choiceD: "d. Ryback", correctChoice: "b", 
					desc: "Brock Lesnar - The Undertaker was 21-0 at Wrestlemania coming into the match, his first bout in 1991.",
					searchkey: "Brock Lesnar"},
					question39 = {question: "Who holds the record (as of April 2014) for the longest United States Championship reign, 523 days?",
					choiceA: "a. Rick Rude", choiceB: "b. Lex Luger", choiceC: "c. MVP", choiceD: "d. Ric Flair", correctChoice: "b", 
					desc: "Lex Luger - Number 2 on the list is Ravishing Rick Rude, with 419 days.",
					searchkey: "Lex Luger wwe"},
					question40 = {question: "The first inductee into the WWE Hall of Fame Class of 2014, which superstar died in April 2014, one day after appearing on Raw?",
					choiceA: "a. Tony Atlas", choiceB: "b. The Ultimate Warrior", choiceC: "c. Razor Ramon", choiceD: "d. Jake the Snake Roberts", correctChoice: "b", 
					desc: "The Ultimate Warrior - By defeating Hulk Hogan at Wrestlemania VI, he achieved the rare feat of holding the WWE and Intercontinental titles simultaneously.",
						searchkey: "The Ultimate Warrior"}
					],
					
		shuffledQuestions: [],
		curCorrectChoice: "", 
		curDesc: "",
		curSearchkey: "",
		correct: 0,
		wrong: 0,
		timedout: 0,
		qtimer: 20,
		qcountdown: 0,
		delay: 10,
		askHowManyQuestions: 15,
		message: "",
		iquestion: 0,
		qTimeout: null,
		delayTimeout: null,
		countdownTimer: null,

		initial: function() {
			var rawImg = $("<img>").attr("style", "width:100%").attr("src", "assets/images/raw.png").attr("alt", "raw");
			var isImg = $("<img>").attr("style", "width:100%").attr("src", "assets/images/is.png").attr("alt", "is");
			var warImg = $("<img>").attr("style", "width:100%").attr("src", "assets/images/war.png").attr("alt", "war");
			var gameImg = $("<img>").attr("style", "width:100%").attr("src", "assets/images/thegame.gif").attr("alt", "game");
			var startButton = $("<button>").attr("type", "button").addClass("btn btn-lg btn-danger btn-start").text("Start Trivia Game");
			$(".cdleft").html(rawImg);
			$(".cdcenter").html(isImg);
			$(".cdright").html(warImg);
			$(".titantron").append(gameImg);
			$(".trivia").html(startButton);
			audio.play();

			this.shuffledQuestions = shuffleArray(this.questions);
		},

		displayQuestion: function() {

			if (this.iquestion >= this.askHowManyQuestions) {
				this.gameOver() //do not display new question if we are ending the game
			} else { // continue displaying question


				var questionP = "";
				var aChoiceDiv = "";
				var bChoiceDiv = "";
				var cChoiceDiv = "";
				var dChoiceDiv = "";

				this.curCorrectChoice = this.shuffledQuestions[this.iquestion].correctChoice;
				this.curDesc = this.shuffledQuestions[this.iquestion].desc;
				this.curSearchkey = this.shuffledQuestions[this.iquestion].searchkey;

				questionP = $("<h1>").text(this.shuffledQuestions[this.iquestion].question);

	 			aChoiceDiv = $("<div>").addClass("choice").attr("id", "choiceA").attr("data-choice", "a").text(this.shuffledQuestions[this.iquestion].choiceA);
	 			bChoiceDiv = $("<div>").addClass("choice").attr("id", "choiceB").attr("data-choice", "b").text(this.shuffledQuestions[this.iquestion].choiceB);
	 			cChoiceDiv = $("<div>").addClass("choice").attr("id", "choiceC").attr("data-choice", "c").text(this.shuffledQuestions[this.iquestion].choiceC);
	 			dChoiceDiv = $("<div>").addClass("choice").attr("id", "choiceD").attr("data-choice", "d").text(this.shuffledQuestions[this.iquestion].choiceD);
					
				$(".trivia").html(questionP);

				$(".trivia-choices").html(aChoiceDiv).append(bChoiceDiv).append(cChoiceDiv).append(dChoiceDiv);

				this.qTimeout = setTimeout(function() {triviagame.timesUp();}, 1000 * this.qtimer);

				this.startCountdown();

				this.iquestion++;
			};

		}, //end displayQuestion

		startCountdown: function() {

			// display countdown timer on screen, start with qtimer seconds
			// update countdown every second until user selects an answer or timer expirers

			this.qcountdown = this.qtimer;

			this.displayCountdown();

			this.countdownTimer = setInterval(function() {triviagame.displayCountdown();}, 1000);

		},

		displayCountdown: function() {

			$(".countdown").html(":" + String("00" + this.qcountdown).slice(-2));
			$(".countdownsm").html(":" + String("00" + this.qcountdown).slice(-2));

			if (this.qcountdown === 10) {

				warning.currentTime = 0;
				warning.play();

			};

			this.qcountdown--;

			if (this.qcountdown === 0) {
				clearInterval(this.countdownTimer);
			};

		}, 

		timesUp: function() {

			// question timer expired

			clearTimeout(this.qTimeout);

			bell.play();

			this.qTimeout = setTimeout(function() {triviagame.displayQuestion();}, 1000 * this.delay);

			$(".countdown").html(":" + String("00" + this.qcountdown).slice(-2));
			$(".countdownsm").html(":" + String("00" + this.qcountdown).slice(-2));

			this.timedout++;

			this.message = $("<h2>").text("You've been counted out!!").addClass("results timesup");

			this.displayAnswer();
		},

		displayAnswer: function() {

			$(".trivia").append(triviagame.message);

			triviagame.message = $("<h2>").text(triviagame.curDesc);
			$(".trivia").append(triviagame.message);

			$(".trivia-choices").empty();

			var type = 	triviagame.parseSubject();

		    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=dc6zaTOxFJmzC&limit=2&offset=&rating=&lang=&fmt=json";

		    var igiphy = Math.floor(Math.random() * 2)

		    $.ajax({
		      url: queryURL,
		      method: "GET"
		    }).done(function(response) {
		    	console.log(response)
				var gifImg = response.data[igiphy].images.fixed_height.url;
				var $gifImg = $("<img>").attr("src", gifImg).attr("alt", "giphy").addClass("giphyImg");
				$(".trivia-choices").html($gifImg);		
		    });

		    this.move();

		},

		move: function() {
		    // var elem =$("#myBar"); 
		    var width = 1;
		    $(".progressBar").css({"display": "inline-block"}); 
		    var id = setInterval(frame, 100);
		    function frame() {
		        if (width >= 100) {
		            clearInterval(id);
		            $(".progressBar").css({"display": "none"});
		            $("#myBar").css({"width": "0%"}); 
		        } else {
		            width += 1; 
		            $("#myBar").css({"width": width + "%"}); 
		        }
		    }
		},

		gameOver: function() {

			var correctP = "";
			var wrongP = "";
			var timedoutP = "";
			var restartButton = "";
			var rawImg = $("<img>").attr("style", "width:100%").attr("src", "assets/images/raw.png").attr("alt", "raw");
			var isImg = $("<img>").attr("style", "width:100%").attr("src", "assets/images/is.png").attr("alt", "is");
			var warImg = $("<img>").attr("style", "width:100%").attr("src", "assets/images/war.png").attr("alt", "war");
			$(".cdleft").html(rawImg);
			$(".cdcenter").html(isImg);
			$(".cdright").html(warImg);


			correctP = $("<h1>").text("Correct answers: " + this.correct);		
			wrongP = $("<h1>").text("Wrong answers: " + this.wrong);
			timedoutP = $("<h1>").text("Counted Out: " + this.timedout);

			restartButton = $("<button>").attr("type", "button").addClass("btn btn-lg btn-danger btn-restart").text("Restart Trivia Game");
					$(".trivia").html(restartButton);

			$(".trivia").html(correctP).append(wrongP).append(timedoutP).append(restartButton);
			$(".trivia-choices").empty();

		},

		restartGame: function() {

			this.correct = 0;
			this.wrong = 0;
			this.timedout = 0;
			this.iquestion = 0;
			//shuffle question array
			this.shuffledQuestions = shuffleArray(this.questions);

			this.displayQuestion();			

		},

		parseSubject: function() {

			var subject = [];

			for (var i = 0; i < (this.curSearchkey.length); i++) {
				if (this.curSearchkey[i] === " ") {
					subject.push("+");
				} else {
					subject.push(this.curSearchkey[i]);
				}
			}
			
			return subject.join("");

		}

	}; //end triviagame object

// <----------- App starts executing here ----------->

	var warning = new Audio;
	var audio = new Audio;
	var bell = new Audio;
	
	audio.src = "assets/audio/thegame.mp3";
	warning.src = "assets/audio/24effect.mp3";
	bell.src = "assets/audio/bell.mp3";

	//start the game!
	triviagame.initial();

$(document).on("click", ".btn-start", function() {
	$(".titantron").empty();
	audio.pause();
	triviagame.displayQuestion();

}); // end start button


$(document).on("click", ".choice", function() {

	clearTimeout(triviagame.qTimeout);
	clearInterval(triviagame.countdownTimer);
	warning.pause();

	triviagame.qTimeout = setTimeout(function() {triviagame.displayQuestion();}, 1000 * triviagame.delay);

	var curChoice = ($(this).data("choice"));

	if (curChoice === triviagame.curCorrectChoice) {

		triviagame.message = $("<h2>").text("Correct!!!").addClass("results correct");

		triviagame.correct++;		
	} else {
		triviagame.message = $("<h2>").text("Wrong!!!").addClass("results wrong");

		triviagame.wrong++;
	}

	triviagame.displayAnswer();

}); //end onclick choice 

$(document).on("click", ".btn-restart", function() {

	triviagame.restartGame();

}); // end restart button


}); // end document ready