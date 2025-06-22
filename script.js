// Multilingual quotes data
const quotesData = {
  en: [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      text: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      text: "You are never too old to set another goal or to dream a new dream.",
      author: "C.S. Lewis",
    },
    {
      text: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      text: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
      author: "Thomas Edison",
    },
    {
      text: "The secret of getting ahead is getting started.",
      author: "Mark Twain",
    },
    {
      text: "You don't have to be great to start, but you have to start to be great.",
      author: "Zig Ziglar",
    },
    {
      text: "Hardships often prepare ordinary people for an extraordinary destiny.",
      author: "C.S. Lewis",
    },
    {
      text: "The best way to predict the future is to create it.",
      author: "Peter Drucker",
    },
    {
      text: "Opportunities don't happen. You create them.",
      author: "Chris Grosser",
    },
    {
      text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
      author: "Zig Ziglar",
    },
    {
      text: "Do one thing every day that scares you.",
      author: "Eleanor Roosevelt",
    },
    {
      text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela",
    },
    {
      text: "Your time is limited, so don't waste it living someone else's life.",
      author: "Steve Jobs",
    },
    {
      text: "If you want to achieve greatness, stop asking for permission.",
      author: "Anonymous",
    },
    {
      text: "Dream big and dare to fail.",
      author: "Norman Vaughan",
    },
    {
      text: "The only person you are destined to become is the person you decide to be.",
      author: "Ralph Waldo Emerson",
    },
    {
      text: "Success is walking from failure to failure with no loss of enthusiasm.",
      author: "Winston Churchill",
    },
    {
      text: "Don't let yesterday take up too much of today.",
      author: "Will Rogers",
    },
    {
      text: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky",
    },
    {
      text: "Whether you think you can or you think you can't, you're right.",
      author: "Henry Ford",
    },
    {
      text: "Life is 10% what happens to you and 90% how you react to it.",
      author: "Charles R. Swindoll",
    },
    {
      text: "The mind is everything. What you think you become.",
      author: "Buddha",
    },
    {
      text: "Strive not to be a success, but rather to be of value.",
      author: "Albert Einstein",
    },
    {
      text: "I attribute my success to this: I never gave or took any excuse.",
      author: "Florence Nightingale",
    },
    {
      text: "The best revenge is massive success.",
      author: "Frank Sinatra",
    },
    {
      text: "Every strike brings me closer to the next home run.",
      author: "Babe Ruth",
    },
    {
      text: "We may encounter many defeats but we must not be defeated.",
      author: "Maya Angelou",
    },
    {
      text: "In the middle of difficulty lies opportunity.",
      author: "Albert Einstein",
    },
    {
      text: "You must be the change you wish to see in the world.",
      author: "Mahatma Gandhi",
    },
    {
      text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      author: "Ralph Waldo Emerson",
    },
    {
      text: "The journey of a thousand miles begins with a single step.",
      author: "Lao Tzu",
    },
    {
      text: "Keep your eyes on the stars, and your feet on the ground.",
      author: "Theodore Roosevelt",
    },
    {
      text: "The only way to discover the limits of the possible is to go beyond them into the impossible.",
      author: "Arthur C. Clarke",
    },
    {
      text: "Don't wait. The time will never be just right.",
      author: "Napoleon Hill",
    },
    {
      text: "Success is not the absence of obstacles, but the courage to push through them.",
      author: "Anonymous",
    },
    {
      text: "The harder you work for something, the greater you'll feel when you achieve it.",
      author: "Anonymous",
    },
    {
      text: "Dream it. Believe it. Build it.",
      author: "Anonymous",
    },
    {
      text: "Stay positive, work hard, make it happen.",
      author: "Anonymous",
    },
    {
      text: "Your limitation—it's only your imagination.",
      author: "Anonymous",
    },
    {
      text: "Push yourself, because no one else is going to do it for you.",
      author: "Anonymous",
    },
    {
      text: "Great things never come from comfort zones.",
      author: "Anonymous",
    },
    {
      text: "Success doesn't come to you, you go to it.",
      author: "Marva Collins",
    },
    {
      text: "The difference between try and triumph is just a little umph!",
      author: "Marvin Phillips",
    },
    {
      text: "If you can dream it, you can do it.",
      author: "Walt Disney",
    },
    {
      text: "All our dreams can come true if we have the courage to pursue them.",
      author: "Walt Disney",
    },
    {
      text: "The successful warrior is the average man, with laser-like focus.",
      author: "Bruce Lee",
    },
    {
      text: "I am not a product of my circumstances. I am a product of my decisions.",
      author: "Stephen Covey",
    },
    {
      text: "Every next level of your life will demand a different you.",
      author: "Anonymous",
    },
    {
      text: "You don't need to see the whole staircase, just take the first step.",
      author: "Martin Luther King Jr.",
    },
    {
      text: "Act as if what you do makes a difference. It does.",
      author: "William James",
    },
    {
      text: "Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome.",
      author: "Booker T. Washington",
    },
    {
      text: "The only place where success comes before work is in the dictionary.",
      author: "Vidal Sassoon",
    },
    {
      text: "Don't be afraid to give up the good to go for the great.",
      author: "John D. Rockefeller",
    },
    {
      text: "I find that the harder I work, the more luck I seem to have.",
      author: "Thomas Jefferson",
    },
    {
      text: "If you are not willing to risk the usual, you will have to settle for the ordinary.",
      author: "Jim Rohn",
    },
    {
      text: "Success is liking yourself, liking what you do, and liking how you do it.",
      author: "Maya Angelou",
    },
    {
      text: "You can't use up creativity. The more you use, the more you have.",
      author: "Maya Angelou",
    },
    {
      text: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      text: "Success seems to be connected with action. Successful people keep moving.",
      author: "Conrad Hilton",
    },
    {
      text: "Before anything else, preparation is the key to success.",
      author: "Alexander Graham Bell",
    },
    {
      text: "The real opportunity for success lies within the person and not in the job.",
      author: "Zig Ziglar",
    },
    {
      text: "You can't build a reputation on what you are going to do.",
      author: "Henry Ford",
    },
    {
      text: "Try not to become a man of success. Rather become a man of value.",
      author: "Albert Einstein",
    },
    {
      text: "Success is not in what you have, but who you are.",
      author: "Bo Bennett",
    },
    {
      text: "The road to success and the road to failure are almost exactly the same.",
      author: "Colin R. Davis",
    },
    {
      text: "Always bear in mind that your own resolution to succeed is more important than any other.",
      author: "Abraham Lincoln",
    },
    {
      text: "Success is how high you bounce when you hit bottom.",
      author: "George S. Patton",
    },
    {
      text: "Anyone who has never made a mistake has never tried anything new.",
      author: "Albert Einstein",
    },
    {
      text: "The ones who are crazy enough to think they can change the world, are the ones that do.",
      author: "Steve Jobs",
    },
    {
      text: "Do what you can, with what you have, where you are.",
      author: "Theodore Roosevelt",
    },
    {
      text: "Security is mostly a superstition. Life is either a daring adventure or nothing.",
      author: "Helen Keller",
    },
    {
      text: "The only impossible journey is the one you never begin.",
      author: "Tony Robbins",
    },
    {
      text: "You get in life what you have the courage to ask for.",
      author: "Oprah Winfrey",
    },
    {
      text: "People who are crazy enough to think they can change the world, are the ones who do.",
      author: "Rob Siltanen",
    },
    {
      text: "Success is getting what you want, happiness is wanting what you get.",
      author: "W.P. Kinsella",
    },
    {
      text: "Don't let the fear of losing be greater than the excitement of winning.",
      author: "Robert Kiyosaki",
    },
    {
      text: "The future belongs to those who prepare for it today.",
      author: "Malcolm X",
    },
    {
      text: "To succeed in life, you need two things: ignorance and confidence.",
      author: "Mark Twain",
    },
    {
      text: "Life is trying things to see if they work.",
      author: "Ray Bradbury",
    },
    {
      text: "Success is going from failure to failure without losing enthusiasm.",
      author: "Winston Churchill",
    },
    {
      text: "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      text: "The purpose of our lives is to be happy.",
      author: "Dalai Lama",
    },
    {
      text: "You never fail until you stop trying.",
      author: "Albert Einstein",
    },
    {
      text: "Build your own dreams, or someone else will hire you to build theirs.",
      author: "Farrah Gray",
    },
    {
      text: "I failed my way to success.",
      author: "Thomas Edison",
    },
    {
      text: "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.",
      author: "Joel Brown",
    },
    {
      text: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
      author: "Joshua J. Marine",
    },
    {
      text: "The biggest risk is not taking any risk.",
      author: "Mark Zuckerberg",
    },
    {
      text: "You can't fall if you don't climb. But there's no joy in living your whole life on the ground.",
      author: "Anonymous",
    },
    {
      text: "We generate fears while we sit. We overcome them by action.",
      author: "Dr. Henry Link",
    },
    {
      text: "The only way to achieve the impossible is to believe it is possible.",
      author: "Charles Kingsleigh",
    },
    {
      text: "Do what you love, and you will never work a day in your life.",
      author: "Confucius",
    },
    {
      text: "Your life does not get better by chance, it gets better by change.",
      author: "Jim Rohn",
    },
    {
      text: "If you want to fly, you have to give up the things that weigh you down.",
      author: "Toni Morrison",
    },
    {
      text: "The secret to success is to know something nobody else knows.",
      author: "Aristotle Onassis",
    },
    {
      text: "The best way out is always through.",
      author: "Robert Frost",
    },
    {
      text: "Success is not about being better than someone else, it's about being better than you were yesterday.",
      author: "Anonymous",
    },
    {
      text: "Don't wish it were easier, wish you were better.",
      author: "Jim Rohn",
    },
    {
      text: "The only thing worse than starting something and failing is not starting something.",
      author: "Seth Godin",
    },
    {
      text: "You don't need to be perfect to inspire others. Let people get inspired by how you deal with your imperfections.",
      author: "Anonymous",
    },
    {
      text: "The greatest mistake you can make in life is to be continually fearing you will make one.",
      author: "Elbert Hubbard",
    },
    {
      text: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
      author: "Henry Ford",
    },
    {
      text: "It's not about how hard you hit. It's about how hard you can get hit and keep moving forward.",
      author: "Rocky Balboa",
    },
    {
      text: "The only way to make sense out of change is to plunge into it, move with it, and enjoy the dance.",
      author: "Alan Watts",
    },
    {
      text: "You don't have to be rich to travel well.",
      author: "Eugene Fodor",
    },
    {
      text: "Success is a journey, not a destination.",
      author: "Ben Sweetland",
    },
    {
      text: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
      author: "Jordan Belfort",
    },
    {
      text: "You are stronger than you think you are.",
      author: "Anonymous",
    },
    {
      text: "Every day is a second chance.",
      author: "Anonymous",
    },
    {
      text: "Your dreams don't have an expiration date. Take a deep breath and try again.",
      author: "Anonymous",
    },
    {
      text: "The only way to grow is to step out of your comfort zone.",
      author: "Anonymous",
    },
    {
      text: "Believe in yourself, and the rest will fall into place.",
      author: "Anonymous",
    },
    {
      text: "You are capable of more than you know.",
      author: "Anonymous",
    },
    {
      text: "Don't stop until you're proud.",
      author: "Anonymous",
    },
    {
      text: "Turn your wounds into wisdom.",
      author: "Oprah Winfrey",
    },
    {
      text: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb",
    },
    {
      text: "You don't need permission to chase your dreams.",
      author: "Anonymous",
    },
    {
      text: "The only person you should try to be better than is the person you were yesterday.",
      author: "Anonymous",
    },
    {
      text: "Keep going. Everything you need will come to you at the perfect time.",
      author: "Anonymous",
    },
    {
      text: "Your potential is endless.",
      author: "Anonymous",
    },
    {
      text: "Difficult roads often lead to beautiful destinations.",
      author: "Anonymous",
    },
    {
      text: "You are never too old to reinvent yourself.",
      author: "Anonymous",
    },
    {
      text: "The only limits in life are the ones you set for yourself.",
      author: "Anonymous",
    },
    {
      text: "Every accomplishment starts with the decision to try.",
      author: "Anonymous",
    },
    {
      text: "Don't let small minds convince you that your dreams are too big.",
      author: "Anonymous",
    },
    {
      text: "You were born to make an impact.",
      author: "Anonymous",
    },
    {
      text: "The best view comes after the hardest climb.",
      author: "Anonymous",
    },
    {
      text: "You don't have to be fearless, just don't let fear stop you.",
      author: "Anonymous",
    },
    {
      text: "Success is what happens when preparation meets opportunity.",
      author: "Anonymous",
    },
    {
      text: "You are the author of your own story.",
      author: "Anonymous",
    },
    {
      text: "The only way to fail is to give up.",
      author: "Anonymous",
    },
    {
      text: "Your hustle will inspire others.",
      author: "Anonymous",
    },
    {
      text: "Don't wait for opportunity. Create it.",
      author: "Anonymous",
    },
    {
      text: "You can't change the past, but you can shape the future.",
      author: "Anonymous",
    },
    {
      text: "The world needs your unique gifts.",
      author: "Anonymous",
    },
    {
      text: "Every step forward counts, no matter how small.",
      author: "Anonymous",
    },
    {
      text: "Your dreams are worth fighting for.",
      author: "Anonymous",
    },
    {
      text: "You are enough just as you are.",
      author: "Anonymous",
    },
    {
      text: "The key to success is to start before you're ready.",
      author: "Marie Forleo",
    },
    {
      text: "You can't go back and change the beginning, but you can start where you are and change the ending.",
      author: "C.S. Lewis",
    },
    {
      text: "Success is not about the destination, it's about the journey.",
      author: "Zig Ziglar",
    },
    {
      text: "The only thing that overcomes hard luck is hard work.",
      author: "Harry Golden",
    },
    {
      text: "You have within you, right now, everything you need to deal with whatever the world can throw at you.",
      author: "Brian Tracy",
    },
    {
      text: "The future depends on what you do today.",
      author: "Mahatma Gandhi",
    },
    {
      text: "You don't have to be great to get started, but you have to get started to be great.",
      author: "Les Brown",
    },
    {
      text: "The only way to do great work is to do what you love.",
      author: "Anonymous",
    },
    {
      text: "Your passion is waiting for your courage to catch up.",
      author: "Isabelle Lafleche",
    },
    {
      text: "Success is the sum of small efforts, repeated day in and day out.",
      author: "Robert Collier",
    },
    {
      text: "The only thing that stands between you and your dream is the will to try.",
      author: "Anonymous",
    },
    {
      text: "You are never too old to set a new goal or dream a new dream.",
      author: "Les Brown",
    },
    {
      text: "The greatest risk is the risk of riskless living.",
      author: "Stephen Covey",
    },
    {
      text: "You don't need to know all the answers to take the first step.",
      author: "Anonymous",
    },
    {
      text: "Your life is your message to the world. Make it inspiring.",
      author: "Anonymous",
    },
    {
      text: "The only limit is the one you set yourself.",
      author: "Anonymous",
    },
    {
      text: "Success is not the key to happiness. Happiness is the key to success.",
      author: "Albert Schweitzer",
    },
    {
      text: "You are braver than you believe, stronger than you seem, and smarter than you think.",
      author: "A.A. Milne",
    },
    {
      text: "The only way to achieve greatness is to embrace challenges.",
      author: "Anonymous",
    },
    {
      text: "Your dreams are the blueprints for your future.",
      author: "Anonymous",
    },
    {
      text: "The best way to gain self-confidence is to do what you are afraid to do.",
      author: "Swati Sharma",
    },
    {
      text: "You don't have to be perfect to be amazing.",
      author: "Anonymous",
    },
    {
      text: "The only thing holding you back is the belief that something is holding you back.",
      author: "Anonymous",
    },
    {
      text: "Success is not about how much you have, but how much you give.",
      author: "Anonymous",
    },
    {
      text: "You can't control the wind, but you can adjust your sails.",
      author: "Anonymous",
    },
    {
      text: "The only way to make a difference is to be different.",
      author: "Anonymous",
    },
    {
      text: "Your focus determines your reality.",
      author: "George Lucas",
    },
    {
      text: "The only thing that can stop you is you.",
      author: "Anonymous",
    },
    {
      text: "You are not your mistakes; you are what you do next.",
      author: "Anonymous",
    },
    {
      text: "The world is full of possibilities for those who dare to dream.",
      author: "Anonymous",
    },
    {
      text: "Your journey is your own. Don't compare it to anyone else's.",
      author: "Anonymous",
    },
    {
      text: "The only way to succeed is to never give up.",
      author: "Anonymous",
    },
    {
      text: "You are the creator of your own destiny.",
      author: "Anonymous",
    },
    {
      text: "The only thing that matters is that you keep moving forward.",
      author: "Anonymous",
    },
    {
      text: "Your dreams are calling. Will you answer?",
      author: "Anonymous",
    },
    {
      text: "The only way to achieve your goals is to take action.",
      author: "Anonymous",
    },
    {
      text: "You are stronger than your toughest challenges.",
      author: "Anonymous",
    },
    {
      text: "The only limit to your success is your own imagination.",
      author: "Anonymous",
    },
    {
      text: "You don't have to be the best, just be your best.",
      author: "Anonymous",
    },
    {
      text: "The only way to grow is to embrace change.",
      author: "Anonymous",
    },
    {
      text: "Your courage will inspire others to be brave.",
      author: "Anonymous",
    },
    {
      text: "The only thing you can't do is what you don't try.",
      author: "Anonymous",
    },
    {
      text: "You are the architect of your own future.",
      author: "Anonymous",
    },
    {
      text: "The only way to succeed is to keep pushing forward.",
      author: "Anonymous",
    },
    {
      text: "Your dreams are the seeds of your future.",
      author: "Anonymous",
    },
    {
      text: "The only thing that can stop you is fear.",
      author: "Anonymous",
    },
    {
      text: "You are capable of achieving greatness.",
      author: "Anonymous",
    },
    {
      text: "The only way to make a difference is to take action.",
      author: "Anonymous",
    },
    {
      text: "Your journey is just beginning.",
      author: "Anonymous",
    },
    {
      text: "The only limit is the one you set for yourself.",
      author: "Anonymous",
    },
    {
      text: "You are stronger than you know.",
      author: "Anonymous",
    },
    {
      text: "The only way to achieve your dreams is to believe in them.",
      author: "Anonymous",
    },
    {
      text: "Your potential is limitless.",
      author: "Anonymous",
    },
    {
      text: "The only thing that matters is that you keep trying.",
      author: "Anonymous",
    },
    {
      text: "You are the master of your own fate.",
      author: "Anonymous",
    },
    {
      text: "The only way to succeed is to never stop learning.",
      author: "Anonymous",
    },
    {
      text: "Your dreams are worth the effort.",
      author: "Anonymous",
    },
    {
      text: "The only thing that can hold you back is doubt.",
      author: "Anonymous",
    },
    {
      text: "You are destined for greatness.",
      author: "Anonymous",
    },
    {
      text: "The only way to achieve your goals is to stay focused.",
      author: "Anonymous",
    },
    {
      text: "Your journey is your own. Make it epic.",
      author: "Anonymous",
    },
    {
      text: "The only limit is your own mind.",
      author: "Anonymous",
    },
    {
      text: "You are capable of anything you set your mind to.",
      author: "Anonymous",
    },
    {
      text: "The only way to succeed is to keep moving forward.",
      author: "Anonymous",
    },
    {
      text: "Your dreams are the foundation of your future.",
      author: "Anonymous",
    },
    {
      text: "The only thing that can stop you is giving up.",
      author: "Anonymous",
    },
    {
      text: "You are stronger than any challenge you face.",
      author: "Anonymous",
    },
    {
      text: "The only way to achieve greatness is to take risks.",
      author: "Anonymous",
    },
    {
      text: "Your potential is infinite.",
      author: "Anonymous",
    },
    {
      text: "The only thing that matters is that you keep going.",
      author: "Anonymous",
    },
    {
      text: "You are the creator of your own success.",
      author: "Anonymous",
    },
    {
      text: "The only way to succeed is to stay true to yourself.",
      author: "Anonymous",
    },
    {
      text: "Your dreams are the roadmap to your future.",
      author: "Anonymous",
    },
    {
      text: "The only thing that can hold you back is fear.",
      author: "Anonymous",
    },
    {
      text: "You are capable of achieving your wildest dreams.",
      author: "Anonymous",
    },
    {
      text: "The only way to make a difference is to be yourself.",
      author: "Anonymous",
    },
    {
      text: "Your journey is just the beginning.",
      author: "Anonymous",
    },
    {
      text: "The only limit is the one you create.",
      author: "Anonymous",
    },
    {
      text: "You are stronger than you think.",
      author: "Anonymous",
    },
    {
      text: "The only way to achieve your dreams is to take action.",
      author: "Anonymous",
    },
    {
      text: "Your potential is boundless.",
      author: "Anonymous",
    },
    {
      text: "The only thing that matters is that you keep pushing.",
      author: "Anonymous",
    },
    {
      text: "You are the architect of your own destiny.",
      author: "Anonymous",
    },
    {
      text: "The only way to succeed is to keep learning.",
      author: "Anonymous",
    },
    {
      text: "Your dreams are worth fighting for.",
      author: "Anonymous",
    },
    {
      text: "The only thing that can stop you is doubt.",
      author: "Anonymous",
    },
    {
      text: "You are destined to make a difference.",
      author: "Anonymous",
    },
    {
      text: "The only way to achieve your goals is to stay determined.",
      author: "Anonymous",
    },
    {
      text: "Your journey is your own. Make it legendary.",
      author: "Anonymous",
    },
    {
      text: "The only limit is your imagination.",
      author: "Anonymous",
    },
    {
      text: "You are capable of anything you believe in.",
      author: "Anonymous",
    },
    {
      text: "The only way to succeed is to keep trying.",
      author: "Anonymous",
    },
    {
      text: "Your dreams are the key to your future.",
      author: "Anonymous",
    },
    {
      text: "The only thing that can hold you back is giving up.",
      author: "Anonymous",
    },
    {
      text: "You are stronger than any obstacle.",
      author: "Anonymous",
    },
    {
      text: "The only way to achieve greatness is to embrace failure.",
      author: "Anonymous",
    },
    {
      text: "Your potential is limitless.",
      author: "Anonymous",
    },
    {
      text: "The only thing that matters is that you keep moving.",
      author: "Anonymous",
    },
    {
      text: "You are the creator of your own path.",
      author: "Anonymous",
    },
    {
      text: "The only way to succeed is to stay focused.",
      author: "Anonymous",
    },
    {
      text: "Your dreams are the foundation of your success.",
      author: "Anonymous",
    },
    {
      text: "The only thing that can stop you is fear.",
      author: "Anonymous",
    },
    {
      text: "You are capable of achieving greatness.",
      author: "Anonymous",
    },
    {
      text: "The only way to make a difference is to take action.",
      author: "Anonymous",
    },
    {
      text: "Your journey is just beginning.",
      author: "Anonymous",
    },
    {
      text: "The only limit is the one you set.",
      author: "Anonymous",
    },
    {
      text: "You are stronger than you know.",
      author: "Anonymous",
    },
    {
      text: "The only way to achieve your dreams is to believe in them.",
      author: "Anonymous",
    },
    {
      text: "Your potential is infinite.",
      author: "Anonymous",
    },
    {
      text: "The only thing that matters is that you keep trying.",
      author: "Anonymous",
    },
    {
      text: "You are the master of your own destiny.",
      author: "Anonymous",
    },
    {
      text: "The only way to succeed is to never stop learning.",
      author: "Anonymous",
    },
    {
      text: "Your dreams are worth the effort.",
      author: "Anonymous",
    },
    {
      text: "The only thing that can hold you back is doubt.",
      author: "Anonymous",
    },
    {
      text: "You are destined for greatness.",
      author: "Anonymous",
    },
    {
      text: "The only way to achieve your goals is to stay focused.",
      author: "Anonymous",
    },
    {
      text: "Your journey is your own. Make it epic.",
      author: "Anonymous",
    },
    {
      text: "The only limit is your own mind.",
      author: "Anonymous",
    },
    {
      text: "You are capable of anything you set your mind to.",
      author: "Anonymous",
    },
    {
      text: "The only way to succeed is to keep moving forward.",
      author: "Anonymous",
    },
    {
      text: "Your dreams are the foundation of your future.",
      author: "Anonymous",
    },
    {
      text: "The only thing that can stop you is giving up.",
      author: "Anonymous",
    },
    {
      text: "You are stronger than any challenge you face.",
      author: "Anonymous",
    },
    {
      text: "The only way to achieve greatness is to take risks.",
      author: "Anonymous",
    },
    {
      text: "Your potential is infinite.",
      author: "Anonymous",
    },
    {
      text: "The only thing that matters is that you keep going.",
      author: "Anonymous",
    },
    {
      text: "You are the creator of your own success.",
      author: "Anonymous",
    },
    {
      text: "The only way to succeed is to stay true to yourself.",
      author: "Anonymous",
    },
    {
      text: "Your dreams are the roadmap to your future.",
      author: "Anonymous",
    },
    {
      text: "The only thing that can hold you back is fear.",
      author: "Anonymous",
    },
    {
      text: "You are capable of achieving your wildest dreams.",
      author: "Anonymous",
    },
    {
      text: "The only way to make a difference is to be yourself.",
      author: "Anonymous",
    },
    {
      text: "Your journey is just the beginning.",
      author: "Anonymous",
    },
    {
      text: "The only limit is the one you create.",
      author: "Anonymous",
    },
    {
      text: "You are stronger than you think.",
      author: "Anonymous",
    },
    {
      text: "The only way to achieve your dreams is to take action.",
      author: "Anonymous",
    },
    {
      text: "Your potential is boundless.",
      author: "Anonymous",
    },
    {
      text: "The only thing that matters is that you keep pushing.",
      author: "Anonymous",
    },
    {
      text: "You are the architect of your own destiny.",
      author: "Anonymous",
    },
    {
      text: "The only way to succeed is to keep learning.",
      author: "Anonymous",
    },
    {
      text: "Your dreams are worth fighting for.",
      author: "Anonymous",
    },
    {
      text: "The only thing that can stop you is doubt.",
      author: "Anonymous",
    },
    {
      text: "You are destined to make a difference.",
      author: "Anonymous",
    },
    {
      text: "The only way to achieve your goals is to stay determined.",
      author: "Anonymous",
    },
    {
      text: "Your journey is your own. Make it legendary.",
      author: "Anonymous",
    },
    {
      text: "The only limit is your imagination.",
      author: "Anonymous",
    },
    {
      text: "You are capable of anything you believe in.",
      author: "Anonymous",
    },
    {
      text: "The only way to succeed is to keep trying.",
      author: "Anonymous",
    },
    {
      text: "Your dreams are the key to your future.",
      author: "Anonymous",
    },
    {
      text: "The only thing that can hold you back is giving up.",
      author: "Anonymous",
    },
    {
      text: "You are stronger than any obstacle.",
      author: "Anonymous",
    },
    {
      text: "The only way to achieve greatness is to embrace failure.",
      author: "Anonymous",
    },
    {
      text: "Your potential is limitless.",
      author: "Anonymous",
    },
    {
      text: "The only thing that matters is that you keep moving.",
      author: "Anonymous",
    },
    {
      text: "You are the creator of your own path.",
      author: "Anonymous",
    },
    {
      text: "The only way to succeed is to stay focused.",
      author: "Anonymous",
    },
    {
      text: "Your dreams are the foundation of your success.",
      author: "Anonymous",
    },
    {
      text: "The only thing that can stop you is fear.",
      author: "Anonymous",
    },
    {
      text: "You are capable of achieving greatness.",
      author: "Anonymous",
    },
    {
      text: "The only way to make a difference is to take action.",
      author: "Anonymous",
    },
    {
      text: "Your journey is just beginning.",
      author: "Anonymous",
    },
  ],
  hi: [
    {
      text: "महान कार्य करने का एकमात्र तरीका यह है कि आप जो करते हैं उससे प्यार करें।",
      author: "स्टीव जॉब्स",
    },
    {
      text: "विश्वास रखो कि तुम कर सकते हो और तुम आधे रास्ते पर हो।",
      author: "थियोडोर रूजवेल्ट",
    },
    {
      text: "घड़ी को मत देखो; वह जो करता है वही करो। चलते रहो।",
      author: "सैम लेवेंसन",
    },
    {
      text: "भविष्य उनका होता है जो अपने सपनों की सुंदरता में विश्वास करते हैं।",
      author: "एलेनोर रूजवेल्ट",
    },
    {
      text: "सफलता अंतिम नहीं है, विफलता घातक नहीं है: यह जारी रखने का साहस है जो मायने रखता है।",
      author: "विंस्टन चर्चिल",
    },
    {
      text: "आप कभी भी एक और लक्ष्य निर्धारित करने या एक नया सपना देखने के लिए बूढ़े नहीं होते।",
      author: "सी.एस. लुईस",
    },
    {
      text: "कल की हमारी प्राप्ति की एकमात्र सीमा आज की हमारी शंकाएं होंगी।",
      author: "फ्रैंकलिन डी. रूजवेल्ट",
    },
    {
      text: "इससे कोई फर्क नहीं पड़ता कि आप कितनी धीमी गति से चलते हैं जब तक आप रुकते नहीं हैं।",
      author: "कन्फ्यूशियस",
    },
    {
      text: "हमारी सबसे बड़ी कमजोरी हार मानने में निहित है। सफल होने का सबसे निश्चित तरीका हमेशा एक और बार प्रयास करना है।",
      author: "थॉमस एडिसन",
    },
    {
      text: "आगे बढ़ने का रहस्य शुरू हो रहा है।",
      author: "मार्क ट्वेन",
    },
    {
      text: "महान बनने के लिए आपको महान होने की शुरुआत करने की जरूरत नहीं है, लेकिन आपको शुरू करना होगा।",
      author: "जिग जिगलर",
    },
    {
      text: "कठिनाइयां अक्सर सामान्य लोगों को असाधारण भाग्य के लिए तैयार करती हैं।",
      author: "सी.एस. लुईस",
    },
    {
      text: "भविष्य की भविष्यवाणी करने का सबसे अच्छा तरीका इसे बनाना है।",
      author: "पीटर ड्रकर",
    },
    {
      text: "अवसर नहीं आते। आप उन्हें बनाते हैं।",
      author: "क्रिस ग्रॉसर",
    },
    {
      text: "अपने लक्ष्यों को प्राप्त करने से जो मिलता है, वह उतना महत्वपूर्ण नहीं है जितना कि आप उन लक्ष्यों को प्राप्त करके बनते हैं।",
      author: "जिग जिगलर",
    },
    {
      text: "हर दिन एक ऐसी चीज करें जो आपको डराए।",
      author: "एलेनोर रूजवेल्ट",
    },
    {
      text: "जीवन की सबसे बड़ी महिमा कभी न गिरने में नहीं, बल्कि हर बार गिरकर उठने में है।",
      author: "नेल्सन मंडेला",
    },
    {
      text: "आपका समय सीमित है, इसलिए इसे किसी और की जिंदगी जीने में बर्बाद न करें।",
      author: "स्टीव जॉब्स",
    },
    {
      text: "यदि आप महानता हासिल करना चाहते हैं, तो अनुमति मांगना बंद करें।",
      author: "अज्ञात",
    },
    {
      text: "बड़े सपने देखें और असफल होने की हिम्मत करें।",
      author: "नॉर्मन वॉन",
    },
    {
      text: "आप केवल वही व्यक्ति बनने के लिए नियत हैं जिसे आप बनने का फैसला करते हैं।",
      author: "राल्फ वाल्डो एमर्सन",
    },
    {
      text: "सफलता असफलता से असफलता की ओर उत्साह खोए बिना चलना है।",
      author: "विंस्टन चर्चिल",
    },
    {
      text: "कल को आज के बहुत ज्यादा हिस्से पर कब्जा न करने दें।",
      author: "विल रॉजर्स",
    },
    {
      text: "आप उन सभी शॉट्स को 100% मिस करते हैं जो आप नहीं लेते।",
      author: "वेन ग्रेट्ज़की",
    },
    {
      text: "आप चाहे सोचें कि आप कर सकते हैं या नहीं कर सकते, आप सही हैं।",
      author: "हेनरी फोर्ड",
    },
    {
      text: "जिंदगी 10% आपके साथ क्या होता है और 90% आप उसका जवाब कैसे देते हैं।",
      author: "चार्ल्स आर. स्विंडॉल",
    },
    {
      text: "मन ही सब कुछ है। आप जो सोचते हैं, वही बन जाते हैं।",
      author: "बुद्ध",
    },
    {
      text: "सफलता के लिए प्रयास न करें, बल्कि मूल्यवान बनने का प्रयास करें।",
      author: "अल्बर्ट आइंस्टीन",
    },
    {
      text: "मैं अपनी सफलता का श्रेय इस बात को देता हूँ: मैंने कभी कोई बहाना नहीं दिया या लिया।",
      author: "फ्लोरेंस नाइटिंगेल",
    },
    {
      text: "सबसे अच्छा बदला भारी सफलता है।",
      author: "फ्रैंक सिनात्रा",
    },
    {
      text: "हर स्ट्राइक मुझे अगले होम रन के करीब लाता है।",
      author: "बेब रूथ",
    },
    {
      text: "हमें कई पराजयों का सामना करना पड़ सकता है, लेकिन हमें पराजित नहीं होना चाहिए।",
      author: "माया एंजेलो",
    },
    {
      text: "कठिनाई के बीच में अवसर छिपा होता है।",
      author: "अल्बर्ट आइंस्टीन",
    },
    {
      text: "आपको वह बदलाव स्वयं बनना होगा जो आप दुनिया में देखना चाहते हैं।",
      author: "महात्मा गांधी",
    },
    {
      text: "हमारे पीछे और हमारे सामने जो कुछ है, वह उसकी तुलना में छोटा है जो हमारे भीतर है।",
      author: "राल्फ वाल्डो एमर्सन",
    },
    {
      text: "हزار मील की यात्रा एक कदम से शुरू होती है।",
      author: "लाओ त्ज़ु",
    },
    {
      text: "अपनी नजरें तारों पर रखें, और अपने पैर जमीन पर।",
      author: "थियोडोर रूजवेल्ट",
    },
    {
      text: "संभव की सीमाओं को जानने का एकमात्र तरीका असंभव की ओर बढ़ना है।",
      author: "आर्थर सी. क्लार्क",
    },
    {
      text: "प्रतीक्षा न करें। समय कभी भी बिल्कुल सही नहीं होगा।",
      author: "नेपोलियन हिल",
    },
    {
      text: "सफलता बाधाओं की अनुपस्थिति नहीं है, बल्कि उन्हें पार करने का साहस है।",
      author: "अज्ञात",
    },
    {
      text: "आप जितनी मेहनत से कुछ चाहते हैं, उसे हासिल करने पर उतना ही अच्छा महसूस करेंगे।",
      author: "अज्ञात",
    },
    {
      text: "सपना देखें। विश्वास करें। इसे बनाएं।",
      author: "अज्ञात",
    },
    {
      text: "सकारात्मक रहें, कड़ी मेहनत करें, इसे संभव बनाएं।",
      author: "अज्ञात",
    },
    {
      text: "आपकी सीमा—यह केवल आपकी कल्पना है।",
      author: "अज्ञात",
    },
    {
      text: "खुद को प्रेरित करें, क्योंकि कोई और आपके लिए यह नहीं करेगा।",
      author: "अज्ञात",
    },
    {
      text: "महान चीजें कभी भी आराम क्षेत्र से नहीं आतीं।",
      author: "अज्ञात",
    },
    {
      text: "सफलता आपके पास नहीं आती, आपको उसके पास जाना होता है।",
      author: "मार्वा कॉलिन्स",
    },
    {
      text: "प्रयास और विजय के बीच का अंतर बस थोड़ा सा जोश है!",
      author: "मार्विन फिलिप्स",
    },
    {
      text: "अगर आप इसे सपने में देख सकते हैं, तो आप इसे कर सकते हैं।",
      author: "वॉल्ट डिज़्नी",
    },
    {
      text: "हमारे सभी सपने तब सच हो सकते हैं जब हम उन्हें पाने की हिम्मत रखते हैं।",
      author: "वॉल्ट डिज़्नी",
    },
    {
      text: "सफल योद्धा औसत व्यक्ति होता है, जिसका ध्यान लेजर जैसा होता है।",
      author: "ब्रूस ली",
    },
    {
      text: "मैं अपनी परिस्थितियों का उत्पाद नहीं हूँ। मैं अपने निर्णयों का उत्पाद हूँ।",
      author: "स्टीफन कोवी",
    },
    {
      text: "आपके जीवन का हर अगला स्तर आपसे एक अलग व्यक्ति की मांग करेगा।",
      author: "अज्ञात",
    },
    {
      text: "आपको पूरी सीढ़ी देखने की जरूरत नहीं है, बस पहला कदम उठाएं।",
      author: "मार्टिन लूथर किंग जूनियर",
    },
    {
      text: "ऐसा व्यवहार करें जैसे आप जो करते हैं उससे फर्क पड़ता है। यह पड़ता है।",
      author: "विलियम जेम्स",
    },
    {
      text: "सफलता इस बात से नहीं मापी जाती कि आप जीवन में कितनी ऊंचाई तक पहुंचे, बल्कि उन बाधाओं से जिन्हें आपने पार किया।",
      author: "बुकर टी. वाशिंगटन",
    },
    {
      text: "केवल शब्दकोश में ही सफलता काम से पहले आती है।",
      author: "विडाल ससून",
    },
    {
      text: "अच्छे को छोड़ने से डरें नहीं ताकि आप महान के लिए जा सकें।",
      author: "जॉन डी. रॉकफेलर",
    },
    {
      text: "मैं जितनी मेहनत करता हूँ, उतना ही मुझे भाग्य मिलता प्रतीत होता है।",
      author: "थॉमस जेफरसन",
    },
    {
      text: "यदि आप सामान्य जोखिम लेने को तैयार नहीं हैं, तो आपको सामान्य से संतुष्ट होना पड़ेगा।",
      author: "जिम रोहन",
    },
    {
      text: "सफलता खुद को पसंद करने, जो आप करते हैं उसे पसंद करने, और उसे कैसे करते हैं उसे पसंद करने में है।",
      author: "माया एंजेलो",
    },
    {
      text: "आप रचनात्मकता को खत्म नहीं कर सकते। जितना आप इसका उपयोग करते हैं, उतना ही आपके पास होता है।",
      author: "माया एंजेलो",
    },
    {
      text: "शुरुआत करने का तरीका है बात करना बंद करें और करना शुरू करें।",
      author: "वॉल्ट डिज़्नी",
    },
    {
      text: "सफलता कार्रवाई से जुड़ी होती है। सफल लोग चलते रहते हैं।",
      author: "कॉनराड हिल्टन",
    },
    {
      text: "सफलता की कुंजी हर चीज से पहले तैयारी है।",
      author: "अलेक्जेंडर ग्राहम बेल",
    },
    {
      text: "सफलता का असली अवसर नौकरी में नहीं, बल्कि व्यक्ति के भीतर होता है।",
      author: "जिग जिगलर",
    },
    {
      text: "आप उस पर प्रतिष्ठा नहीं बना सकते जो आप करने जा रहे हैं।",
      author: "हेनरी फोर्ड",
    },
    {
      text: "सफलता का प्रयास न करें। इसके बजाय मूल्य का व्यक्ति बनें।",
      author: "अल्बर्ट आइंस्टीन",
    },
    {
      text: "सफलता इस बात में नहीं है कि आपके पास क्या है, बल्कि आप क्या हैं।",
      author: "बो बेनेट",
    },
    {
      text: "सफलता और असफलता का रास्ता लगभग एक जैसा होता है।",
      author: "कोलिन आर. डेविस",
    },
    {
      text: "हमेशा ध्यान रखें कि सफल होने का आपका अपना संकल्प किसी भी चीज से ज्यादा महत्वपूर्ण है।",
      author: "अब्राहम लिंकन",
    },
    {
      text: "सफलता इस बात में है कि आप नीचे गिरने पर कितनी ऊंचाई तक उछलते हैं।",
      author: "जॉर्ज एस. पैटन",
    },
    {
      text: "जिसने कभी गलती नहीं की, उसने कभी कुछ नया करने की कोशिश नहीं की।",
      author: "अल्बर्ट आइंस्टीन",
    },
    {
      text: "वे जो यह सोचने के लिए काफी पागल हैं कि वे दुनिया बदल सकते हैं, वही इसे बदलते हैं।",
      author: "स्टीव जॉब्स",
    },
    {
      text: "आप जहां हैं, जो आपके पास है, उसी से करें।",
      author: "थियोडोर रूजवेल्ट",
    },
    {
      text: "सुरक्षा ज्यादातर एक अंधविश्वास है। जीवन या तो एक साहसिक साहस है या कुछ भी नहीं।",
      author: "हेलेन केलर",
    },
    {
      text: "केवल वही यात्रा असंभव है जिसे आप कभी शुरू नहीं करते।",
      author: "टोनी रॉबिन्स",
    },
    {
      text: "आपको जीवन में वही मिलता है जिसके लिए आपके पास मांगने की हिम्मत होती है।",
      author: "ओपरा विनफ्रे",
    },
    {
      text: "जो लोग यह सोचने के लिए काफी पागल हैं कि वे दुनिया बदल सकते हैं, वही इसे बदलते हैं।",
      author: "रॉब सिल्टानेन",
    },
    {
      text: "सफलता वह है जो आप चाहते हैं, खुशी वह है जो आपको मिलता है।",
      author: "डब्ल्यू.पी. किन्सेला",
    },
    {
      text: "हारने का डर जीतने के उत्साह से बड़ा न होने दें।",
      author: "रॉबर्ट कियोसाकी",
    },
    {
      text: "भविष्य उनका है जो आज इसके लिए तैयारी करते हैं।",
      author: "मैल्कम एक्स",
    },
    {
      text: "जीवन में सफल होने के लिए आपको दो चीजों की जरूरत है: अज्ञानता और आत्मविश्वास।",
      author: "मार्क ट्वेन",
    },
    {
      text: "जीवन चीजों को आजमाने और देखने की प्रक्रिया है कि वे काम करती हैं या नहीं।",
      author: "रे ब्रैडबरी",
    },
    {
      text: "सफलता उत्साह खोए बिना असफलता से असफलता की ओर जाना है।",
      author: "विंस्टन चर्चिल",
    },
    {
      text: "हमारी कल की प्राप्ति की एकमात्र सीमा आज की हमारी शंकाएं हैं।",
      author: "फ्रैंकलिन डी. रूजवेल्ट",
    },
    {
      text: "हमारे जीवन का उद्देश्य खुश रहना है।",
      author: "दलाई लामा",
    },
    {
      text: "आप तब तक असफल नहीं होते जब तक आप प्रयास करना बंद नहीं करते।",
      author: "अल्बर्ट आइंस्टीन",
    },
    {
      text: "अपने सपनों का निर्माण करें, वरना कोई और आपको अपने सपनों का निर्माण करने के लिए किराए पर लेगा।",
      author: "फराह ग्रे",
    },
    {
      text: "मैं असफलता के रास्ते पर सफल हुआ।",
      author: "थॉमस एडिसन",
    },
    {
      text: "आपके और आपके सपने के बीच केवल एक चीज है वह इच्छा और विश्वास कि यह वास्तव में संभव है।",
      author: "जोएल ब्राउन",
    },
    {
      text: "चुनौतियां जीवन को रोचक बनाती हैं और उन्हें पार करना जीवन को अर्थपूर्ण बनाता है।",
      author: "जोशुआ जे. मरीन",
    },
    {
      text: "सबसे बड़ा जोखिम कोई जोखिम न लेना है।",
      author: "मार्क ज़करबर्ग",
    },
    {
      text: "आप गिर नहीं सकते अगर आप चढ़ते नहीं। लेकिन जमीन पर पूरी जिंदगी जीने में कोई आनंद नहीं है।",
      author: "अज्ञात",
    },
    {
      text: "हम बैठे-बैठे डर पैदा करते हैं। हम कार्रवाई करके उन्हें दूर करते हैं।",
      author: "डॉ. हेनरी लिंक",
    },
    {
      text: "असंभव को हासिल करने का एकमात्र तरीका यह विश्वास करना है कि यह संभव है।",
      author: "चार्ल्स किंग्सली",
    },
    {
      text: "वह करें जो आपको पसंद है, और आपको अपने जीवन में एक दिन भी काम नहीं करना पड़ेगा।",
      author: "कन्फ्यूशियस",
    },
    {
      text: "आपका जीवन मौके से बेहतर नहीं होता, यह बदलाव से बेहतर होता है।",
      author: "जिम रोहन",
    },
    {
      text: "उड़ने के लिए आपको उन चीजों को छोड़ना होगा जो आपको नीचे खींचती हैं।",
      author: "टोनी मॉरिसन",
    },
    {
      text: "सफलता का रहस्य वह जानना है जो कोई और नहीं जानता।",
      author: "अरस्तू ओनासिस",
    },
    {
      text: "बाहर निकलने का सबसे अच्छा रास्ता हमेशा उसका सामना करना है।",
      author: "रॉबर्ट फ्रॉस्ट",
    },
    {
      text: "सफलता किसी और से बेहतर होने में नहीं है, बल्कि कल के आप से बेहतर होने में है।",
      author: "अज्ञात",
    },
    {
      text: "यह न चाहें कि यह आसान हो, यह चाहें कि आप बेहतर हों।",
      author: "जिम रोहन",
    },
    {
      text: "कुछ शुरू करके असफल होने से भी बदतर है कुछ शुरू न करना।",
      author: "सेठ गोडिन",
    },
    {
      text: "आपको दूसरों को प्रेरित करने के लिए परिपूर्ण होने की जरूरत नहीं है। अपनी खामियों से निपटने का तरीका दूसरों को प्रेरित करे।",
      author: "अज्ञात",
    },
    {
      text: "जीवन में सबसे बड़ी गलती यह डरना है कि आप गलती करेंगे।",
      author: "एल्बर्ट हबर्ड",
    },
    {
      text: "जब सब कुछ आपके खिलाफ जाता प्रतीत हो, याद रखें कि हवाई जहाज हवा के खिलाफ उड़ान भरता है, उसके साथ नहीं।",
      author: "हेनरी फोर्ड",
    },
    {
      text: "यह मायने नहीं रखता कि आप कितनी जोर से मारते हैं। यह मायने रखता है कि आप कितनी जोर से मारे जाने के बाद भी आगे बढ़ते हैं।",
      author: "रॉकी बाल्बोआ",
    },
    {
      text: "बदलाव को समझने का एकमात्र तरीका है उसमें डूब जाना, उसके साथ चलना, और नृत्य का आनंद लेना।",
      author: "एलन वॉट्स",
    },
    {
      text: "अच्छी तरह यात्रा करने के लिए आपको अमीर होने की जरूरत नहीं है।",
      author: "यूजीन फोडोर",
    },
    {
      text: "सफलता एक यात्रा है, मंजिल नहीं।",
      author: "बेन स्वीटलैंड",
    },
    {
      text: "आपके और आपके लक्ष्य के बीच केवल एक चीज है वह कहानी जो आप खुद को बताते हैं कि आप इसे क्यों नहीं हासिल कर सकते।",
      author: "जॉर्डन बेलफोर्ट",
    },
    {
      text: "आप जितना सोचते हैं उससे ज्यादा मजबूत हैं।",
      author: "अज्ञात",
    },
    {
      text: "हर दिन एक दूसरा मौका है।",
      author: "अज्ञात",
    },
    {
      text: "आपके सपनों की कोई समाप्ति तिथि नहीं होती। गहरी सांस लें और फिर से कोशिश करें।",
      author: "अज्ञात",
    },
    {
      text: "बढ़ने का एकमात्र तरीका अपने आराम क्षेत्र से बाहर निकलना है।",
      author: "अज्ञात",
    },
    {
      text: "खुद पर विश्वास करें, और बाकी सब अपने आप ठीक हो जाएगा।",
      author: "अज्ञात",
    },
    {
      text: "आप जितना जानते हैं उससे ज्यादा करने में सक्षम हैं।",
      author: "अज्ञात",
    },
    {
      text: "तब तक न रुकें जब तक आपको गर्व न हो।",
      author: "अज्ञात",
    },
    {
      text: "अपने घावों को बुद्धिमत्ता में बदलें।",
      author: "ओपरा विनफ्रे",
    },
    {
      text: "पेड़ लगाने का सबसे अच्छा समय 20 साल पहले था। दूसरा सबसे अच्छा समय अब है।",
      author: "चीनी कहावत",
    },
    {
      text: "अपने सपनों का पीछा करने के लिए आपको अनुमति की जरूरत नहीं है।",
      author: "अज्ञात",
    },
    {
      text: "आपको केवल उस व्यक्ति से बेहतर होने की कोशिश करनी चाहिए जो आप कल थे।",
      author: "अज्ञात",
    },
    {
      text: "आगे बढ़ते रहें। सब कुछ सही समय पर आपके पास आएगा।",
      author: "अज्ञात",
    },
    {
      text: "आपकी संभावनाएं अनंत हैं।",
      author: "अज्ञात",
    },
    {
      text: "कठिन रास्ते अक्सर सुंदर मंजिलों की ओर ले जाते हैं।",
      author: "अज्ञात",
    },
    {
      text: "खुद को फिर से खोजने के लिए आप कभी बूढ़े नहीं होते।",
      author: "अज्ञात",
    },
    {
      text: "जीवन की एकमात्र सीमाएं वे हैं जो आप स्वयं निर्धारित करते हैं।",
      author: "अज्ञात",
    },
    {
      text: "हर उपलब्धि की शुरुआत कोशिश करने के फैसले से होती है।",
      author: "अज्ञात",
    },
    {
      text: "छोटे दिमागों को यह न बताने दें कि आपके सपने बहुत बड़े हैं।",
      author: "अज्ञात",
    },
    {
      text: "आप प्रभाव डालने के लिए पैदा हुए हैं।",
      author: "अज्ञात",
    },
    {
      text: "सबसे अच्छा दृश्य सबसे कठिन चढ़ाई के बाद आता है।",
      author: "अज्ञात",
    },
    {
      text: "निडर होने की जरूरत नहीं है, बस डर को आपको रोकने न दें।",
      author: "अज्ञात",
    },
    {
      text: "सफलता तब होती है जब तैयारी अवसर से मिलती है।",
      author: "अज्ञात",
    },
    {
      text: "आप अपनी कहानी के लेखक हैं।",
      author: "अज्ञात",
    },
    {
      text: "असफल होने का एकमात्र तरीका हार मानना है।",
      author: "अज्ञात",
    },
    {
      text: "आपकी मेहनत दूसरों को प्रेरित करेगी।",
      author: "अज्ञात",
    },
    {
      text: "अवसर की प्रतीक्षा न करें। इसे बनाएं।",
      author: "अज्ञात",
    },
    {
      text: "आप अतीत को नहीं बदल सकते, लेकिन भविष्य को आकार दे सकते हैं।",
      author: "अज्ञात",
    },
    {
      text: "दुनिया को आपके अनूठे उपहारों की जरूरत है।",
      author: "अज्ञात",
    },
    {
      text: "हर कदम मायने रखता है, चाहे वह कितना ही छोटा क्यों न हो।",
      author: "अज्ञात",
    },
    {
      text: "आपके सपने लड़ने लायक हैं।",
      author: "अज्ञात",
    },
    {
      text: "आप जैसे हैं, वैसे ही पर्याप्त हैं।",
      author: "अज्ञात",
    },
    {
      text: "सफलता की कुंजी तैयार होने से पहले शुरू करना है।",
      author: "मैरी फोरलियो",
    },
    {
      text: "आप शुरुआत को वापस जाकर नहीं बदल सकते, लेकिन जहां हैं वहां से शुरू करके अंत बदल सकते हैं।",
      author: "सी.एस. लुईस",
    },
    {
      text: "सफलता मंजिल के बारे में नहीं है, यह यात्रा के बारे में है।",
      author: "जिग जिगलर",
    },
    {
      text: "कठिन भाग्य को केवल कठिन परिश्रम ही पार कर सकता है।",
      author: "हैरी गोल्डन",
    },
    {
      text: "आपके पास अभी वह सब कुछ है जो दुनिया आपके सामने ला सकती है, उससे निपटने के लिए चाहिए।",
      author: "ब्रायन ट्रेसी",
    },
    {
      text: "आप आज जो करते हैं, उस पर भविष्य निर्भर करता है।",
      author: "महात्मा गांधी",
    },
    {
      text: "महान होने के लिए आपको महान होने की शुरुआत करने की जरूरत नहीं है, लेकिन आपको शुरू करना होगा।",
      author: "लेस ब्राउन",
    },
    {
      text: "महान कार्य करने का एकमात्र तरीका वह करना है जो आपको पसंद है।",
      author: "अज्ञात",
    },
    {
      text: "आपका जुनून आपके साहस का इंतजार कर रहा है।",
      author: "इसाबेल लाफ्लेच",
    },
    {
      text: "सफलता छोटे-छोटे प्रयासों का योग है, जो दिन-प्रतिदिन दोहराया जाता है।",
      author: "रॉबर्ट कोलियर",
    },
    {
      text: "आपके और आपके सपने के बीच केवल इच्छा ही है।",
      author: "अज्ञात",
    },
    {
      text: "नया लक्ष्य निर्धारित करने या नया सपना देखने के लिए आप कभी बूढ़े नहीं होते।",
      author: "लेस ब्राउन",
    },
    {
      text: "सबसे बड़ा जोखिम जोखिमहीन जीवन जीना है।",
      author: "स्टीफन कोवी",
    },
    {
      text: "पहला कदम उठाने के लिए आपको सभी जवाब जानने की जरूरत नहीं है।",
      author: "अज्ञात",
    },
    {
      text: "आपकी जिंदगी दुनिया के लिए आपका संदेश है। इसे प्रेरणादायक बनाएं।",
      author: "अज्ञात",
    },
    {
      text: "एकमात्र सीमा वह है जो आप स्वयं निर्धारित करते हैं।",
      author: "अज्ञात",
    },
    {
      text: "सफलता खुशी की कुंजी नहीं है। खुशी सफलता की कुंजी है।",
      author: "अल्बर्ट श्वित्ज़र",
    },
    {
      text: "आप उससे ज्यादा बहादुर हैं जितना आप विश्वास करते हैं, उससे ज्यादा मजबूत जितना आप दिखते हैं, और उससे ज्यादा स्मार्ट जितना आप सोचते हैं।",
      author: "ए.ए. मिल्ने",
    },
    {
      text: "महानता हासिल करने का एकमात्र तरीका चुनौतियों को गले लगाना है।",
      author: "अज्ञात",
    },
    {
      text: "आपके सपने आपके भविष्य के खाका हैं।",
      author: "अज्ञात",
    },
    {
      text: "आत्मविश्वास हासिल करने का सबसे अच्छा तरीका वह करना है जिससे आप डरते हैं।",
      author: "स्वाति शर्मा",
    },
    {
      text: "अद्भुत होने के लिए आपको परिपूर्ण होने की जरूरत नहीं है।",
      author: "अज्ञात",
    },
    {
      text: "आपको रोकने वाली एकमात्र चीज यह विश्वास है कि कुछ आपको रोक रहा है।",
      author: "अज्ञात",
    },
    {
      text: "सफलता इस बात में नहीं है कि आपके पास कितना है, बल्कि आप कितना देते हैं।",
      author: "अज्ञात",
    },
    {
      text: "आप हवा को नियंत्रित नहीं कर सकते, लेकिन अपनी पाल को समायोजित कर सकते हैं।",
      author: "अज्ञात",
    },
    {
      text: "फर्क डालने का एकमात्र तरीका अलग होना है।",
      author: "अज्ञात",
    },
    {
      text: "आपका ध्यान आपकी वास्तविकता तय करता है।",
      author: "जॉर्ज लुकास",
    },
    {
      text: "आपको रोकने वाली एकमात्र चीज आप स्वयं हैं।",
      author: "अज्ञात",
    },
    {
      text: "आप अपनी गलतियां नहीं हैं; आप वह हैं जो आप आगे करते हैं।",
      author: "अज्ञात",
    },
    {
      text: "सपने देखने वालों के लिए दुनिया संभावनाओं से भरी है।",
      author: "अज्ञात",
    },
    {
      text: "आपकी यात्रा आपकी अपनी है। इसकी तुलना किसी और से न करें।",
      author: "अज्ञात",
    },
    {
      text: "सफल होने का एकमात्र तरीका कभी हार न मानना है।",
      author: "अज्ञात",
    },
    {
      text: "आप अपने भाग्य के रचयिता हैं।",
      author: "अज्ञात",
    },
    {
      text: "मायने रखने वाली एकमात्र चीज यह है कि आप आगे बढ़ते रहें।",
      author: "अज्ञात",
    },
    {
      text: "आपके सपने बुला रहे हैं। क्या आप जवाब देंगे?",
      author: "अज्ञात",
    },
    {
      text: "अपने लक्ष्यों को हासिल करने का एकमात्र तरीका कार्रवाई करना है।",
      author: "अज्ञात",
    },
    {
      text: "आप अपने सबसे कठिन चुनौतियों से ज्यादा मजबूत हैं।",
      author: "अज्ञात",
    },
    {
      text: "आपकी सफलता की एकमात्र सीमा आपकी अपनी कल्पना है।",
      author: "अज्ञात",
    },
    {
      text: "सबसे अच्छा होने की जरूरत नहीं, बस अपना सर्वश्रेष्ठ दें।",
      author: "अज्ञात",
    },
    {
      text: "बढ़ने का एकमात्र तरीका बदलाव को गले लगाना है।",
      author: "अज्ञात",
    },
    {
      text: "आपका साहस दूसरों को बहादुर होने के लिए प्रेरित करेगा।",
      author: "अज्ञात",
    },
    {
      text: "आप वह नहीं कर सकते जो आपने कभी कोशिश नहीं की।",
      author: "अज्ञात",
    },
    {
      text: "आप अपने भविष्य के वास्तुकार हैं।",
      author: "अज्ञात",
    },
    {
      text: "सफल होने का एकमात्र तरीका आगे बढ़ते रहना है।",
      author: "अज्ञात",
    },
    {
      text: "आपके सपने आपके भविष्य के बीज हैं।",
      author: "अज्ञात",
    },
    {
      text: "आपको रोकने वाली एकमात्र चीज डर है।",
      author: "अज्ञात",
    },
    {
      text: "आप महानता हासिल करने में सक्षम हैं।",
      author: "अज्ञात",
    },
    {
      text: "फर्क डालने का एकमात्र तरीका कार्रवाई करना है।",
      author: "अज्ञात",
    },
    {
      text: "आपकी यात्रा अभी शुरू हो रही है।",
      author: "अज्ञात",
    },
    {
      text: "एकमात्र सीमा वह है जो आप निर्धारित करते हैं।",
      author: "अज्ञात",
    },
    {
      text: "आप जितना सोचते हैं उससे ज्यादा मजबूत हैं।",
      author: "अज्ञात",
    },
    {
      text: "अपने सपनों को हासिल करने का एकमात्र तरीका उन पर विश्वास करना है।",
      author: "अज्ञात",
    },
    {
      text: "आपकी संभावनाएं असीमित हैं।",
      author: "अज्ञात",
    },
    {
      text: "मायने रखने वाली एकमात्र चीज यह है कि आप कोशिश करते रहें।",
      author: "अज्ञात",
    },
    {
      text: "आप अपने भाग्य के स्वामी हैं।",
      author: "अज्ञात",
    },
    {
      text: "सफल होने का एकमात्र तरीका कभी सीखना बंद न करना है।",
      author: "अज्ञात",
    },
    {
      text: "आपके सपने प्रयास के लायक हैं।",
      author: "अज्ञात",
    },
    {
      text: "आपको रोकने वाली एकमात्र चीज संदेह है।",
      author: "अज्ञात",
    },
    {
      text: "आप महानता के लिए नियत हैं।",
      author: "अज्ञात",
    },
    {
      text: "अपने लक्ष्यों को हासिल करने का एकमात्र तरीका केंद्रित रहना है।",
      author: "अज्ञात",
    },
    {
      text: "आपकी यात्रा आपकी अपनी है। इसे महाकाव्य बनाएं।",
      author: "अज्ञात",
    },
    {
      text: "एकमात्र सीमा आपका अपना मन है।",
      author: "अज्ञात",
    },
    {
      text: "आप जो कुछ भी अपने मन में ठान लें, उसे हासिल कर सकते हैं।",
      author: "अज्ञात",
    },
    {
      text: "सफल होने का एकमात्र तरीका आगे बढ़ते रहना है।",
      author: "अज्ञात",
    },
    {
      text: "आपके सपने आपके भविष्य की नींव हैं।",
      author: "अज्ञात",
    },
    {
      text: "आपको रोकने वाली एकमात्र चीज हार मानना है।",
      author: "अज्ञात",
    },
    {
      text: "आप किसी भी बाधा से ज्यादा मजबूत हैं।",
      author: "अज्ञात",
    },
    {
      text: "महानता हासिल करने का एकमात्र तरीका जोखिम लेना है।",
      author: "अज्ञात",
    },
    {
      text: "आपकी संभावनाएं अनंत हैं।",
      author: "अज्ञात",
    },
    {
      text: "मायने रखने वाली एकमात्र चीज यह है कि आप चलते रहें।",
      author: "अज्ञात",
    },
    {
      text: "आप अपनी सफलता के रचयिता हैं।",
      author: "अज्ञात",
    },
    {
      text: "सफल होने का एकमात्र तरीका स्वयं के प्रति सच्चा रहना है।",
      author: "अज्ञात",
    },
    {
      text: "आपके सपने आपके भविष्य का रोडमैप हैं।",
      author: "अज्ञात",
    },
    {
      text: "आपको रोकने वाली एकमात्र चीज डर है।",
      author: "अज्ञात",
    },
    {
      text: "आप अपने सबसे जंगली सपनों को हासिल करने में सक्षम हैं।",
      author: "अज्ञात",
    },
    {
      text: "फर्क डालने का एकमात्र तरीका स्वयं होना है।",
      author: "अज्ञात",
    },
    {
      text: "आपकी यात्रा अभी शुरू हो रही है।",
      author: "अज्ञात",
    },
    {
      text: "एकमात्र सीमा वह है जो आप बनाते हैं।",
      author: "अज्ञात",
    },
    {
      text: "आप जितना सोचते हैं उससे ज्यादा मजबूत हैं।",
      author: "अज्ञात",
    },
    {
      text: "अपने सपनों को हासिल करने का एकमात्र तरीका कार्रवाई करना है।",
      author: "अज्ञात",
    },
    {
      text: "आपकी संभावनाएं असीम हैं।",
      author: "अज्ञात",
    },
    {
      text: "मायने रखने वाली एकमात्र चीज यह है कि आप धक्का देते रहें।",
      author: "अज्ञात",
    },
    {
      text: "आप अपने भाग्य के वास्तुकार हैं।",
      author: "अज्ञात",
    },
    {
      text: "सफल होने का एकमात्र तरीका सीखते रहना है।",
      author: "अज्ञात",
    },
    {
      text: "आपके सपने लड़ने लायक हैं।",
      author: "अज्ञात",
    },
    {
      text: "आपको रोकने वाली एकमात्र चीज संदेह है।",
      author: "अज्ञात",
    },
    {
      text: "आप फर्क डालने के लिए नियत हैं।",
      author: "अज्ञात",
    },
    {
      text: "अपने लक्ष्यों को हासिल करने का एकमात्र तरीका दृढ़ रहना है।",
      author: "अज्ञात",
    },
    {
      text: "आपकी यात्रा आपकी अपनी है। इसे पौराणिक बनाएं।",
      author: "अज्ञात",
    },
    {
      text: "एकमात्र सीमा आपकी कल्पना है।",
      author: "अज्ञात",
    },
    {
      text: "आप जो कुछ भी विश्वास करते हैं, उसे हासिल कर सकते हैं।",
      author: "अज्ञात",
    },
    {
      text: "सफल होने का एकमात्र तरीका कोशिश करते रहना है।",
      author: "अज्ञात",
    },
    {
      text: "आपके सपने आपके भविष्य की कुंजी हैं।",
      author: "अज्ञात",
    },
    {
      text: "आपको रोकने वाली एकमात्र चीज हार मानना है।",
      author: "अज्ञात",
    },
    {
      text: "आप किसी भी बाधा से ज्यादा मजबूत हैं।",
      author: "अज्ञात",
    },
    {
      text: "महानता हासिल करने का एकमात्र तरीका असफलता को गले लगाना है।",
      author: "अज्ञात",
    },
    {
      text: "आपकी संभावनाएं असीमित हैं।",
      author: "अज्ञात",
    },
    {
      text: "मायने रखने वाली एकमात्र चीज यह है कि आप चलते रहें।",
      author: "अज्ञात",
    },
    {
      text: "आप अपने रास्ते के रचयिता हैं।",
      author: "अज्ञात",
    },
    {
      text: "सफल होने का एकमात्र तरीका केंद्रित रहना है।",
      author: "अज्ञात",
    },
    {
      text: "आपके सपने आपकी सफलता की नींव हैं।",
      author: "अज्ञात",
    },
    {
      text: "आपको रोकने वाली एकमात्र चीज डर है।",
      author: "अज्ञात",
    },
    {
      text: "आप महानता हासिल करने में सक्षम हैं।",
      author: "अज्ञात",
    },
    {
      text: "फर्क डालने का एकमात्र तरीका कार्रवाई करना है।",
      author: "अज्ञात",
    },
    {
      text: "आपकी यात्रा अभी शुरू हो रही है।",
      author: "अज्ञात",
    },
  ],
  ne: [
    {
      text: "महान काम गर्ने एकमात्र तरिका भनेको तपाईंले गर्नुहुने कामलाई माया गर्नु हो।",
      author: "स्टिभ जब्स",
    },
    {
      text: "तपाईंले गर्न सक्नुहुन्छ भन्ने विश्वास गर्नुहोस् र तपाईं आधा बाटोमा हुनुहुन्छ।",
      author: "थियोडोर रूजवेल्ट",
    },
    {
      text: "घडी हेर्नुहोस्; यसले के गर्छ त्यसै गर्नुहोस्। जारी राख्नुहोस्।",
      author: "सैम लेवेन्सन",
    },
    {
      text: "भविष्य तिनीहरूको हुन्छ जो आफ्ना सपनाहरूको सुन्दरतामा विश्वास गर्छन्।",
      author: "एलेनोर रूजवेल्ट",
    },
    {
      text: "सफलता अन्तिम होइन, असफलता घातक होइन: यो जारी राख्ने साहस हो जसले गणना गर्छ।",
      author: "विन्स्टन चर्चिल",
    },
    {
      text: "तपाईं कहिल्यै अर्को लक्ष्य सेट गर्न वा नयाँ सपना देख्न धेरै पुरानो हुनुहुन्न।",
      author: "सी.एस. लुईस",
    },
    {
      text: "हाम्रो भोलिको प्राप्तिको एकमात्र सीमा आज हाम्रो शंका हुनेछ।",
      author: "फ्र्याङ्कलिन डी. रूजवेल्ट",
    },
    {
      text: "यसले कति ढिलो जान्छ भन्ने कुरामा केही फरक पर्दैन जबसम्म तपाईं रोक्नुहुन्न।",
      author: "कन्फ्यूसियस",
    },
    {
      text: "हाम्रो सबैभन्दा ठूलो कमजोरी हार मान्नु हो। सफल हुने सबैभन्दा निश्चित तरिका भनेको फेरि एक पटक प्रयास गर्नु हो।",
      author: "थोमस एडिसन",
    },
    {
      text: "अगाडि बढ्ने गोप्य कुरा सुरु गर्दै छ।",
      author: "मार्क ट्वेन",
    },
    {
      text: "महान हुनको लागि तपाईंले महान सुरु गर्नु पर्दैन, तर तपाईंले सुरु गर्नुपर्छ।",
      author: "जिग जिगलर",
    },
    {
      text: "कठिनाइहरूले प्रायः साधारण मानिसहरूलाई असाधारण भाग्यको लागि तयार गर्छन्।",
      author: "सी.एस. लुईस",
    },
    {
      text: "भविष्यको भविष्यवाणी गर्ने सबैभन्दा राम्रो तरिका भनेको यो सिर्जना गर्नु हो।",
      author: "पीटर ड्रकर",
    },
    {
      text: "अवसरहरू आफैं आउँदैनन्। तपाईंले तिनीहरूलाई सिर्जना गर्नुपर्छ।",
      author: "क्रिस ग्रोसर",
    },
    {
      text: "तपाईंले आफ्ना लक्ष्यहरू प्राप्त गर्नबाट जे प्राप्त गर्नुहुन्छ, त्यो तपाईंले लक्ष्यहरू प्राप्त गरेर बन्ने कुरा जति महत्त्वपूर्ण छैन।",
      author: "जिग जिगलर",
    },
    {
      text: "हरेक दिन तपाईंलाई डराउने कुरा गर्नुहोस्।",
      author: "एलेनोर रूजवेल्ट",
    },
    {
      text: "जिवनको सबैभन्दा ठूलो गौरव कहिल्यै नखस्नुमा होइन, बरु हरेक पतनपछि उठ्नुमा छ।",
      author: "नेल्सन मण्डेला",
    },
    {
      text: "तपाईंको समय सीमित छ, त्यसैले अरू कसैको जीवन बाँचेर बर्बाद नगर्नुहोस्।",
      author: "स्टिभ जब्स",
    },
    {
      text: "यदि तपाईंले महानता हासिल गर्न चाहनुहुन्छ भने, अनुमति माग्न बन्द गर्नुहोस्।",
      author: "अज्ञात",
    },
    {
      text: "ठूलो सपना देख्नुहोस् र असफल हुन हिम्मत गर्नुहोस्।",
      author: "नोर्मन भन",
    },
    {
      text: "तपाईं केवल त्यही व्यक्ति बन्न नियत हुनुहुन्छ जुन तपाईंले बन्ने निर्णय गर्नुहुन्छ।",
      author: "राल्फ वाल्डो इमर्सन",
    },
    {
      text: "सफलता भनेको उत्साह नगुमाई असफलताबाट असफलतातिर हिँड्नु हो।",
      author: "विन्स्टन चर्चिल",
    },
    {
      text: "हिजोलाई आजको धेरै हिस्सा नलिन दिनुहोस्।",
      author: "विल रजर्स",
    },
    {
      text: "तपाईंले नलिएको हरेक शट १००% मिस गर्नुहुन्छ।",
      author: "वेन ग्रेट्ज्की",
    },
    {
      text: "तपाईंले गर्न सक्छु वा सक्दिनँ भन्ने सोच्नुहुन्छ, दुवैमा तपाईं सही हुनुहुन्छ।",
      author: "हेनरी फोर्ड",
    },
    {
      text: "जीवन १०% तपाईंसँग के हुन्छ र ९०% तपाईंले त्यसलाई कसरी प्रतिक्रिया दिनुहुन्छ।",
      author: "चार्ल्स आर. स्विन्डल",
    },
    {
      text: "मन नै सबै कुरा हो। तपाईंले जे सोच्नुहुन्छ, तपाईं त्यही बन्नुहुन्छ।",
      author: "बुद्ध",
    },
    {
      text: "सफलताको लागि प्रयास नगर्नुहोस्, बरु मूल्यवान बन्ने प्रयास गर्नुहोस्।",
      author: "अल्बर्ट आइन्स्टाइन",
    },
    {
      text: "म मेरो सफलताको श्रेय यसलाई दिन्छु: मैले कहिल्यै बहाना बनाइनँ वा स्वीकार गरिनँ।",
      author: "फ्लोरेन्स नाइटिङ्गेल",
    },
    {
      text: "सबैभन्दा राम्रो प्रतिशोध भनेको ठूलो सफलता हो।",
      author: "फ्र्याङ्क सिनात्रा",
    },
    {
      text: "प्रत्येक स्ट्राइकले मलाई अर्को होम रनको नजिक ल्याउँछ।",
      author: "बेब रुथ",
    },
    {
      text: "हामी धेरै पराजयहरूको सामना गर्न सक्छौं, तर पराजित हुनु हुँदैन।",
      author: "माया मायालो",
    },
    {
      text: "कठिनाईको बीचमा अवसर लुकेको हुन्छ।",
      author: "अल्बर्ट आइन्स्टाइन",
    },
    {
      text: "तपाईंले संसारमा देख्न चाहनुहुने परिवर्तन तपाईं आफैं बन्नुपर्छ।",
      author: "महात्मा गान्धी",
    },
    {
      text: "हाम्रो पछाडि र अगाडि जे छ, त्यो हाम्रो भित्रको कुराको तुलनामा सानो छ।",
      author: "राल्फ वाल्डो इमर्सन",
    },
    {
      text: "हजार माइलको यात्रा एक कदमबाट सुरु हुन्छ।",
      author: "लाओ त्जु",
    },
    {
      text: "आफ्नो आँखा ताराहरूमा राख्नुहोस्, र खुट्टा जमिनमा।",
      author: "थियोडोर रूजवेल्ट",
    },
    {
      text: "सम्भवको सीमा पत्ता लगाउने एकमात्र तरिका भनेको असम्भवतिर जानु हो।",
      author: "आर्थर सी. क्लार्क",
    },
    {
      text: "प्रतीक्षा नगर्नुहोस्। समय कहिल्यै ठीक हुँदैन।",
      author: "नेपोलियन हिल",
    },
    {
      text: "सफलता भनेको बाधाहरूको अभाव होइन, बरु तिनीहरूलाई पार गर्ने साहस हो।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंले जति मेहनत गर्नुहुन्छ, त्यति नै प्राप्त गर्दा राम्रो महसुस गर्नुहुन्छ।",
      author: "अज्ञात",
    },
    {
      text: "सपना देख्नुहोस्। विश्वास गर्नुहोस्। बनाउनुहोस्।",
      author: "अज्ञात",
    },
    {
      text: "सकारात्मक रहनुहोस्, मेहनत गर्नुहोस्, यो सम्भव बनाउनुहोस्।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंको सीमा—यो केवल तपाईंको कल्पना हो।",
      author: "अज्ञात",
    },
    {
      text: "आफूलाई प्रेरित गर्नुहोस्, किनकि अरू कसैले तपाईंको लागि यो गर्दैन।",
      author: "अज्ञात",
    },
    {
      text: "महान कुराहरू कहिल्यै आराम क्षेत्रबाट आउँदैनन्।",
      author: "अज्ञात",
    },
    {
      text: "सफलता तपाईंतिर आउँदैन, तपाईंले त्यसतिर जानुपर्छ।",
      author: "मार्भा कोलिन्स",
    },
    {
      text: "प्रयास र विजय बीचको फरक केवल अलिकति जोश हो!",
      author: "मार्भिन फिलिप्स",
    },
    {
      text: "यदि तपाईंले यो सपनामा देख्न सक्नुहुन्छ भने, तपाईंले यो गर्न सक्नुहुन्छ।",
      author: "वाल्ट डिज्नी",
    },
    {
      text: "हाम्रा सबै सपनाहरू सत्य हुन सक्छन् यदि हामीसँग तिनीहरूलाई पछ्याउने साहस छ भने।",
      author: "वाल्ट डिज्नी",
    },
    {
      text: "सफल योद्धा भनेको औसत व्यक्ति हो, जसको फोकस लेजर जस्तो हुन्छ।",
      author: "ब्रुस ली",
    },
    {
      text: "म मेरो परिस्थितिको उत्पादन होइन। म मेरो निर्णयहरूको उत्पादन हुँ।",
      author: "स्टिफन कोभे",
    },
    {
      text: "तपाईंको जीवनको प्रत्येक अर्को स्तरले तपाईंबाट फरक व्यक्ति माग्छ।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंले सम्पूर्ण सिँढी देख्नु पर्दैन, केवल पहिलो कदम चाल्नुहोस्।",
      author: "मार्टिन लुथर किंग जुनियर",
    },
    {
      text: "यस्तो व्यवहार गर्नुहोस् जस्तो कि तपाईंले गर्ने कुराले फरक पार्छ। यो पार्छ।",
      author: "विलियम जेम्स",
    },
    {
      text: "सफलता भनेको जीवनमा तपाईंले कति उचाइ प्राप्त गर्नुभयो भन्नेमा मापन हुँदैन, बरु तपाईंले पार गरेका बाधाहरूमा।",
      author: "बुकर टी. वाशिंगटन",
    },
    {
      text: "शब्दकोशमा मात्रै सफलता कामभन्दा अगाडि आउँछ।",
      author: "भिडाल ससुन",
    },
    {
      text: "राम्रो छोड्न डराउनुहोस् न ताकि तपाईं महानको लागि जान सक्नुहोस्।",
      author: "जोन डी. रकफेलर",
    },
    {
      text: "म जति मेहनत गर्छु, त्यति नै मलाई भाग्य प्राप्त भएको जस्तो लाग्छ।",
      author: "थोमस जेफरसन",
    },
    {
      text: "यदि तपाईं सामान्य जोखिम लिन इच्छुक हुनुहुन्न भने, तपाईंले सामान्यमा सन्तुष्ट हुनुपर्छ।",
      author: "जिम रोहन",
    },
    {
      text: "सफलता भनेको आफूलाई मन पराउनु, तपाईंले के गर्नुहुन्छ त्यो मन पराउनु, र त्यसलाई कसरी गर्नुहुन्छ त्यो मन पराउनु हो।",
      author: "माया मायालो",
    },
    {
      text: "तपाईंले रचनात्मकता समाप्त गर्न सक्नुहुन्न। जति धेरै प्रयोग गर्नुहुन्छ, त्यति नै तपाईंसँग हुन्छ।",
      author: "माया मायालो",
    },
    {
      text: "सुरु गर्ने तरिका भनेको कुरा गर्न छोडेर गर्न थाल्नु हो।",
      author: "वाल्ट डिज्नी",
    },
    {
      text: "सफलता कार्यसँग जोडिएको छ। सफल व्यक्तिहरू निरन्तर हिँडिरहन्छन्।",
      author: "कोनराड हिल्टन",
    },
    {
      text: "सफलताको कुञ्जी भनेको हरेक कुराभन्दा पहिले तयारी हो।",
      author: "अलेक्जेन्डर ग्राहम बेल",
    },
    {
      text: "सफलताको वास्तविक अवसर काममा होइन, बरु व्यक्तिमा हुन्छ।",
      author: "जिग जिगलर",
    },
    {
      text: "तपाईंले गर्ने भन्ने कुरामा प्रतिष्ठा बनाउन सक्नुहुन्न।",
      author: "हेनरी फोर्ड",
    },
    {
      text: "सफलताको प्रयास नगर्नुहोस्। बरु मूल्यवान व्यक्तिको प्रयास गर्नुहोस्।",
      author: "अल्बर्ट आइन्स्टाइन",
    },
    {
      text: "सफलता तपाईंसँग के छ भन्नेमा होइन, तपाईं को हुनुहुन्छ भन्नेमा छ।",
      author: "बो बेनेट",
    },
    {
      text: "सफलता र असफलताको बाटो लगभग उस्तै हुन्छ।",
      author: "कोलिन आर. डेभिस",
    },
    {
      text: "सधैं ध्यानमा राख्नुहोस् कि सफलताको लागि तपाईंको आफ्नै संकल्प अन्य कुनै कुराभन्दा महत्त्वपूर्ण छ।",
      author: "अब्राहम लिंकन",
    },
    {
      text: "सफलता भनेको तपाईं तल खस्दा कति उचाइमा उफ्रनुहुन्छ भन्ने हो।",
      author: "जर्ज एस. प्याटन",
    },
    {
      text: "जसले कहिल्यै गल्ती गरेन, उसले कहिल्यै नयाँ कुरा प्रयास गरेन।",
      author: "अल्बर्ट आइन्स्टाइन",
    },
    {
      text: "जो संसार बदल्न सक्छन् भन्ने सोच्न पर्याप्त पागल छन्, तिनीहरूले नै यो गर्छन्।",
      author: "स्टिभ जब्स",
    },
    {
      text: "तपाईं जहाँ हुनुहुन्छ, तपाईंसँग जे छ, त्यसैले गर्नुहोस्।",
      author: "थियोडोर रूजवेल्ट",
    },
    {
      text: "सुरक्षा प्रायः एक अंधविश्वास हो। जीवन या त साहसिक साहस हो वा केही होइन।",
      author: "हेलेन केलर",
    },
    {
      text: "केवल त्यो यात्रा असम्भव छ जुन तपाईंले कहिल्यै सुरु गर्नुहुन्न।",
      author: "टोनी रोबिन्स",
    },
    {
      text: "तपाईंले जीवनमा त्यही पाउनुहुन्छ जसको लागि माग्ने साहस गर्नुहुन्छ।",
      author: "ओप्रा विन्फ्रे",
    },
    {
      text: "जो संसार बदल्न सक्छन् भन्ने सोच्न पर्याप्त पागल छन्, तिनीहरूले नै यो गर्छन्।",
      author: "रोब सिल्टानेन",
    },
    {
      text: "सफलता भनेको तपाईंले चाहेको कुरा प्राप्त गर्नु हो, खुशी भनेको तपाईंले प्राप्त गरेको कुरा चाहनु हो।",
      author: "डब्ल्यू.पी. किन्सेला",
    },
    {
      text: "हार्ने डरलाई जित्ने उत्साहभन्दा ठूलो नहुन दिनुहोस्।",
      author: "रोबर्ट कियोसाकी",
    },
    {
      text: "भविष्य तिनीहरूको हो जो आज यसको लागि तयारी गर्छन्।",
      author: "माल्कम एक्स",
    },
    {
      text: "जीवनमा सफल हुन तपाईंलाई दुई कुराको आवश्यकता छ: अज्ञानता र आत्मविश्वास।",
      author: "मार्क ट्वेन",
    },
    {
      text: "जीवन भनेको कुराहरू प्रयास गर्नु र तिनीहरूले काम गर्छन् कि गर्दैनन् हेर्नु हो।",
      author: "रे ब्राडबेरी",
    },
    {
      text: "सफलता भनेको उत्साह नगुमाई असफलताबाट असफलतातिर जानु हो।",
      author: "विन्स्टन चर्चिल",
    },
    {
      text: "हाम्रो भोलिको प्राप्तिको एकमात्र सीमा आज हाम्रो शंका छ।",
      author: "फ्र्याङ्कलिन डी. रूजवेल्ट",
    },
    {
      text: "हाम्रो जीवनको उद्देश्य खुशी हुनु हो।",
      author: "दलाई लामा",
    },
    {
      text: "तपाईंले प्रयास गर्न छोड्नुहुन्न भने तपाईं कहिल्यै असफल हुनुहुन्न।",
      author: "अल्बर्ट आइन्स्टाइन",
    },
    {
      text: "आफ्ना सपनाहरू बनाउनुहोस्, नत्र कसैले तपाईंलाई आफ्ना सपनाहरू बनाउन भाडामा लिन्छ।",
      author: "फराह ग्रे",
    },
    {
      text: "म असफलताको बाटोमा सफल भएँ।",
      author: "थोमस एडिसन",
    },
    {
      text: "तपाईं र तपाईंको सपनाबीचको एकमात्र कुरा भनेको प्रयास गर्ने इच्छा र यो सम्भव छ भन्ने विश्वास हो।",
      author: "जोएल ब्राउन",
    },
    {
      text: "चुनौतीहरूले जीवनलाई रोचक बनाउँछन् र तिनीहरूलाई पार गर्नुले जीवनलाई अर्थपूर्ण बनाउँछ।",
      author: "जोशुआ जे. मरिन",
    },
    {
      text: "सबैभन्दा ठूलो जोखिम भनेको कुनै जोखिम नलिनु हो।",
      author: "मार्क जकरबर्ग",
    },
    {
      text: "तपाईं चढ्नुहुन्न भने खस्न सक्नुहुन्न। तर सम्पूर्ण जीवन जमिनमा बाँच्नुमा कुनै आनन्द छैन।",
      author: "अज्ञात",
    },
    {
      text: "हामी बसेर डर उत्पन्न गर्छौं। हामीले कार्य गरेर तिनीहरूलाई हटाउँछौं।",
      author: "डा. हेनरी लिङ्क",
    },
    {
      text: "असम्भवलाई प्राप्त गर्ने एकमात्र तरिका भनेको यो सम्भव छ भन्ने विश्वास गर्नु हो।",
      author: "चार्ल्स किङ्स्ले",
    },
    {
      text: "तपाईंले मन पराउने काम गर्नुहोस्, र तपाईंले आफ्नो जीवनमा एक दिन पनि काम गर्नुपर्दैन।",
      author: "कन्फ्यूसियस",
    },
    {
      text: "तपाईंको जीवन मौकाले राम्रो हुँदैन, यो परिवर्तनले राम्रो हुन्छ।",
      author: "जिम रोहन",
    },
    {
      text: "उड्नको लागि तपाईंले तपाईंलाई तल तान्ने कुराहरू छोड्नुपर्छ।",
      author: "टोनी मोरिसन",
    },
    {
      text: "सफलताको रहस्य भनेको कसैलाई नथाहा भएको कुरा जान्नु हो।",
      author: "अरस्तु ओनासिस",
    },
    {
      text: "बाहिर निस्कने सबैभन्दा राम्रो बाटो सधैं त्यसको माध्यमबाट हो।",
      author: "रोबर्ट फ्रस्ट",
    },
    {
      text: "सफलता भनेको अरूभन्दा राम्रो हुनु होइन, बरु हिजोको तपाईंभन्दा राम्रो हुनु हो।",
      author: "अज्ञात",
    },
    {
      text: "यो सजिलो होस् भन्ने कामना नगर्नुहोस्, तपाईं राम्रो होस् भन्ने कामना गर्नुहोस्।",
      author: "जिम रोहन",
    },
    {
      text: "कुनै कुरा सुरु गरेर असफल हुनुभन्दा कुनै कुरा सुरु नगर्नु खराब हो।",
      author: "सेठ गोडिन",
    },
    {
      text: "अरूलाई प्रेरित गर्न तपाईंले पूर्ण हुनु पर्दैन। तपाईंले आफ्ना कमजोरीहरूसँग कसरी व्यवहार गर्नुहुन्छ, त्यसले अरूलाई प्रेरित गरोस्।",
      author: "अज्ञात",
    },
    {
      text: "जीवनको सबैभन्दा ठूलो गल्ती भनेको सधैं गल्ती गर्नेछु भन्ने डर हुनु हो।",
      author: "एल्बर्ट हबर्ड",
    },
    {
      text: "जब सबै कुरा तपाईंविरुद्ध जाँदैछ जस्तो लाग्छ, सम्झनुहोस् कि हवाईजहाज हावाको विपरीत उड्छ, हावासँग होइन।",
      author: "हेनरी फोर्ड",
    },
    {
      text: "यो कति जोरले हान्नुहुन्छ भन्नेमा होइन। यो कति जोरले हानिएर पनि अगाडि बढ्नुहुन्छ भन्नेमा हो।",
      author: "रकी बाल्बोआ",
    },
    {
      text: "परिवर्तनलाई बुझ्ने एकमात्र तरिका भनेको त्यसमा डुब्नु, त्यससँगै हिँड्नु, र नृत्यको आनन्द लिनु हो।",
      author: "एलन वाट्स",
    },
    {
      text: "राम्रोसँग यात्रा गर्न तपाईं धनी हुनु पर्दैन।",
      author: "युजिन फोडोर",
    },
    {
      text: "सफलता एक यात्रा हो, गन्तव्य होइन।",
      author: "बेन स्वीटल्यान्ड",
    },
    {
      text: "तपाईं र तपाईंको लक्ष्यबीचको एकमात्र कुरा भनेको तपाईंले किन यो प्राप्त गर्न सक्नुहुन्न भन्ने कथा हो जुन तपाईंले आफूलाई भन्नुहुन्छ।",
      author: "जोर्डन बेलफोर्ट",
    },
    {
      text: "तपाईंले सोच्नुभएको भन्दा बलियो हुनुहुन्छ।",
      author: "अज्ञात",
    },
    {
      text: "प्रत्येक दिन दोस्रो मौका हो।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंका सपनाहरूको म्याद सकिने मिति हुँदैन। गहिरो सास लिनुहोस् र फेरि प्रयास गर्नुहोस्।",
      author: "अज्ञात",
    },
    {
      text: "बढ्ने एकमात्र तरिका भनेको आफ्नो आराम क्षेत्रबाट बाहिर निस्कनु हो।",
      author: "अज्ञात",
    },
    {
      text: "आफूमाथि विश्वास गर्नुहोस्, बाँकी सबै ठीक हुन्छ।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंले जान्नुभएको भन्दा धेरै कुरा गर्न सक्षम हुनुहुन्छ।",
      author: "अज्ञात",
    },
    {
      text: "तपाईं गर्व नगरेसम्म नरोक्नुहोस्।",
      author: "अज्ञात",
    },
    {
      text: "आफ्ना घाउहरूलाई बुद्धिमा परिणत गर्नुहोस्।",
      author: "ओप्रा विन्फ्रे",
    },
    {
      text: "रुख रोप्ने सबैभन्दा राम्रो समय २० वर्षअघि थियो। दोस्रो राम्रो समय अहिले हो।",
      author: "चिनियाँ उखान",
    },
    {
      text: "आफ्ना सपनाहरू पछ्याउन तपाईंलाई अनुमति चाहिँदैन।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंले हिजोको तपाईंभन्दा मात्र राम्रो हुन प्रयास गर्नुपर्छ।",
      author: "अज्ञात",
    },
    {
      text: "जारी राख्नुहोस्। सबै कुरा सही समयमा तपाईंतिर आउँछ।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंको सम्भावना अनन्त छ।",
      author: "अज्ञात",
    },
    {
      text: "कठिन बाटोहरू प्रायः सुन्दर गन्तव्यहरूमा लैजान्छन्।",
      author: "अज्ञात",
    },
    {
      text: "आफूलाई पुनर्जनन गर्न तपाईं कहिल्यै बूढो हुनुहुन्न।",
      author: "अज्ञात",
    },
    {
      text: "जीवनका एकमात्र सीमाहरू तपाईंले आफैंले सेट गर्नुभएका हुन्।",
      author: "अज्ञात",
    },
    {
      text: "प्रत्येक उपलब्धिको सुरुवात प्रयास गर्ने निर्णयबाट हुन्छ।",
      author: "अज्ञात",
    },
    {
      text: "साना दिमागहरूलाई तपाईंका सपनाहरू धेरै ठूला छन् भन्ने कुरा नदिनुहोस्।",
      author: "अज्ञात",
    },
    {
      text: "तपाईं प्रभाव पार्न जन्मनुभएको हो।",
      author: "अज्ञात",
    },
    {
      text: "सबैभन्दा राम्रो दृश्य सबैभन्दा कठिन उकालो पछि आउँछ।",
      author: "अज्ञात",
    },
    {
      text: "निडर हुनु पर्दैन, केवल डरले तपाईंलाई रोक्न नदिनुहोस्।",
      author: "अज्ञात",
    },
    {
      text: "सफलता तब हुन्छ जब तयारीले अवसरसँग भेट्छ।",
      author: "अज्ञात",
    },
    {
      text: "तपाईं आफ्नो कथाको लेखक हुनुहुन्छ।",
      author: "अज्ञात",
    },
    {
      text: "असफल हुने एकमात्र तरिका भनेको हार मान्नु हो।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंको मेहनतले अरूलाई प्रेरित गर्नेछ।",
      author: "अज्ञात",
    },
    {
      text: "अवसरको प्रतीक्षा नगर्नुहोस्। यो सिर्जना गर्नुहोस्।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंले विगत बदल्न सक्नुहुन्न, तर भविष्यलाई आकार दिन सक्नुहुन्छ।",
      author: "अज्ञात",
    },
    {
      text: "संसारलाई तपाईंको अनौठो उपहारहरूको आवश्यकता छ।",
      author: "अज्ञात",
    },
    {
      text: "प्रत्येक अगाडिको कदम गणना हुन्छ, चाहे त्यो जति सानो किन नहोस्।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंका सपनाहरू लड्न लायक छन्।",
      author: "अज्ञात",
    },
    {
      text: "तपाईं जस्तो हुनुहुन्छ, त्यस्तै पर्याप्त हुनुहुन्छ।",
      author: "अज्ञात",
    },
    {
      text: "सफलताको कुञ्जी तयार हुनु अघि सुरु गर्नु हो।",
      author: "मारी फोरलियो",
    },
    {
      text: "तपाईंले सुरुवात फर्केर बदल्न सक्नुहुन्न, तर जहाँ हुनुहुन्छ त्यहाँबाट सुरु गरेर अन्त्य बदल्न सक्नुहुन्छ।",
      author: "सी.एस. लुईस",
    },
    {
      text: "सफलता गन्तव्यको बारेमा होइन, यो यात्राको बारेमा हो।",
      author: "जिग जिगलर",
    },
    {
      text: "कठिन भाग्यलाई केवल कठिन मेहनतले जित्न सकिन्छ।",
      author: "ह्यारी गोल्डेन",
    },
    {
      text: "तपाईंसँग अहिले नै सबै कुरा छ जुन संसारले तपाईंमाथि फ्याँक्न सक्छ त्यससँग सामना गर्न आवश्यक छ।",
      author: "ब्रायन ट्रेसी",
    },
    {
      text: "भविष्य तपाईंले आज के गर्नुहुन्छ त्यसमा निर्भर गर्छ।",
      author: "महात्मा गान्धी",
    },
    {
      text: "महान हुन तपाईंले महान सुरु गर्नु पर्दैन, तर तपाईंले सुरु गर्नुपर्छ।",
      author: "लेस ब्राउन",
    },
    {
      text: "महान काम गर्ने एकमात्र तरिका भनेको तपाईंले मन पराउने काम गर्नु हो।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंको जोश तपाईंको साहसले पछ्याउन पर्खिरहेको छ।",
      author: "इसाबेल लाफ्लेच",
    },
    {
      text: "सफलता भनेको साना प्रयासहरूको योग हो, जुन दिनदिनै दोहोर्याइन्छ।",
      author: "रोबर्ट कोलियर",
    },
    {
      text: "तपाईं र तपाईंको सपनाबीचको एकमात्र कुरा भनेको प्रयास गर्ने इच्छा हो।",
      author: "अज्ञात",
    },
    {
      text: "नयाँ लक्ष्य सेट गर्न वा नयाँ सपना देख्न तपाईं कहिल्यै बूढो हुनुहुन्न।",
      author: "लेस ब्राउन",
    },
    {
      text: "सबैभन्दा ठूलो जोखिम भनेको जोखिमरहित जीवन बाँच्नु हो।",
      author: "स्टिफन कोभे",
    },
    {
      text: "पहिलो कदम चाल्न तपाईंले सबै जवाफहरू जान्नु पर्दैन।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंको जीवन संसारको लागि तपाईंको सन्देश हो। यसलाई प्रेरणादायक बनाउनुहोस्।",
      author: "अज्ञात",
    },
    {
      text: "एकमात्र सीमा तपाईंले आफैंले सेट गर्नुभएको हो।",
      author: "अज्ञात",
    },
    {
      text: "सफलता खुशीको कुञ्जी होइन। खुशी सफलताको कुञ्जी हो।",
      author: "अल्बर्ट स्वाइजर",
    },
    {
      text: "तपाईंले विश्वास गर्नुभएको भन्दा बहादुर, देखिनुभएको भन्दा बलियो, र सोच्नुभएको भन्दा बुद्धिमान हुनुहुन्छ।",
      author: "ए.ए. मिल्ने",
    },
    {
      text: "महानता प्राप्त गर्ने एकमात्र तरिका भनेको चुनौतीहरूलाई अँगाल्नु हो।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंका सपनाहरू तपाईंको भविष्यको नक्सा हुन्।",
      author: "अज्ञात",
    },
    {
      text: "आत्मविश्वास प्राप्त गर्ने सबैभन्दा राम्रो तरिका भनेको तपाईंले डराउने कुरा गर्नु हो।",
      author: "स्वाति शर्मा",
    },
    {
      text: "अचम्मको हुन तपाईंले पूर्ण हुनु पर्दैन।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंलाई रोक्ने एकमात्र कुरा भनेको केहीले तपाईंलाई रोकेको छ भन्ने विश्वास हो।",
      author: "अज्ञात",
    },
    {
      text: "सफलता तपाईंसँग कति छ भन्नेमा होइन, तपाईंले कति दिनुहुन्छ भन्नेमा छ।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंले हावा नियन्त्रण गर्न सक्नुहुन्न, तर आफ्नो पाल समायोजन गर्न सक्नुहुन्छ।",
      author: "अज्ञात",
    },
    {
      text: "फरक पार्ने एकमात्र तरिका भनेको फरक हुनु हो।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंको फोकसले तपाईंको वास्तविकता निर्धारण गर्छ।",
      author: "जर्ज लुकास",
    },
    {
      text: "तपाईंलाई रोक्ने एकमात्र कुरा तपाईं आफैं हुनुहुन्छ।",
      author: "अज्ञात",
    },
    {
      text: "तपाईं आफ्ना गल्तीहरू होइन; तपाईंले अर्को के गर्नुहुन्छ त्यो हो।",
      author: "अज्ञात",
    },
    {
      text: "सपना देख्नेहरूका लागि संसार सम्भावनाहरूले भरिएको छ।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंको यात्रा तपाईंको आफ्नै हो। यसको तुलना अरूसँग नगर्नुहोस्।",
      author: "अज्ञात",
    },
    {
      text: "सफल हुने एकमात्र तरिका भनेको कहिल्यै हार नमान्नु हो।",
      author: "अज्ञात",
    },
    {
      text: "तपाईं आफ्नो भाग्यको सिर्जनाकर्ता हुनुहुन्छ।",
      author: "अज्ञात",
    },
    {
      text: "महत्त्वपूर्ण एकमात्र कुरा भनेको तपाईं अगाडि बढिरहनुहोस्।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंका सपनाहरूले बोलाउँदै छन्। तपाईंले जवाफ दिनुहुन्छ?",
      author: "अज्ञात",
    },
    {
      text: "तपाईंका लक्ष्यहरू प्राप्त गर्ने एकमात्र तरिका भनेको कार्य गर्नु हो।",
      author: "अज्ञात",
    },
    {
      text: "तपाईं आफ्ना कठिन चुनौतीहरूभन्दा बलियो हुनुहुन्छ।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंको सफलताको एकमात्र सीमा तपाईंको आफ्नै कल्पना हो।",
      author: "अज्ञात",
    },
    {
      text: "सबैभन्दा राम्रो हुनु पर्दैन, केवल आफ्नो सर्वश्रेष्ठ दिनुहोस्।",
      author: "अज्ञात",
    },
    {
      text: "बढ्ने एकमात्र तरिका भनेको परिवर्तनलाई अँगाल्नु हो।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंको साहसले अरूलाई बहादुर हुन प्रेरित गर्नेछ।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंले कहिल्यै प्रयास नगरेको कुरा गर्न सक्नुहुन्न।",
      author: "अज्ञात",
    },
    {
      text: "तपाईं आफ्नो भविष्यको वास्तुकार हुनुहुन्छ।",
      author: "अज्ञात",
    },
    {
      text: "सफल हुने एकमात्र तरिका भनेको अगाडि बढिरहनु हो।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंका सपनाहरू तपाईंको भविष्यका बीजहरू हुन्।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंलाई रोक्ने एकमात्र कुरा डर हो।",
      author: "अज्ञात",
    },
    {
      text: "तपाईं महानता प्राप्त गर्न सक्षम हुनुहुन्छ।",
      author: "अज्ञात",
    },
    {
      text: "फरक पार्ने एकमात्र तरिका भनेको कार्य गर्नु हो।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंको यात्रा भर्खर सुरु हुँदैछ।",
      author: "अज्ञात",
    },
    {
      text: "एकमात्र सीमा तपाईंले सेट गर्नुभएको हो।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंले सोच्नुभएको भन्दा बलियो हुनुहुन्छ।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंका सपनाहरू प्राप्त गर्ने एकमात्र तरिका भनेको तिनीहरूमाथि विश्वास गर्नु हो।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंको सम्भावना असीमित छ।",
      author: "अज्ञात",
    },
    {
      text: "महत्त्वपूर्ण एकमात्र कुरा भनेको तपाईं प्रयास गरिरहनुहोस्।",
      author: "अज्ञात",
    },
    {
      text: "तपाईं आफ्नो भाग्यको मालिक हुनुहुन्छ।",
      author: "अज्ञात",
    },
    {
      text: "सफल हुने एकमात्र तरिका भनेको कहिल्यै सिक्न नछोड्नु हो।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंका सपनाहरू प्रयास गर्न लायक छन्।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंलाई रोक्ने एकमात्र कुरा शंका हो।",
      author: "अज्ञात",
    },
    {
      text: "तपाईं महानताको लागि नियत हुनुहुन्छ।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंका लक्ष्यहरू प्राप्त गर्ने एकमात्र तरिका भनेको फोकस रहनु हो।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंको यात्रा तपाईंको आफ्नै हो। यसलाई महाकाव्य बनाउनुहोस्।",
      author: "अज्ञात",
    },
    {
      text: "एकमात्र सीमा तपाईंको आफ्नै मन हो।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंले आफ्नो मनमा जे ठान्नुहुन्छ, त्यो प्राप्त गर्न सक्नुहुन्छ।",
      author: "अज्ञात",
    },
    {
      text: "सफल हुने एकमात्र तरिका भनेको अगाडि बढिरहनु हो।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंका सपनाहरू तपाईंको भविष्यको आधार हुन्।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंलाई रोक्ने एकमात्र कुरा हार मान्नु हो।",
      author: "अज्ञात",
    },
    {
      text: "तपाईं कुनै पनि बाधाभन्दा बलियो हुनुहुन्छ।",
      author: "अज्ञात",
    },
    {
      text: "महानता प्राप्त गर्ने एकमात्र तरिका भनेको जोखिम लिनु हो।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंको सम्भावना अनन्त छ।",
      author: "अज्ञात",
    },
    {
      text: "महत्त्वपूर्ण एकमात्र कुरा भनेको तपाईं चलिरहनुहोस्।",
      author: "अज्ञात",
    },
    {
      text: "तपाईं आफ्नो सफलताको सिर्जनाकर्ता हुनुहुन्छ।",
      author: "अज्ञात",
    },
    {
      text: "सफल हुने एकमात्र तरिका भनेको आफूप्रति सत्य रहनु हो।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंका सपनाहरू तपाईंको भविष्यको रोडम्याप हुन्।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंलाई रोक्ने एकमात्र कुरा डर हो।",
      author: "अज्ञात",
    },
    {
      text: "तपाईं आफ्ना जंगली सपनाहरू प्राप्त गर्न सक्षम हुनुहुन्छ।",
      author: "अज्ञात",
    },
    {
      text: "फरक पार्ने एकमात्र तरिका भनेको आफैं हुनु हो।",
      author: "अज्ञात",
    },
    {
      text: "तपाईंको यात्रा भर्खर सुरु हुँदैछ।",
      author: "अज्ञात",
    },
  ],
};

