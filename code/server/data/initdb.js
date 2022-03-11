

const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database('./data/ecoalDB', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE
, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the ecoal database.');
    }
});


let query = [
"PRAGMA foreign_keys = ON",
"DROP TABLE IF EXISTS articles",
"DROP TABLE IF EXISTS tag",
"DROP TABLE IF EXISTS article_tag",
"DROP TABLE IF EXISTS users",


"CREATE TABLE articles (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, content TEXT NOT NULL, thumbnailURL TEXT, mediaType TEXT, mediaURL TEXT, leadStory INTEGER, publish DATETIME)",
"CREATE TABLE tag (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL)",
"CREATE TABLE article_tag (id INTEGER PRIMARY KEY AUTOINCREMENT, idArticle INTEGER REFERENCES articles(id), idTag INTEGER REFERENCES tag(id))",
"CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT NOT NULL, password TEXT NOT NULL, picture TEXT, email TEXT NOT NULL, admin INTEGER NOT NULL)",


"INSERT INTO articles (title, content, thumbnailURL, mediaType, mediaURL) values ('1 in 10 Americans say they don`t eat meat, a growing share of the population', '<p>About 10% of Americans over the age of 18 consider themselves vegan or vegetarian as of January 2022. Thats the main finding of an online survey we administered to 930 Americans, selected to be representative of the U.S population in terms of gender, education, age and income. The margin of error is plus or minus 2%.Based on our findings, which will be published in a forthcoming academic journal article, we believe that this group of people, numbering some 16.5 million, is evenly split between vegetarians and vegans. Vegans dont eat anything derived from animals, including eggs, milk and honey. Vegetarians avoid eating the flesh of animals, including beef, pork, poultry, fish and seafood. </p><h1> Changing rationales</h1> <p>Until fairly recently most people who said they avoided eating meat cited religious and cultural beliefs, animal welfare concerns and personal health precautions</p><p>Environmental activists urge Americans to shun meat. And adopting a vegan diet is increasingly fashionable because of the growing list of celebrities such as Benedict Cumberbatch, Stevie Wonder and Natalie Portman who say they refrain from eating animal products.</p>', 'burger-1-article.jpg', 'image', 'burger-1-article.jpg')",

"INSERT INTO articles (title, content, thumbnailURL, mediaType, mediaURL) values ('Is it possible to listen to too much music each day?','<p>I love listening to music.I love music so much I decided to study it in college. I’m earning a doctorate in music history, for which I have researched everything from early 20th-century French music to 1960s funk.</p><p>I always have my headphones on, too. I listen to music while taking a walk. I listen to lo-fi hip-hop while answering emails. I listen to Brazilian bossa nova music while I cook and clean. I listen to the jazz vocalist Abbey Lincoln while driving around town or upbeat electronic music while taking long road trips.</p><p>I miss out on a lot around me by constantly listening to music, however. I might not hear the sound of birds outside my window or my cat’s mewling when she wants to be fed or to play. I might not hear the rustling of the wind or the chatter of my family enjoying one another’s company right outside my closed door.</p><p>Apart from causing you to miss out on all the sounds that surround you, generally speaking, listening to music does not harm your body. It does not damage your liver, poison your lungs or fry your brain. It is not possible to listen to too much music.</p><h1>Watch the volume</h1><p>There are, however, exceptions.For instance, you can damage your ears if you listen to music too loud for long periods. The World Health Organization estimates that around 50% of teenagers and young adults listen to music on personal audio devices at unsafe levels.</p><p>Fortunately, some smartphones have built-in features that measure how much sound is coming from your headphones. Such features measure the output of sound in a unit of measurement called decibels.</p><p>Silence will produce no decibels at all. A jet plane engine produces 120. Everyday conversations are around 60 decibels, while a balloon popping can be as powerful as 150.</p><p>The WHO has concluded that people can withstand 85 decibels consecutively for eight hours without damaging their hearing. To give an example, I average about five hours of headphone listening a day at 70 decibels.</p>', 'dancing-2-article.jpg', 'image', 'dancing-2-article.jpg')",

"INSERT INTO articles (title, content, thumbnailURL, mediaType, mediaURL) values ('Female business travelers pay less than their male colleagues because they tend to book earlier','<p>Female employees consistently pay lower airfares than men do for the same flights because they tend to book earlier, according to a new peer-reviewed article I co-authored.</p><p>To reach these conclusions, fellow economist Gregory F. Veramendi and I analyzed 7.4 million business trips taken in 2014 by about 2 million workers from 8,000 companies in 60 countries. The dataset included dozens of details such as price paid, origin, destination and how many days in advance of the trip the ticket was purchased, as well as demographics on the purchaser, such as employer, job, age and gender.We compared the airfare paid by employees in the same position within a company for the same class of travel. For example, if a male manager at a specific company booked a business class flight from New York’s JFK airport to Los Angeles International Airport, we compared the price he paid with the one paid by a female manager at the same company for the same trip.</p>', 'woman-airport-article-3.jpg', 'image', 'woman-airport-article-3.jpg')",

"INSERT INTO articles (title, content, thumbnailURL, mediaType, mediaURL) values ('What makes a fruit flavorful?','<p>Female employees consistently pay lower airfares than men do for the same flights because they tend to book earlier, according to a new peer-reviewed article I co-authored.</p><p>To reach these conclusions, fellow economist Gregory F. Veramendi and I analyzed 7.4 million business trips taken in 2014 by about 2 million workers from 8,000 companies in 60 countries. The dataset included dozens of details such as price paid, origin, destination and how many days in advance of the trip the ticket was purchased, as well as demographics on the purchaser, such as employer, job, age and gender.We compared the airfare paid by employees in the same position within a company for the same class of travel. For example, if a male manager at a specific company booked a business class flight from New York’s JFK airport to Los Angeles International Airport, we compared the price he paid with the one paid by a female manager at the same company for the same trip.</p>', 'fruit-article.jpg', 'image', 'fruit-article.jpg')",

"INSERT INTO articles (title, content, thumbnailURL, mediaType, mediaURL) values ('Beyond social mobility, college students value giving back to society','<p>Students who are the first in their family to attend college tend to see it as a means to improve their personal lives and as an opportunity for social mobility. That contrasts with the main message students get from policymakers and universities that largely emphasize career growth.<p>This is the main finding from interviews we conducted with 21 undergraduate students at the University of California, Davis interested in education as a possible career. Eleven of the students were first generation. The rest were what we call continuing education students; that is, people whose parents went to college. They were all either sophomores, juniors or seniors.</p><p>Our aim was to understand how first-generation students view the role of higher education in their lives and in society.</p><p>But in the interviews, we found that students weigh many goals when pursuing a college degree – ones that frequently shifted from primarily social mobility to other, broader goals. These include professional development, learning for the sake of intellectual growth, pursuing careers with a purpose beyond earning potential, and contributing to society.</p><p>Most of the first-generation students we interviewed focused on social justice efforts like giving back to their communities and disrupting systemic inequities.</p><p>For example, one student majoring in Chicana and Chicano studies and minoring in education said that even though teachers do not make a lot of money, her college education will allow her to help kids in low-income communities.</p><p>Students whose parents went to college typically said they see education as a way to help them become better citizens and critical thinkers</p>', 'students-article-4.jpg', 'image', 'students-article-4.jpg')",

"INSERT INTO articles (title, content, thumbnailURL, mediaType, mediaURL) values ('Who invented video games?','<p>Students who are the first in their family to attend college tend to see it as a means to improve their personal lives and as an opportunity for social mobility. That contrasts with the main message students get from policymakers and universities that largely emphasize career growth.<p>This is the main finding from interviews we conducted with 21 undergraduate students at the University of California, Davis interested in education as a possible career. Eleven of the students were first generation. The rest were what we call continuing education students; that is, people whose parents went to college. They were all either sophomores, juniors or seniors.</p><p>Our aim was to understand how first-generation students view the role of higher education in their lives and in society.</p><p>But in the interviews, we found that students weigh many goals when pursuing a college degree – ones that frequently shifted from primarily social mobility to other, broader goals. These include professional development, learning for the sake of intellectual growth, pursuing careers with a purpose beyond earning potential, and contributing to society.</p><p>Most of the first-generation students we interviewed focused on social justice efforts like giving back to their communities and disrupting systemic inequities.</p><p>For example, one student majoring in Chicana and Chicano studies and minoring in education said that even though teachers do not make a lot of money, her college education will allow her to help kids in low-income communities.</p><p>Students whose parents went to college typically said they see education as a way to help them become better citizens and critical thinkers</p>', 'student-article-4.jpg', 'image', 'student-article-4.jpg')",

"INSERT INTO articles (title, content, thumbnailURL, mediaType, mediaURL) values ('Career-based classes keep students more engaged','<p>Taking a STEM-related career and technical education course in high school makes low-income students more engaged in school than those who don’t take such a course. This is what education scholars Michael Gottfried, Daniel Klasik and I found in our study using survey data from nearly 20,000 high school students across the country. </p> <p>We found that career and technical education courses related to science, technology, engineering and mathematics were linked with higher engagement in the 11th grade for low-income students. This finding held after taking key student and school characteristics into account, such as student attitudes and academic histories.</p><p>By higher engagement, we mean that these students were more likely to show up to school and be prepared for class. They were also less likely to be suspended. Interestingly, we did not find that these courses had the same effect – or any effect at all – for students from middle- or high-income families.</p><p>Career and technical education courses in general are designed to be engaging. STEM-related career and technical education courses focus on engineering technology and computer science. These courses teach students applied skills through hands-on experiences. They are meant to prepare students for success in both college and career.</p><h1>Why it matters</h1><p>As schools shifted to remote learning during the COVID-19 pandemic, many students became disengaged from school.Prior to the pandemic, students from low-income backgrounds in particular had lower engagement than students from middle- or high-income backgrounds. During the pandemic, students from low-income backgrounds who were already dealing with issues such as food insecurity, homelessness and access to technology no longer had a physical location to attend school. This led to further disengagement. In Michigan alone, the pandemic resulted in a decrease in enrollment of 53,000 students, many of whom simply stopped going to school. These losses were particularly heavy in urban areas, where low-income families tend to live.</p>.', 'media/stem-article-5.jpg', 'image', 'media/stem-article-5.jpg')",

"INSERT INTO articles (title, content) values ('Western Austrailia opens its border to vacinnated people','<iframe title=New York Times Video - Embed Player width=480 height=321 frameborder=0 scrolling=no allowfullscreen=true marginheight=0 marginwidth=0 id=nyt_video_player src=https://www.nytimes.com/video/players/offsite/index.html?videoId=100000008238464></iframe>')",

"INSERT INTO articles (title, content, thumbnailURL) values ('<p>Climate change: IPCC scientists on the narrowing window to adapt', 'Scientists on the Intergovernmental Panel on Climate Change (IPCC) just published a stark new warning about the impacts climate change is already having on our planet. Some of these impacts are already irreversible. In this episode of The Conversation Weekly, we talk to three of the scientists involved in the report about what the future may hold – and the narrowing window of opportunity to adapt to climate change.And a section of a rocket is about to crash on the Moon. A planetary scientist tells us what he’s hoping to learn from studying the collision and the crater it will leave behind.</p>', '<iframe title=Embed Player width=100% height=188px src=https://embed.acast.com/60087127b9687759d637bade/62208f7dd4b62a0012c71deb scrolling=no frameBorder=0 style=border:none;overflow:hidden;></iframe>')",


"INSERT INTO tag (name) values ('ecoal22')",
"INSERT INTO tag (name) values ('reactJS')",
"INSERT INTO article_tag (idArticle, idTag) values (1,1)",
"INSERT INTO article_tag (idArticle, idTag) values (1,2)",
"INSERT INTO users (username, password, picture, email, admin) values ('pedro', '1234', 'https://www.pokepedia.fr/images/thumb/7/7e/Arcanin-RFVF.png/1200px-Arcanin-RFVF.png', 'pedro@gmail.com', '1')",
"INSERT INTO users (username, password, picture, email, admin) values ('kevin', '1234', 'https://www.pokepedia.fr/images/thumb/7/7e/Arcanin-RFVF.png/1200px-Arcanin-RFVF.png', 'pedro@gmail.com', '0')",
]


db.serialize( () => {

query.forEach(item => {
  db.run(item, err =>  {
    if (err)
      return console.error(err.message)
    console.log(item + ` done`)
  })
})

})

db.close(err => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});
