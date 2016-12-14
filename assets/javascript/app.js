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
					searchkey: "The Ultimate Warrior"},
					question41 = {question: "Who did 'Stone Cold' Steve Austin beat in the final of King of the Ring 1996 to kickstart the Attitude Era, before coining the most famous catchphrase in WWE history?",
					choiceA: "a. Marc Mero", choiceB: "b. Sycho Sid", choiceC: "c. Jake 'The Snake Roberts'", choiceD: "d. Vader", correctChoice: "c",
					desc: "Austin defeated born-again Christian Jake Roberts. After the match, he said: 'You sit there and you thump your Bible, and you say your prayers, and it didn't get you anywhere. Talk about your psalms, talk about John 3:16. Well Austin 3:16 says I just whipped your ass!'",
					searchkey: "Austin 3:16"},
					question42 = {question: "What was the name of the wrestling stable Lita formed with The Hardy Boyz?",
					choiceA: "a. The Headbangers", choiceB: "b. Team Xtreme", choiceC: "c. Too Cool", choiceD: "d. The Radicalz", correctChoice: "b",
					desc: "Team XTreme were famous for their many encounters with Edge and Christian and the Dudley Boyz in ladder matches and TLC matches, including a celebrated bout at WrestleMania 17",
					searchkey: "Hardy Boyz"},
					question43 = {question: "At what 'In Your House' pay-per-view event was Kane introduced as the brother of The Undertaker, who had been burned in a fire at the family funeral home, started by Taker?",
					choiceA: "a. A Cold Day in Hell", choiceB: "b. Mind Games", choiceC: "c. Badd Blood", choiceD: "d. Ground Zero", correctChoice: "c",
					desc: "Kane made his first appearance at Badd Blood: In Your House in October 1997. He used The Undertaker's signature Tombstone Piledriver to cost him victory against Shawn Michaels in the first Hell in a Cell match.",
					searchkey: "Kane fire"},
					question44 = {question: "Which legendary WWE Diva did Bubba Ray Dudley powerbomb through a table?",
					choiceA: "a. The Fabulous Moolah", choiceB: "b. Wendi Richter", choiceC: "c. Sensational Sherri", choiceD: "d. Mae Young", correctChoice: "d",
					desc: "Mae Young was 77-years-old when she took a powerbomb off the entrance stage through a table. The WWE Hall of Famer, who died last year, is thought to have competed across seven decades.",
					searchkey: "Mae Young Power Bomb"},
					question45 = {question: "UFC legend Ken Shamrock was introduced to WWE fans as 'The World's Most Dangerous Man' in February 1997. What was his 'special guest' role in the famous match between Bret Hart and Steve Austin at WrestleMania 13?",
					choiceA: "a. Announcer", choiceB: "b. Referee", choiceC: "c. Enforcer", choiceD: "d. Commentator", correctChoice: "b",
					desc: "Shamrock was the special guest referee in the submission match between Hart and Austin, which has been described by some fans and critics as the greatest bout in WrestleMania history.",
					searchkey: "Ken Shamrock Referee"},
					question46 = {question: "Which of these Divas was never a member of Godfather's - ahem - entourage?",
					choiceA: "a. Lita", choiceB: "b. Victoria", choiceC: "c. Terri Runnels", choiceD: "d. Ivory", correctChoice: "c",
					desc: "It was Terri Runnels, the former wife of Dustin Runnels, aka Goldust. Lita, Victoria and Ivory were all first introduced to WWE fans as 'employees' of The Godfather.",
					searchkey: "wwe The Godfather"},
					question47 = {question: "Who was revealed as the 'Higher Power' controlling The Undertaker's Ministry of Darkness?",
					choiceA: "a. Vince McMahon", choiceB: "b. Paul Bearer", choiceC: "c. Joey Abs", choiceD: "d. Shane McMahon", correctChoice: "a",
					desc: "Fans were left disappointed when the man behind the satanic clan was revealed to be none other than WWE owner Vince McMahon.",
					searchkey: "Undertaker Corporate Ministry"},
					question48 = {question: "Who did Trish Stratus first manage in WWE?",
					choiceA: "a. Val Venis", choiceB: "b. Christian", choiceC: "c. Test and Albert", choiceD: "d. Jeff Hardy", correctChoice: "c",
					desc: "Trish Stratus began her WWE career managing Test and Albert, aka T&A, who never won a tag team championship.",
					searchkey: "Trish Stratus"},
					question49 = {question: "What was the name of Al Snow's pet chihuahua, who replaced Head and started talking to him?",
					choiceA: "a. Molly", choiceB: "b. Pepper", choiceC: "c. Brandy", choiceD: "d. Princess", correctChoice: "b",
					desc: "It was Pepper, who was later kidnapped by the Big Boss Man. Refusing to give the dog back, Boss Man invited Snow to his hotel room to discuss the situation, before serving Snow dinner - which was then revealed to be Pepper.",
					searchkey: "Al Snow wwe"},
					question50 = {question: "The Rock teamed with which former enemy as The Rock 'n' Sock Connection?",
					choiceA: "a. Triple H", choiceB: "b. Mankind", choiceC: "c. Ken Shamrock", choiceD: "d. 'Stone Cold' Steve Austin", correctChoice: "b",
					desc: "The answer is Mankind. As a pairing they won the tag team titles three times, clinching the belts for the first time by defeating The Undertaker and The Big Show.",
					searchkey: "Rock and Mankind"},
					question51 = {question: "Who sang the original version of Shawn Michael's entrance theme song, Sexy Boy?",
					choiceA: "a. Shawn Michaels", choiceB: "b. Chyna", choiceC: "c. Sensational Sherri", choiceD: "d. Luna Vachon", correctChoice: "c",
					desc: "Sensational Sherri, the Heart Break Kid's former manager, sang the first version of Sexy Boy, which was later re-recorded with Shawn himself on vocals: 'Eat your heart out girls - hands off the merchandise'.",
					searchkey: "Shawn Michaels HBK"},
					question52 = {question: "Who did Chris Jericho interrupt when his 'countdown to the new millennium' clock ended and he made his WWE debut?",
					choiceA: "a. Triple H", choiceB: "b. Marc Mero", choiceC: "c. Hardcore Holly", choiceD: "d. The Rock", correctChoice: "d",
					desc: "Y2J interrupted The Rock, proclaiming 'Raw is Jericho' and that he was here to save the company, in what was the first of many confrontations between the pair.",
					searchkey: "y2j Chris Jericho"},
					question53 = {question: "The vampire Gangrel was the leader of The Brood, a gothic trio with Edge and Christian. Which tag team later helped him form The New Brood?",
					choiceA: "a. The Disciples of Apocalypse", choiceB: "b. The Oddities", choiceC: "c. The Acolytes", choiceD: "d. The Hardy Boyz", correctChoice: "d",
					desc: "Matt and Jeff Hardy briefly teamed with Gangrel before turning on him after they secured the services of Terri Runnels as their manager by winning the first tag team ladder match at No Mercy by defeating Edge and Christian.",
					searchkey: "Gangrel The Brood"},
					question54 = {question: "Edge and Christian loved to make fun of their opponents or the town or city WWE was visiting by dressing up in outlandish costumes and posing 'for the benefit of those with flash photography'. For how long would they pose?",
					choiceA: "a. Three seconds", choiceB: "b. Five seconds", choiceC: "c. Six seconds", choiceD: "d. Ten seconds", correctChoice: "b",
					desc: "The duo's 'five-second poses' included making fun of Elvis Presley in Memphis, Tennessee and famously posing with Kurt Angle as The Jug Band in Louisville, Kentucky, which 'totally reeked of awesomeness'.",
					searchkey: "Edge and Christian"},
					question55 = {question: "Whose wedding did Triple H prevent by abducting and drugging the bride, taking her to a drive-through chapel in Las Vegas and marrying her instead?",
					choiceA: "a. Stephanie McMahon and The Undertaker", choiceB: "b. Al Wilson and Dawn Marie", choiceC: "c. Stephanie McMahon and Test", choiceD: "d. Lita and Kane", correctChoice: "c",
					desc: "Vince McMahon's daughter Stephanie was set to marry Test, but Triple H ruined the ceremony. Vince later fought Triple H with the stipulation that if he won, the marriage would be annulled. But Stephanie turned on her father and started the McMahon-Helmsley Era with her husband.",
					searchkey: "Stephanie McMahon and Test"},
					question56 = {question: "What type of match did the New Age Outlaws (Road Dogg and Billy Gunn) have with Cactus Jack and Chainsaw Charlie at WrestleMania 14?",
					choiceA: "a. Ambulance match", choiceB: "b. Stretcher match", choiceC: "c. Casket match", choiceD: "d. Dumpster match", correctChoice: "d",
					desc: "It was a dumpster match. It was set up after the New Age Outlaws threw their opponents (better known as Mick Foley and Terry Funk) off the stage in a dumpster in a shocking segment during an episode of Raw.",
					searchkey: "New Age Outlaws"},
					question57 = {question: "D'Lo Brown's career peaked when he held the European and Intercontinental Championships simultaneously. Which of these men matched that achievement?",
					choiceA: "a. Chris Jericho", choiceB: "b. X-Pac", choiceC: "c. Kurt Angle", choiceD: "d. Mideon", correctChoice: "c",
					desc: "D'Lo Brown's unique double reign was only duplicated by Jeff Jarrett, Kurt Angle, and Rob Van Dam.",
					searchkey: "D'Lo Brown"},
					question58 = {question: "Pornstar Val Venis angered the Japanese group Kaientai when he had an affair with their manager Yamaguchi-San's wife, Shian-Li Tsang. Who betrayed Val and tied him up backstage?",
					choiceA: "a. Taka Michinoku", choiceB: "b. Funaki", choiceC: "c. Dick Togo", choiceD: "d. Men's Teioh", correctChoice: "a",
					desc: "Taka Michinoku would eventually betray Val, which led to him and Kaientai tying Venis up backstage, where Yamaguchi-San attempted to castrate him with a sword.",
					searchkey: "Val Venis"},
					question59 = {question: "What were Kurt Angle's three I's?",
					choiceA: "a. Imagination, Intensity and Independence", choiceB: "b. Integrity, Interest and Impulsiveness", choiceC: "c. Intensity, Integrity and Intelligence", choiceD: "d. Independence, Intelligence and Irresistibility", correctChoice: "c",
					desc: "The Olympic gold medallist preached three I's - intensity, integrity and intelligence - and drinking milk. He famously used a milk truck to douse The Alliance on Raw.",
					searchkey: "Kurt Angle"},
					question60 = {question: "Who did Mick Foley say joked with him ahead of his infamous Hell in a Cell match with The Undertaker: 'Maybe you should let him throw you off the top of the cage.'",
					choiceA: "a. Michael Hayes", choiceB: "b. Pat Patterson", choiceC: "c. Terry Funk", choiceD: "d. Jerry 'The King' Lawler", correctChoice: "c",
					desc: "In his book 'Have a Nice Day', Mick Foley said he told Funk: 'Yeah,then I could climb back up – and he could throw me off again.' What followed was arguably the most memorable match in WWE history.",
					searchkey: "wwe Mankind Mick Foley"},
					question61 = {question: "This WWF star was trained in several forms of mixed martial arts, however he lacked microphone skills and had a deadpan personality. His brutal match at SummerSlam'00 against Shane McMahon was especially violent. Who was this star?",
					choiceA: "a. Steve Blackman", choiceB: "b. Ken Shamrock", choiceC: "c. Dan Severn", choiceD: "d. Tank Abbott", correctChoice: "a",
					desc: "Known as 'The Lethal Weapon', Steve Blackman actually had a blink and you'll miss it stint as a jobber in The WWF during the spring of 1988. After several years of singles competition Blackman and Al Snow formed a comedic tag team called 'Headcheese' before he found new life in the Hardcore division.",
					searchkey: "Steve Blackman wwe"},
					question62 = {question: "At SummerSlam'98 this arrogant superstar lost a Hair vs. Hair match to DX member XPac. However, this star got off with just a nice crew cut. The following year he won both The WWF Tag Team Championship and The Intercontinental Title before departing for WCW where he remained until they folded. Who was this cocky grappler?",
					choiceA: "a.  Goldust",  choiceB: "b. Rick Martel",  choiceC: "c. Owen Hart",  choiceD: "d. Jeff Jarrett", correctChoice: "d",
					desc: "When the WWF changed its image, 'Double J' traded in the country singer gimmick for a short buzzcut and a new 'Don't piss me off' catchphrase. Jarrett grew dismayed when first, Steve Austin refused to work an angle with him and finally when asked to drop the Intercontinental Title to Chyna.",
					searchkey: "Jeff Jarrett wwe"},
					question63 = {question: "In 1996 after his arrival he got a heavy heel push and nearly defeated then WWF Heavyweight Champion, Shawn Michaels. When The Attitude Era began to really get rolling, this grappler was nothing more than a glorified jobber and soon left.?",
					choiceA: "a.  Sid Vicious",  choiceB: "b. Ron Simmons",  choiceC: "c. Vader",  choiceD: "d. Mick Foley", correctChoice: "c",
					desc: "Vader literally demolished the competition in WCW during multiple reigns as WCW Heavyweight Champion. In June 2012, after an absence of almost fourteen years Vader made an appearance on Raw and quickly decimated the arrogant Heath Slater.",
					searchkey: "Vader wwe"},
					question64 = {question: "These two muscular stars joined forces and became a fixture of The Attitude Era. They also clicked on a personal level as well as a professional one and remain best friends to this day. Who was this kick ass tandem?",
					choiceA: "a.  The Headbangers",  choiceB: "b. Test and Albert",  choiceC: "c. Faarooq and Bradshaw",  choiceD: "d. Al Snow and Steve Blackman", correctChoice: "c",
					desc: "They spent a brief period of time as minions of The Undertaker in 1999 before breaking out on their own. Eventually they renamed themselves 'The APA' in which their loyalty was to each other and the client with the most cash. ",
					searchkey: "Faarooq and Bradshaw wwe"},
					question65 = {question: "During the Attitude Era these two men formed arguably the best ever commentating duo. One was a consummate play by play man and the other a light-hearted color man who always had his eyes on the divas. Who were they?",
					choiceA: "a.  Jim Ross and Jerry 'The King' Lawler",  choiceB: "b. Vince McMahon and Todd Pettingill",  choiceC: "c. Randy Savage and Gorilla Monsoon",  choiceD: "d. Jim Ross and Mr. Perfect", correctChoice: "a",
					desc: "Many fans claim that the duo of Ross and Jerry Lawler are the greatest announce duo that there ever was. Jerry Lawler has the personality of a stand up comic while Jim Ross has the uncanny ability to sell even the most dismal match as being intense.",
					searchkey: "Jim Ross and Jerry 'The King' Lawler"},
					question66 = {question: "Despite his small size, he had tremendous determination and courage and faced much bigger opponents. He eventually found his niche in the companies Hardcore Division where he held the title on numerous occasions. Who was this small wonder?",
					choiceA: "a.  Crash Holly",  choiceB: "b. Funaki",  choiceC: "c. XPac",  choiceD: "d. Spike Dudley", correctChoice: "a",
					desc: "Nicknamed 'The Houdini of Hardcore' by Jim Ross, Holly became a master at taking full advantage of the Title's 24/7 rule which let pinfalls take place anywhere or anytime. Sadly just months after his release he died at the age of 32, the victim of a drug overdose.",
					searchkey: "Crash Holly wwe"},
					question67 = {question: "Decked out in flashy outfits this wrestler was always accompanied by his harem of women. In fact he would even offer his opponent a night with his ladies rather than having to wrestle him. Who was this star?",
					choiceA: "a.  Mark Henry",  choiceB: "b. The Godfather",  choiceC: "c. The Rock",  choiceD: "d. D Lo Brown", correctChoice: "b",
					desc: "Charles Wright aka 'The Godfather' had several failed gimmicks before his popular pimp persona made its debut in the fall of 1998. Wright finally hit gold with the superfly persona of 'The Godfather', holding The Intercontinental Title briefly in 1999.",
					searchkey: "The Godfather wwe"},
					question68 = {question: "This star was a legend in the Philadelphia based ECW before making his long awaited WWF debut at the 2000 Royal Rumble. Once his wrestling career began to fade away he actually formed a great 'B' commentating team with Michael Cole on Smackdown. Who was this tough as nails star?",
					choiceA: "a.  Bradshaw",  choiceB: "b. Raven",  choiceC: "c. Tazz",  choiceD: "d. Tommy Dreamer", correctChoice: "c",
					desc: "'The Human Suplex Machine' aka Tazz in his WWF days defeated Kurt Angle in short order at the 2000 Royal Rumble. Angle was worried about Tazz, who had a reputation as a 'shooter' or 'hooker' - a wrestler who can inflict some real pain either through their superb skills or by working stiffly.",
					searchkey: "Tazz wwe"},
					question69 = {question: "In the spring of 1998, weekly vignettes began airing hyping the eventual debut of this risque star. He managed to raise the ire of Ken Shamrock by recruiting his storyline baby sister for one of his porno films. Who was this star?",
					choiceA: "a.  Christian",  choiceB: "b. Val Venis",  choiceC: "c. Edge",  choiceD: "d. Shawn Stasiak", correctChoice: "b",
					desc: "Val Venis, a soft core porno star, made his Raw debut in May 1998 defeating the high flying Scorpio. Over the next few months Val's conquests included Shamrock's sister Ryan, Mr. Yamagucci of Kaientai's wife, Terri Runnels and even the eccentric Nicole Bass. ",
					searchkey: "Val Venis wwe"},
					question70 = {question: "Steve Austin's rivalry with WWF head Vince McMahon was the proverbial rock on which the foundation was laid. Which of the following acts did Austin not do to Mr. McMahon?",
					choiceA: "a.  Make him pee his pants while holding toy pistol to his head",  choiceB: "b. Pour cement into his sports car",  choiceC: "c. Shave his head",  choiceD: "d. Attack him while he was in the hospital", correctChoice: "c",
					desc: "While Steve Austin did many, many degrading acts to his employer Vince McMahon, denuding his scalp was not one of them. Vince did not lose his trademark pompadour until 'The Battle of the Billionaires' when he managed Umaga who was beaten by Bobby Lashley who was managed by Donald Drumph.",
					searchkey: "Stone Cold Steve Austin"},
					question71 = {question: "On June 28, 1998 at 'The King of the Ring' The Undertaker wrestled his longtime rival Mankind in a 'Hell in a Cell Match'. What did Mankind aka Mick Foley do during the contest to kick it up a notch?", 
					choiceA: "a. Fell right through the roof and down into the ring", choiceB: "b. Took a fall on a bed of thumb tacks",  choiceC: "c. Fell off the top of the cage and landed on the Spanish Announce Desk",  choiceD: "d. All of these", correctChoice: "d",
					desc: "Mick Foley aka Mankind did push the boundaries of punishment that a single human could take during this epic match with The Undertaker. Who could ever forget the sight of him lying battered and bloodied in the corner of the ring with one of his teeth in his nostril.",
					searchkey: "wwe Mankind Mick Foley"},
					question72 = {question: "During the spring of 1998 Mr. Yamagucci and his faction, Kaientai, had a feud with WWF Lightweight Champion Taka Michinoku. Taka did find himself an unlikely ally in his feud, who was it?",
					choiceA: "a.  Bradshaw",  choiceB: "b. Ron Simmons",  choiceC: "c. Vader",  choiceD: "d. Ken Shamrock", correctChoice: "a",
					desc: "Talk about an odd couple Bradshaw and Taka Michinoku formed a brief and unlikely team when confronted with common enemies in Kaientai. Kaientai had targeted Taka because he was the reigning WWF Lightweight Champion but why they messed with the much larger Bradshaw remains a mystery.",
					searchkey: "Taka Michinoku wwe"},
					question73 = {question: "During the summer of 1998 'Nation of Domination' member D Lo Brown suffered an injury and began under doctor's orders to wear a piece protective gear during his matches. What was this piece of ring gear?",
					choiceA: "a.  A Shin Guard",  choiceB: "b. A Chest Protector",  choiceC: "c. An Arm Brace",  choiceD: "d. A Neck Brace", correctChoice: "b",
					desc: "During a match against Dan 'The Beast' Severn in the 1998 'King of the Ring' Tournament Brown suffered a torn pectoral muscle. He began wearing the chest protector while healing from his injury however he did use it to his advantage on more than one occasion.",
					searchkey: "'Nation of Domination' D Lo Brown"},
					question74 = {question: "On July 25, 1999 Steve Austin defended the WWF Heavyweight Title against longtime rival The Undertaker at 'Fully Loaded 1999' . What type of match did they do battle in?",
					choiceA: "a.  A Texas Death match",  choiceB: "b. An Inferno match",  choiceC: "c. A First Blood match",  choiceD: "d. A Hell in the Cell match", correctChoice: "c",
					desc: "Having been around for many years the rules of a 'First Blood Match' are very simple as the first wrestler to bleed loses the contest. Austin hit The Undertaker with a steel chair thus giving him the match and a victory over one of his most constant adversaries.",
					searchkey: "Stone Cold Steve Austin The Undertaker"},
					question75 = {question: "In July 1998, the comedic duo of Henry and Phineas Godwin were repackaged. Now wearing suits and shades, the two acted very briefly as the muscle for Jeff Jarrett. What were they called?",
					choiceA: "a.  Southern Justice",  choiceB: "b. Hard Time Justice",  choiceC: "c. Private Justice",  choiceD: "d. Justice", correctChoice: "a",
					desc: "Now going by their real names, Mark Canterbury and Dennis Knight were repackaged as the no nonsense duo called Southern Justice. They were brought in as muscle for Jeff Jarrett in his ongoing war against X Pac and The New Age Outlaws. ",
					searchkey: "Southern Justice wwe"},
					question76 = {question: "One of the most popular and unforgettable characters of 'The Attitude Era' was without a doubt Al Snow. Snow was famous for carrying around a plastic head with something spelled backwards on it. What was that statement?",
					choiceA: "a.  Save Me!",  choiceB: "b. I am Crazy!",  choiceC: "c. Redrum!",  choiceD: "d. Help Me!", correctChoice: "d",
					desc: "Al Snow had actually been through a number of personas such as Avatar, Shinobi and the dim witted Leif Cassidy. Actually to give credit where it belongs it was Paul Heyman who dubbed him with the moniker of Al Snow and gave him the mannequin head to carry. ",
					searchkey: "Al Snow wwe"},
					question77 = {question: "Immediately after losing The WWF Heavyweight Title to Steve Austin at 'Wrestlemania XIV' Shawn Michaels did not compete in another match for four and a half years due to severe back problems. In 1999 he did serve a brief stint as WWF Commissioner. What did he once refer to Steve Blackman as?",
					choiceA: "a.  A G.I. Joe lookalike",  choiceB: "b. A candy store gangster",  choiceC: "c. A Bruce Lee wannabe",  choiceD: "d. A Karate Kid imposter", correctChoice: "a",
					desc: "On a segment of 'Raw' in 1999 Shawn Michaels, never at a loss for words referred to the ever silent Steve Blackman as a G.I. Joe Lookalike. ",
					searchkey: "Shawn Michaels HBK"},
					question78 = {question: "The main event of the 1999 'Survivor Series' was slated to be a 'Triple Threat Match' for the WWF Heavyweight Title between The Rock, Triple H and Steve Austin. Austin had to bow out due to an injury which sidelined him for almost a year. Who replaced him in the match?",
					choiceA: "a.  Kane",  choiceB: "b. The Big Show",  choiceC: "c. The Undertaker",  choiceD: "d. Mankind", correctChoice: "b",
					desc: "On November 14, 1999 at 'The Survivor Series' The Big Show did indeed live up to his namesake by not only taking Austin's place in the match but by winning it. The victory gave The Big Show his first run as WWF Heavyweight Champion.",
					searchkey: "The Big Show wwe"},
					question79 = {question: "In the fall of 1999 The Dudley Boys made their long awaited arrival in the WWF. For a brief time Bubba Ray Dudley suffered from a physical ailment. What was it?",
					choiceA: "a.  He Limped",  choiceB: "b. His Hand Shook",  choiceC: "c. He had a Facial Tick",  choiceD: "d. He Stuttered", correctChoice: "d",
					desc: "For several months after their arrival Bubba Ray regained the stuttering problem that once plagued him in ECW. Bubba would begin a sentence and then start to stutter which was stopped when brother D Von would slap him in the back of the head. ",
					searchkey: "The Dudley Boys wwe"},
					question80 = {question: "Believe it or not Shane McMahon once headed up his own faction which was dubbed 'The Mean Street Posse'. Which of the following was NOT a member of that group?",
					choiceA: "a.  Stan the Man",  choiceB: "b. Rodney",  choiceC: "c. Joey Abs",  choiceD: "d. Pete Gas", correctChoice: "a",
					desc: "Real life childhood and teenage friends of Shane McMahon from Greenwich Connecticut comprised the faction called 'The Mean Street Posse'. While Joey Abs faded out fast, Pete Gas and Rodney lasted over a year.",
					searchkey: "The Mean Street Posse wwe"}
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

			var rawImg = $("<img>").attr("style", "width:100%").attr("src", "assets/images/raw.png").attr("alt", "raw");
			var isImg = $("<img>").attr("style", "width:100%").attr("src", "assets/images/is.png").attr("alt", "is");
			var warImg = $("<img>").attr("style", "width:100%").attr("src", "assets/images/war.png").attr("alt", "war");
			$(".cdleft").html(rawImg);
			$(".cdcenter").html(isImg);
			$(".cdright").html(warImg);
			
			$(".trivia").append(triviagame.message);

			triviagame.message = $("<h2>").text(triviagame.curDesc);
			$(".trivia").append(triviagame.message);

			$(".trivia-choices").empty();

			var type = 	triviagame.parseSubject();

		    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=dc6zaTOxFJmzC&limit=2&offset=&rating=&lang=&fmt=json";

		    var igiphy = Math.floor(Math.random() * 2)

		    $.ajax({
		      url: queryURL,
		      method: "GET"
		    }).done(function(response) {
		    	// console.log(response)
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