// Template data
const templates = [
  { id: 1, name: "Classic", color: "#6C63FF", icon: "fa-quote-left" },
  {
    id: 2,
    name: "Gradient",
    color:
      "linear-gradient(135deg, rgba(108, 99, 255, 0.1) 0%, rgba(255, 101, 132, 0.1) 100%)",
    icon: "fa-gradient",
  },
  { id: 3, name: "Bold", color: "#6C63FF", icon: "fa-bold" },
  { id: 4, name: "Minimal", color: "#F7FAFC", icon: "fa-minimize" },
  {
    id: 5,
    name: "Soft Pink",
    color: "linear-gradient(to right, #ff9a9e, #fad0c4)",
    icon: "fa-heart",
  },
  {
    id: 6,
    name: "Sky Blue",
    color: "linear-gradient(to right, #a1c4fd, #c2e9fb)",
    icon: "fa-cloud",
  },
  {
    id: 7,
    name: "Mint Green",
    color: "linear-gradient(to right, #84fab0, #8fd3f4)",
    icon: "fa-leaf",
  },
  {
    id: 8,
    name: "Lavender",
    color: "linear-gradient(to right, #a6c1ee, #fbc2eb)",
    icon: "fa-spa",
  },
  {
    id: 9,
    name: "Pastel",
    color: "linear-gradient(to right, #fdcbf1, #e6dee9)",
    icon: "fa-pastafarianism",
  },
  {
    id: 10,
    name: "Sunset",
    color: "linear-gradient(to right, #ffecd2, #fcb69f)",
    icon: "fa-sun",
  },
  { id: 11, name: "Dark", color: "#2D3748", icon: "fa-moon" },
  { id: 12, name: "Vibrant", color: "#FF6584", icon: "fa-fire" },
  { id: 13, name: "Royal", color: "#4D44DB", icon: "fa-crown" },
  { id: 14, name: "Emerald", color: "#06D6A0", icon: "fa-gem" },
  { id: 15, name: "Ocean", color: "#118AB2", icon: "fa-water" },
  { id: 16, name: "Coral", color: "#EF476F", icon: "fa-fish" },
  { id: 17, name: "Gold", color: "#FFD166", icon: "fa-coins" },
  { id: 18, name: "Midnight", color: "#073B4C", icon: "fa-star" },
  { id: 19, name: "Light", color: "#F8F9FA", icon: "fa-lightbulb" },
  { id: 20, name: "Gray", color: "#E9ECEF", icon: "fa-sliders" },
  {
    id: 21,
    name: "Dawn",
    color: "linear-gradient(to right, #f6d365, #fda085)",
    icon: "fa-sunrise",
  },
  { id: 22, name: "Serenity", color: "#B2DFDB", icon: "fa-water" },
  { id: 23, name: "Blaze", color: "#FF5733", icon: "fa-fire-alt" },
  {
    id: 24,
    name: "Twilight",
    color: "linear-gradient(to right, #4b6cb7, #182848)",
    icon: "fa-moon",
  },
  { id: 25, name: "Amethyst", color: "#9B59B6", icon: "fa-gem" },
  {
    id: 26,
    name: "Horizon",
    color: "linear-gradient(to right, #36D1DC, #5B86E5)",
    icon: "fa-horizon",
  },
  { id: 27, name: "Crimson", color: "#DC143C", icon: "fa-heartbeat" },
  {
    id: 28,
    name: "Aurora",
    color: "linear-gradient(to right, #00C4B4, #7B68EE)",
    icon: "fa-aurora",
  },
  { id: 29, name: "Saffron", color: "#F4C430", icon: "fa-spice" },
  {
    id: 30,
    name: "Meadow",
    color: "linear-gradient(to right, #A8E063, #56AB2F)",
    icon: "fa-tree",
  },
  { id: 31, name: "Obsidian", color: "#1C2526", icon: "fa-stone" },
  { id: 32, name: "Peach", color: "#FF9999", icon: "fa-peach" },
  {
    id: 33,
    name: "Eclipse",
    color: "linear-gradient(to right, #2C3E50, #000000)",
    icon: "fa-eclipse",
  },
  { id: 34, name: "Sapphire", color: "#0F52BA", icon: "fa-gem" },
  {
    id: 35,
    name: "Blossom",
    color: "linear-gradient(to right, #F7CAC9, #92A8D1)",
    icon: "fa-flower",
  },
  { id: 36, name: "Amber", color: "#FFBF00", icon: "fa-amber" },
  { id: 37, name: "Storm", color: "#4682B4", icon: "fa-bolt" },
  {
    id: 38,
    name: "Velvet",
    color: "linear-gradient(to right, #800080, #C71585)",
    icon: "fa-fabric",
  },
  { id: 39, name: "Lime", color: "#32CD32", icon: "fa-lemon" },
  {
    id: 40,
    name: "Dusk",
    color: "linear-gradient(to right, #6B7280, #1F2937)",
    icon: "fa-sunset",
  },
  { id: 41, name: "Turquoise", color: "#40E0D0", icon: "fa-water" },
  {
    id: 42,
    name: "Cherry",
    color: "linear-gradient(to right, #990000, #FF4040)",
    icon: "fa-cherry",
  },
  { id: 43, name: "Onyx", color: "#353839", icon: "fa-stone" },
  {
    id: 44,
    name: "Citrus",
    color: "linear-gradient(to right, #FFCA28, #F57C00)",
    icon: "fa-orange",
  },
  { id: 45, name: "Indigo", color: "#4B0082", icon: "fa-star" },
  {
    id: 46,
    name: "Spring",
    color: "linear-gradient(to right, #B9FBC0, #A3E4D7)",
    icon: "fa-flower-tulip",
  },
  { id: 47, name: "Ruby", color: "#E0115F", icon: "fa-gem" },
  {
    id: 48,
    name: "Frost",
    color: "linear-gradient(to right, #E6F0FA, #B3CDE0)",
    icon: "fa-snowflake",
  },
  { id: 49, name: "Marigold", color: "#FFC107", icon: "fa-flower" },
  {
    id: 50,
    name: "Nebula",
    color: "linear-gradient(to right, #1E3A8A, #A855F7)",
    icon: "fa-galaxy",
  },
  { id: 51, name: "Teal", color: "#008080", icon: "fa-wave" },
  {
    id: 52,
    name: "Harvest",
    color: "linear-gradient(to right, #DAA520, #FF4500)",
    icon: "fa-wheat",
  },
  { id: 53, name: "Slate", color: "#708090", icon: "fa-rock" },
  {
    id: 54,
    name: "Blush",
    color: "linear-gradient(to right, #FF6F91, #FFE1E6)",
    icon: "fa-heart",
  },
  { id: 55, name: "Jade", color: "#00A36C", icon: "fa-gem" },
  {
    id: 56,
    name: "Dawn Glow",
    color: "linear-gradient(to right, #FDCB58, #EF629F)",
    icon: "fa-sunrise",
  },
  { id: 57, name: "Ebony", color: "#555D50", icon: "fa-stone" },
  {
    id: 58,
    name: "Orchid",
    color: "linear-gradient(to right, #DA70D6, #EE82EE)",
    icon: "fa-flower",
  },
  { id: 59, name: "Tangerine", color: "#F28500", icon: "fa-orange" },
  {
    id: 60,
    name: "Mist",
    color: "linear-gradient(to right, #D3CCE3, #E9E4F0)",
    icon: "fa-cloud",
  },
  { id: 61, name: "Periwinkle", color: "#CCCCFF", icon: "fa-flower-tulip" },
  {
    id: 62,
    name: "Fire Opal",
    color: "linear-gradient(to right, #EF233C, #F48C06)",
    icon: "fa-fire",
  },
  { id: 63, name: "Charcoal", color: "#36454F", icon: "fa-rock" },
  {
    id: 64,
    name: "Rose Quartz",
    color: "linear-gradient(to right, #F4C4F3, #FCF0F1)",
    icon: "fa-gem",
  },
  { id: 65, name: "Topaz", color: "#FFC107", icon: "fa-gem" },
  {
    id: 66,
    name: "Glacier",
    color: "linear-gradient(to right, #A3BFFA, #DBEAFE)",
    icon: "fa-snowflake",
  },
  { id: 67, name: "Magenta", color: "#C71585", icon: "fa-heart" },
  {
    id: 68,
    name: "Autumn",
    color: "linear-gradient(to right, #B22222, #FFA500)",
    icon: "fa-leaf",
  },
  { id: 69, name: "Silver", color: "#C0C0C0", icon: "fa-coins" },
  {
    id: 70,
    name: "Coral Reef",
    color: "linear-gradient(to right, #FF6B6B, #4ECDC4)",
    icon: "fa-fish",
  },
  { id: 71, name: "Aquamarine", color: "#7FFFD4", icon: "fa-water" },
  {
    id: 72,
    name: "Dandelion",
    color: "linear-gradient(to right, #FFFF99, #FFD700)",
    icon: "fa-flower",
  },
  { id: 73, name: "Graphite", color: "#4B5EAA", icon: "fa-rock" },
  {
    id: 74,
    name: "Lilac",
    color: "linear-gradient(to right, #C8A2C8, #E6E6FA)",
    icon: "fa-flower-tulip",
  },
  { id: 75, name: "Cobalt", color: "#0047AB", icon: "fa-star" },
  {
    id: 76,
    name: "Sunflower",
    color: "linear-gradient(to right, #FFDB58, #FFD700)",
    icon: "fa-flower",
  },
  { id: 77, name: "Sienna", color: "#A0522D", icon: "fa-leaf" },
  {
    id: 78,
    name: "Cloud",
    color: "linear-gradient(to right, #ECEFF4, #F3F4F6)",
    icon: "fa-cloud",
  },
  { id: 79, name: "Garnet", color: "#733635", icon: "fa-gem" },
  {
    id: 80,
    name: "Mystic",
    color: "linear-gradient(to right, #3C1053, #AD5389)",
    icon: "fa-star",
  },
  { id: 81, name: "Azure", color: "#007FFF", icon: "fa-wave" },
  {
    id: 82,
    name: "Goldenrod",
    color: "linear-gradient(to right, #DAA520, #FFD700)",
    icon: "fa-flower",
  },
  { id: 83, name: "Ochre", color: "#CC7722", icon: "fa-leaf" },
  {
    id: 84,
    name: "Twilight Glow",
    color: "linear-gradient(to right, #8B008B, #FF00FF)",
    icon: "fa-sunset",
  },
  { id: 85, name: "Malachite", color: "#0BDA51", icon: "fa-gem" },
  {
    id: 86,
    name: "Blizzard",
    color: "linear-gradient(to right, #F0F8FF, #B0E0E6)",
    icon: "fa-snowflake",
  },
  { id: 87, name: "Plum", color: "#DDA0DD", icon: "fa-flower" },
  {
    id: 88,
    name: "Radiance",
    color: "linear-gradient(to right, #FFEFBA, #FFFFFF)",
    icon: "fa-lightbulb",
  },
  { id: 89, name: "Bronze", color: "#CD7F32", icon: "fa-coins" },
  {
    id: 90,
    name: "Horizon Blue",
    color: "linear-gradient(to right, #5DADE2, #3498DB)",
    icon: "fa-horizon",
  },
  { id: 91, name: "Carnelian", color: "#B31B1B", icon: "fa-gem" },
  {
    id: 92,
    name: "Petal",
    color: "linear-gradient(to right, #FFB6C1, #FFE4E1)",
    icon: "fa-flower",
  },
  { id: 93, name: "Slate Blue", color: "#6A5ACD", icon: "fa-rock" },
  {
    id: 94,
    name: "Mango",
    color: "linear-gradient(to right, #FFB347, #FFCC33)",
    icon: "fa-orange",
  },
  {
    id: 95,
    name: "Obsidian Glow",
    color: "linear-gradient(to right, #2F4F4F, #000000)",
    icon: "fa-star",
  },
  { id: 96, name: "Rose", color: "#FF007F", icon: "fa-flower" },
  {
    id: 97,
    name: "Forest",
    color: "linear-gradient(to right, #228B22, #006400)",
    icon: "fa-tree",
  },
  { id: 98, name: "Pearl", color: "#F5F5F5", icon: "fa-gem" },
  {
    id: 99,
    name: "Aurora Green",
    color: "linear-gradient(to right, #00FF7F, #00CED1)",
    icon: "fa-aurora",
  },
  { id: 100, name: "Copper", color: "#B87333", icon: "fa-coins" },
  { id: 101, name: "Violet", color: "#EE82EE", icon: "fa-flower-tulip" },
  {
    id: 102,
    name: "Dawn Mist",
    color: "linear-gradient(to right, #F4E1D2, #F8C8DC)",
    icon: "fa-sunrise",
  },
  { id: 103, name: "Emerald Glow", color: "#2ECC71", icon: "fa-gem" },
  {
    id: 104,
    name: "Crimson Tide",
    color: "linear-gradient(to right, #DC143C, #B22222)",
    icon: "fa-wave",
  },
  { id: 105, name: "Silver Mist", color: "#D3D3D3", icon: "fa-cloud" },
  {
    id: 106,
    name: "Sunlit Meadow",
    color: "linear-gradient(to right, #FFD700, #ADFF2F)",
    icon: "fa-flower",
  },
  { id: 107, name: "Sapphire Night", color: "#191970", icon: "fa-star" },
  {
    id: 108,
    name: "Peach Blossom",
    color: "linear-gradient(to right, #FFE4B5, #FF9999)",
    icon: "fa-flower",
  },
  { id: 109, name: "Iron", color: "#5C5858", icon: "fa-rock" },
  {
    id: 110,
    name: "Twilight Blue",
    color: "linear-gradient(to right, #483D8B, #6A5ACD)",
    icon: "fa-sunset",
  },
  { id: 111, name: "Coral Glow", color: "#FF7F50", icon: "fa-fish" },
  {
    id: 112,
    name: "Golden Horizon",
    color: "linear-gradient(to right, #FFD700, #FFA500)",
    icon: "fa-horizon",
  },
  {
    id: 113,
    name: "Amethyst Mist",
    color: "linear-gradient(to right, #9966CC, #D8BFD8)",
    icon: "fa-gem",
  },
  {
    id: 114,
    name: "Frosty Dawn",
    color: "linear-gradient(to right, #E0FFFF, #ADD8E6)",
    icon: "fa-snowflake",
  },
  { id: 115, name: "Ruby Red", color: "#9B1D64", icon: "fa-gem" },
  {
    id: 116,
    name: "Spring Breeze",
    color: "linear-gradient(to right, #98FB98, #AFEEEE)",
    icon: "fa-wind",
  },
  { id: 117, name: "Onyx Night", color: "#1C2526", icon: "fa-star" },
  {
    id: 118,
    name: "Citrus Burst",
    color: "linear-gradient(to right, #FF8C00, #FFFF00)",
    icon: "fa-orange",
  },
  { id: 119, name: "Lilac Dream", color: "#C8A2C8", icon: "fa-flower" },
  {
    id: 120,
    name: "Ocean Wave",
    color: "linear-gradient(to right, #00CED1, #4682B4)",
    icon: "fa-wave",
  },
  { id: 121, name: "Golden Glow", color: "#FFD700", icon: "fa-coins" },
  {
    id: 122,
    name: "Rose Petal",
    color: "linear-gradient(to right, #FF69B4, #FFB6C1)",
    icon: "fa-flower",
  },
  { id: 123, name: "Slate Gray", color: "#708090", icon: "fa-rock" },
  {
    id: 124,
    name: "Sunset Glow",
    color: "linear-gradient(to right, #FF4500, #FF6347)",
    icon: "fa-sunset",
  },
  { id: 125, name: "Turquoise Tide", color: "#00CED1", icon: "fa-water" },
  {
    id: 126,
    name: "Blossom Pink",
    color: "linear-gradient(to right, #FF9999, #FFC1CC)",
    icon: "fa-flower",
  },
  { id: 127, name: "Ebony Star", color: "#2F2F2F", icon: "fa-star" },
  {
    id: 128,
    name: "Mango Tango",
    color: "linear-gradient(to right, #FF8C00, #FFA500)",
    icon: "fa-orange",
  },
  { id: 129, name: "Jade Mist", color: "#00A36C", icon: "fa-gem" },
  {
    id: 130,
    name: "Aurora Violet",
    color: "linear-gradient(to right, #9400D3, #4B0082)",
    icon: "fa-aurora",
  },
  { id: 131, name: "Copper Glow", color: "#B87333", icon: "fa-coins" },
  {
    id: 132,
    name: "Frosty Blue",
    color: "linear-gradient(to right, #B0E0E6, #ADD8E6)",
    icon: "fa-snowflake",
  },
  { id: 133, name: "Cherry Blossom", color: "#FFB7C5", icon: "fa-flower" },
  {
    id: 134,
    name: "Golden Sunset",
    color: "linear-gradient(to right, #FFD700, #FF4500)",
    icon: "fa-sunset",
  },
  { id: 135, name: "Sapphire Glow", color: "#0F52BA", icon: "fa-gem" },
  {
    id: 136,
    name: "Mint Breeze",
    color: "linear-gradient(to right, #98FF98, #00FA9A)",
    icon: "fa-leaf",
  },
  { id: 137, name: "Obsidian Star", color: "#1C2526", icon: "fa-star" },
  {
    id: 138,
    name: "Peach Glow",
    color: "linear-gradient(to right, #FFDAB9, #FFE4B5)",
    icon: "fa-peach",
  },
  { id: 139, name: "Amethyst Glow", color: "#9966CC", icon: "fa-gem" },
  {
    id: 140,
    name: "Twilight Mist",
    color: "linear-gradient(to right, #483D8B, #6A5ACD)",
    icon: "fa-sunset",
  },
  { id: 141, name: "Coral Sunset", color: "#FF6B6B", icon: "fa-fish" },
  {
    id: 142,
    name: "Golden Meadow",
    color: "linear-gradient(to right, #FFD700, #ADFF2F)",
    icon: "fa-flower",
  },
  { id: 143, name: "Slate Night", color: "#4B5EAA", icon: "fa-rock" },
  {
    id: 144,
    name: "Lilac Breeze",
    color: "linear-gradient(to right, #C8A2C8, #E6E6FA)",
    icon: "fa-flower-tulip",
  },
  { id: 145, name: "Cobalt Star", color: "#0047AB", icon: "fa-star" },
  {
    id: 146,
    name: "Sunflower Glow",
    color: "linear-gradient(to right, #FFDB58, #FFD700)",
    icon: "fa-flower",
  },
  { id: 147, name: "Sienna Leaf", color: "#A0522D", icon: "fa-leaf" },
  {
    id: 148,
    name: "Cloud Mist",
    color: "linear-gradient(to right, #ECEFF4, #F3F4F6)",
    icon: "fa-cloud",
  },
  { id: 149, name: "Garnet Glow", color: "#733635", icon: "fa-gem" },
  {
    id: 150,
    name: "Mystic Glow",
    color: "linear-gradient(to right, #3C1053, #AD5389)",
    icon: "fa-star",
  },
  { id: 151, name: "Azure Wave", color: "#007FFF", icon: "fa-wave" },
  {
    id: 152,
    name: "Goldenrod Bloom",
    color: "linear-gradient(to right, #DAA520, #FFD700)",
    icon: "fa-flower",
  },
  { id: 153, name: "Ochre Glow", color: "#CC7722", icon: "fa-leaf" },
  {
    id: 154,
    name: "Twilight Violet",
    color: "linear-gradient(to right, #8B008B, #FF00FF)",
    icon: "fa-sunset",
  },
  { id: 155, name: "Malachite Green", color: "#0BDA51", icon: "fa-gem" },
  {
    id: 156,
    name: "Blizzard Glow",
    color: "linear-gradient(to right, #F0F8FF, #B0E0E6)",
    icon: "fa-snowflake",
  },
  { id: 157, name: "Plum Blossom", color: "#DDA0DD", icon: "fa-flower" },
  {
    id: 158,
    name: "Radiant Glow",
    color: "linear-gradient(to right, #FFEFBA, #FFFFFF)",
    icon: "fa-lightbulb",
  },
  { id: 159, name: "Bronze Shine", color: "#CD7F32", icon: "fa-coins" },
  {
    id: 160,
    name: "Horizon Glow",
    color: "linear-gradient(to right, #5DADE2, #3498DB)",
    icon: "fa-horizon",
  },
  { id: 161, name: "Carnelian Red", color: "#B31B1B", icon: "fa-gem" },
  {
    id: 162,
    name: "Petal Pink",
    color: "linear-gradient(to right, #FFB6C1, #FFE4E1)",
    icon: "fa-flower",
  },
  { id: 163, name: "Slate Blue Glow", color: "#6A5ACD", icon: "fa-rock" },
  {
    id: 164,
    name: "Mango Glow",
    color: "linear-gradient(to right, #FFB347, #FFCC33)",
    icon: "fa-orange",
  },
  {
    id: 165,
    name: "Obsidian Night",
    color: "linear-gradient(to right, #2F4F4F, #000000)",
    icon: "fa-star",
  },
  { id: 166, name: "Rose Glow", color: "#FF007F", icon: "fa-flower" },
  {
    id: 167,
    name: "Forest Green",
    color: "linear-gradient(to right, #228B22, #006400)",
    icon: "fa-tree",
  },
  { id: 168, name: "Pearl White", color: "#F5F5F5", icon: "fa-gem" },
  {
    id: 169,
    name: "Aurora Emerald",
    color: "linear-gradient(to right, #00FF7F, #00CED1)",
    icon: "fa-aurora",
  },
  { id: 170, name: "Copper Shine", color: "#B87333", icon: "fa-coins" },
  { id: 171, name: "Violet Bloom", color: "#EE82EE", icon: "fa-flower-tulip" },
  {
    id: 172,
    name: "Dawn Haze",
    color: "linear-gradient(to right, #F4E1D2, #F8C8DC)",
    icon: "fa-sunrise",
  },
  { id: 173, name: "Emerald Shine", color: "#2ECC71", icon: "fa-gem" },
  {
    id: 174,
    name: "Crimson Wave",
    color: "linear-gradient(to right, #DC143C, #B22222)",
    icon: "fa-wave",
  },
  { id: 175, name: "Silver Cloud", color: "#D3D3D3", icon: "fa-cloud" },
  {
    id: 176,
    name: "Sunlit Bloom",
    color: "linear-gradient(to right, #FFD700, #ADFF2F)",
    icon: "fa-flower",
  },
  { id: 177, name: "Sapphire Star", color: "#191970", icon: "fa-star" },
  {
    id: 178,
    name: "Peach Petal",
    color: "linear-gradient(to right, #FFE4B5, #FF9999)",
    icon: "fa-flower",
  },
  { id: 179, name: "Iron Gray", color: "#5C5858", icon: "fa-rock" },
  {
    id: 180,
    name: "Twilight Haze",
    color: "linear-gradient(to right, #483D8B, #6A5ACD)",
    icon: "fa-sunset",
  },
  { id: 181, name: "Coral Shine", color: "#FF7F50", icon: "fa-fish" },
  {
    id: 182,
    name: "Golden Field",
    color: "linear-gradient(to right, #FFD700, #FFA500)",
    icon: "fa-horizon",
  },
  {
    id: 183,
    name: "Amethyst Star",
    color: "linear-gradient(to right, #9966CC, #D8BFD8)",
    icon: "fa-gem",
  },
  {
    id: 184,
    name: "Frosty Glow",
    color: "linear-gradient(to right, #E0FFFF, #ADD8E6)",
    icon: "fa-snowflake",
  },
  { id: 185, name: "Ruby Glow", color: "#9B1D64", icon: "fa-gem" },
  {
    id: 186,
    name: "Spring Mist",
    color: "linear-gradient(to right, #98FB98, #AFEEEE)",
    icon: "fa-wind",
  },
  { id: 187, name: "Onyx Glow", color: "#1C2526", icon: "fa-star" },
  {
    id: 188,
    name: "Citrus Shine",
    color: "linear-gradient(to right, #FF8C00, #FFFF00)",
    icon: "fa-orange",
  },
  { id: 189, name: "Lilac Glow", color: "#C8A2C8", icon: "fa-flower" },
  {
    id: 190,
    name: "Ocean Mist",
    color: "linear-gradient(to right, #00CED1, #4682B4)",
    icon: "fa-wave",
  },
  { id: 191, name: "Golden Shine", color: "#FFD700", icon: "fa-coins" },
  {
    id: 192,
    name: "Rose Bloom",
    color: "linear-gradient(to right, #FF69B4, #FFB6C1)",
    icon: "fa-flower",
  },
  { id: 193, name: "Slate Star", color: "#708090", icon: "fa-rock" },
  {
    id: 194,
    name: "Sunset Shine",
    color: "linear-gradient(to right, #FF4500, #FF6347)",
    icon: "fa-sunset",
  },
  { id: 195, name: "Turquoise Glow", color: "#00CED1", icon: "fa-water" },
  {
    id: 196,
    name: "Blossom Glow",
    color: "linear-gradient(to right, #FF9999, #FFC1CC)",
    icon: "fa-flower",
  },
  { id: 197, name: "Ebony Glow", color: "#2F2F2F", icon: "fa-star" },
  {
    id: 198,
    name: "Mango Shine",
    color: "linear-gradient(to right, #FF8C00, #FFA500)",
    icon: "fa-orange",
  },
  { id: 199, name: "Jade Shine", color: "#00A36C", icon: "fa-gem" },
  {
    id: 200,
    name: "Aurora Shine",
    color: "linear-gradient(to right, #9400D3, #4B0082)",
    icon: "fa-aurora",
  },
  { id: 201, name: "Copper Star", color: "#B87333", icon: "fa-coins" },
  {
    id: 202,
    name: "Frosty Mist",
    color: "linear-gradient(to right, #B0E0E6, #ADD8E6)",
    icon: "fa-snowflake",
  },
  { id: 203, name: "Cherry Glow", color: "#FFB7C5", icon: "fa-flower" },
  {
    id: 204,
    name: "Golden Dusk",
    color: "linear-gradient(to right, #FFD700, #FF4500)",
    icon: "fa-sunset",
  },
  { id: 205, name: "Sapphire Mist", color: "#0F52BA", icon: "fa-gem" },
  {
    id: 206,
    name: "Mint Glow",
    color: "linear-gradient(to right, #98FF98, #00FA9A)",
    icon: "fa-leaf",
  },
  { id: 207, name: "Obsidian Shine", color: "#1C2526", icon: "fa-star" },
  {
    id: 208,
    name: "Peach Shine",
    color: "linear-gradient(to right, #FFDAB9, #FFE4B5)",
    icon: "fa-peach",
  },
  { id: 209, name: "Amethyst Shine", color: "#9966CC", icon: "fa-gem" },
  {
    id: 210,
    name: "Twilight Star",
    color: "linear-gradient(to right, #483D8B, #6A5ACD)",
    icon: "fa-sunset",
  },
  { id: 211, name: "Coral Star", color: "#FF7F50", icon: "fa-fish" },
  {
    id: 212,
    name: "Golden Bloom",
    color: "linear-gradient(to right, #FFD700, #FFA500)",
    icon: "fa-horizon",
  },
  { id: 213, name: "Slate Mist", color: "#4B5EAA", icon: "fa-rock" },
  {
    id: 214,
    name: "Lilac Star",
    color: "linear-gradient(to right, #C8A2C8, #E6E6FA)",
    icon: "fa-flower-tulip",
  },
  { id: 215, name: "Cobalt Glow", color: "#0047AB", icon: "fa-star" },
  {
    id: 216,
    name: "Sunflower Shine",
    color: "linear-gradient(to right, #FFDB58, #FFD700)",
    icon: "fa-flower",
  },
  { id: 217, name: "Sienna Glow", color: "#A0522D", icon: "fa-leaf" },
  {
    id: 218,
    name: "Cloud Glow",
    color: "linear-gradient(to right, #ECEFF4, #F3F4F6)",
    icon: "fa-cloud",
  },
  { id: 219, name: "Garnet Shine", color: "#733635", icon: "fa-gem" },
  {
    id: 220,
    name: "Mystic Shine",
    color: "linear-gradient(to right, #3C1053, #AD5389)",
    icon: "fa-star",
  },
];

