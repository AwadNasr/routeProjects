// array of objects.
var quote=[
    {
        quotes:'"Be yourself; everyone else is already taken."',
        author:'― Oscar Wilde'
    },
    {
        quotes:'"So many books, so little time."',
        author:'― Frank Zappa'
    },
    {
        quotes:'"A room without books is like a body without a soul."',
        author:'― Marcus Tullius Cicero'
    },
    {
        quotes:'"You only live once, but if you do it right, once is enough."',
        author:'― Mae West'
    },
    {
        quotes:'“Be the change that you wish to see in the world.”',
        author:'― Mahatma Gandhi'
    },
    {
        quotes:'“In three words I can sum up everything I have learned about life: it goes on.“',
        author:'― Robert Frost'
    },
    {
        quotes:'“If you tell the truth, you do not have to remember anything.”',
        author:'― Mark Twain'
    },
    {
        quotes:'“A friend is someone who knows all about you and still loves you.”',
        author:'― Elbert Hubbard'
    },
    {
        quotes:'“To live is the rarest thing in the world. Most people exist, that is all.”',
        author:'― Oscar Wilde'
    },
    {
        quotes:'“Always forgive your enemies; nothing annoys them so much.”',
        author:'― Oscar Wilde'
    },
    {
        quotes:'“Live as if you were to die tomorrow. Learn as if you were to live forever.”',
        author:'― Mahatma Gandhi'
    }
]
function newQuote(){
    var generateQuote=Math.floor(Math.random()* (quote.length));
    document.getElementById('quote').innerHTML=quote[generateQuote].quotes;
    document.getElementById('author').innerHTML=quote[generateQuote].author;
}