// DOM elements
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const quoteCard = document.getElementById("quoteCard");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const copyQuoteBtn = document.getElementById("copyQuoteBtn");
const tweetQuoteBtn = document.getElementById("tweetQuoteBtn");
const whatsappBtn = document.getElementById("whatsappBtn");
const instagramBtn = document.getElementById("instagramBtn");
const downloadQuoteBtn = document.getElementById("downloadQuoteBtn");
const downloadOptions = document.getElementById("downloadOptions");
const themeToggle = document.getElementById("themeToggle");
const quoteForm = document.getElementById("quoteForm");
const quotesGrid = document.getElementById("quotesGrid");
const templateGrid = document.getElementById("templateGrid");
const yearSpan = document.getElementById("year");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");
const navLinksAll = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");
const languageButtons = document.querySelectorAll(".language-btn");

yearSpan.textContent = new Date().getFullYear();

let currentLanguage = "en";
let currentQuote = getRandomQuote();

updateQuoteDisplay();
renderTemplates();

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDark);

  const icon = themeToggle.querySelector("i");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});

if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
  const icon = themeToggle.querySelector("i");
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    languageButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    currentLanguage = button.dataset.lang;
    currentQuote = getRandomQuote();
    updateQuoteDisplay();
    animateQuoteChange();
  });
});

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  const icon = mobileMenuBtn.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
});

navLinksAll.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const sectionId = link.getAttribute("data-section");
    sections.forEach((section) => {
      section.classList.remove("active");
    });
    document.getElementById(sectionId).classList.add("active");
    navLinks.classList.remove("active");
    const icon = mobileMenuBtn.querySelector("i");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
    window.scrollTo(0, 0);
  });
});
newQuoteBtn.addEventListener("click", () => {
  currentQuote = getRandomQuote();
  updateQuoteDisplay();
  animateQuoteChange();
});
copyQuoteBtn.addEventListener("click", () => {
  const textToCopy = `${currentQuote.text} — ${currentQuote.author}`;
  navigator.clipboard.writeText(textToCopy).then(() => {
    const icon = copyQuoteBtn.querySelector("i");
    const originalIcon = icon.className;
    icon.className = "fas fa-check";
    copyQuoteBtn.classList.add("accent");
    setTimeout(() => {
      icon.className = originalIcon;
      copyQuoteBtn.classList.remove("accent");
    }, 2000);
  });
});
tweetQuoteBtn.addEventListener("click", () => {
  const tweetText = `${currentQuote.text} - ${currentQuote.author}`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    tweetText
  )}&hashtags=InspireMe,Motivation`;
  window.open(tweetUrl, "_blank");
});
whatsappBtn.addEventListener("click", () => {
  const text = `${currentQuote.text} - ${currentQuote.author}`;
  const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
});
instagramBtn.addEventListener("click", () => {
  alert(
    "For Instagram sharing, please download the image first and then upload it to your Instagram story or post."
  );
  downloadQuote("png");
});
downloadQuoteBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  downloadOptions.classList.toggle("show");
});
document.querySelectorAll(".download-options button").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const format = e.target.getAttribute("data-format");
    downloadQuote(format);
    downloadOptions.classList.remove("show");
  });
});
document.addEventListener("click", () => {
  downloadOptions.classList.remove("show");
});
quoteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const quote = document.getElementById("quote").value.trim();
  const author = document.getElementById("author").value.trim();
  if (quote && author) {
    addUserQuote(quote, author, currentLanguage);
    quoteForm.reset();
    const submitBtn = quoteForm.querySelector("button");
    const icon = submitBtn.querySelector("i");
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-check"></i> Submitted!';
    setTimeout(() => {
      submitBtn.innerHTML = originalText;
    }, 2000);
  }
});
loadUserQuotes();
function getRandomQuote() {
  const quotes = quotesData[currentLanguage];
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function renderTemplates() {
  templateGrid.innerHTML = "";
  templates.forEach((template) => {
    const templateElement = document.createElement("div");
    templateElement.className = "template-option";
    templateElement.setAttribute("data-template", `template-${template.id}`);
    templateElement.innerHTML = `
            <div class="template-preview" style="background: ${
              template.color
            }; ${
      typeof template.color === "string" &&
      template.color.startsWith("linear-gradient")
        ? "color: white;"
        : ""
    }">
                <i class="fas ${template.icon}" style="font-size: 2rem;"></i>
                <div class="template-name">${template.name}</div>
            </div>
        `;

    templateElement.addEventListener("click", () => {
      selectTemplate(template.id);
      quoteCard.style.background = template.color;
      if (
        typeof template.color === "string" &&
        (template.color.startsWith("linear-gradient") ||
          template.color.startsWith("#")) &&
        !template.color.includes("rgba")
      ) {
        quoteCard.style.color = "white";
        quoteCard.querySelector(".quote-author").style.color =
          "rgba(255,255,255,0.9)";
      } else {
        quoteCard.style.color = "";
        quoteCard.querySelector(".quote-author").style.color = "";
      }
    });

    templateGrid.appendChild(templateElement);
  });
  if (templates.length > 0) {
    selectTemplate(1);
  }
}
function selectTemplate(templateId) {
  for (let i = 1; i <= 200; i++) {
    quoteCard.classList.remove(`template-${i}`);
  }
  quoteCard.classList.add(`template-${templateId}`);
  document.querySelectorAll(".template-option").forEach((option) => {
    option.classList.remove("selected");
  });
  document
    .querySelector(`.template-option[data-template="template-${templateId}"]`)
    .classList.add("selected");
}

function updateQuoteDisplay() {
  quoteText.textContent = currentQuote.text;
  quoteAuthor.textContent = `— ${currentQuote.author}`;
}

function animateQuoteChange() {
  quoteCard.style.animation = "none";
  void quoteCard.offsetWidth; 
  quoteCard.style.animation = "slideUp 0.5s ease";
}

function addUserQuote(text, author, language) {
  const quote = {
    text,
    author,
    language,
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
  };
  displayUserQuote(quote);
  saveUserQuote(quote);
}

function displayUserQuote(quote) {
  const languageNames = {
    en: "English",
    hi: "Hindi",
    ne: "Nepali",
  };

  const quoteCard = document.createElement("div");
  quoteCard.className = "user-quote-card";
  quoteCard.innerHTML = `
                <p class="user-quote-text">"${quote.text}"</p>
                <p class="user-quote-author">— ${quote.author}</p>
                <p class="user-quote-date">${quote.date}</p>
                
                <div class="user-quote-actions">
                    <button class="secondary" data-quote="${encodeURIComponent(
                      quote.text
                    )}" data-author="${encodeURIComponent(quote.author)}">
                        <i class="fas fa-copy"></i> Copy
                    </button>
                    <button class="accent" data-quote="${encodeURIComponent(
                      quote.text
                    )}" data-author="${encodeURIComponent(quote.author)}">
                        <i class="fab fa-twitter"></i> Tweet
                    </button>
                    <button class="whatsapp" data-quote="${encodeURIComponent(
                      quote.text
                    )}" data-author="${encodeURIComponent(quote.author)}">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </button>
                </div>
            `;
  quoteCard.querySelectorAll(".user-quote-actions button").forEach((btn) => {
    if (btn.querySelector(".fa-copy")) {
      btn.addEventListener("click", () => copyUserQuote(btn));
    } else if (btn.querySelector(".fa-twitter")) {
      btn.addEventListener("click", () => tweetUserQuote(btn));
    } else if (btn.querySelector(".fa-whatsapp")) {
      btn.addEventListener("click", () => whatsappUserQuote(btn));
    }
  });

  quotesGrid.insertBefore(quoteCard, quotesGrid.firstChild);
}

function copyUserQuote(btn) {
  const quote = decodeURIComponent(btn.getAttribute("data-quote"));
  const author = decodeURIComponent(btn.getAttribute("data-author"));
  const textToCopy = `${quote} — ${author}`;

  navigator.clipboard.writeText(textToCopy).then(() => {
    const icon = btn.querySelector("i");
    const originalIcon = icon.className;
    icon.className = "fas fa-check";
    btn.classList.remove("secondary");
    btn.classList.add("accent");
    setTimeout(() => {
      icon.className = originalIcon;
      btn.classList.remove("accent");
      btn.classList.add("secondary");
    }, 2000);
  });
}

function tweetUserQuote(btn) {
  const quote = decodeURIComponent(btn.getAttribute("data-quote"));
  const author = decodeURIComponent(btn.getAttribute("data-author"));
  const tweetText = `${quote} - ${author}`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    tweetText
  )}&hashtags=InspireMe,Motivation`;
  window.open(tweetUrl, "_blank");
}

function whatsappUserQuote(btn) {
  const quote = decodeURIComponent(btn.getAttribute("data-quote"));
  const author = decodeURIComponent(btn.getAttribute("data-author"));
  const text = `${quote} - ${author}`;
  const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

function saveUserQuote(quote) {
  let userQuotes = JSON.parse(localStorage.getItem("userQuotes")) || [];
  userQuotes.unshift(quote); 
  localStorage.setItem("userQuotes", JSON.stringify(userQuotes));
}

function loadUserQuotes() {
  const userQuotes = JSON.parse(localStorage.getItem("userQuotes")) || [];
  userQuotes.forEach((quote) => {
    displayUserQuote(quote);
  });
}

function downloadQuote(format) {
  const quote = currentQuote.text;
  const author = currentQuote.author;
  const text = `${quote}\n\n— ${author}`;

  switch (format) {
    case "txt":
      downloadTextFile(text);
      break;
    case "png":
      downloadAsImage();
      break;
    case "pdf":
      downloadAsPDF();
      break;
  }
}

function downloadTextFile(text) {
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "motivational-quote.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function downloadAsImage() {
  const quoteCard = document.querySelector(".quote-card");

  html2canvas(quoteCard, {
    backgroundColor: null,
    scale: 2,
    logging: false,
    useCORS: true,
  }).then((canvas) => {
    const link = document.createElement("a");
    link.download = "motivational-quote.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}

function downloadAsPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.setTextColor(108, 99, 255);
  doc.text("Inspirational Quote", 105, 20, { align: "center" });

  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text('"' + currentQuote.text + '"', 105, 40, {
    align: "center",
    maxWidth: 180,
  });

  doc.setFontSize(12);
  doc.setTextColor(108, 99, 255);
  doc.text("— " + currentQuote.author, 105, 60, { align: "center" });

  doc.setFontSize(10);
  doc.setTextColor(150, 150, 150);
  doc.text(
    "Downloaded from InspireMe • " + new Date().toLocaleDateString(),
    105,
    280,
    { align: "center" }
  );

  doc.save("motivational-quote.pdf");
}
