import "./styles/QuoteBox.css"

const QuoteBox = ({handleChangeQuote, quote}) => {
  console.log(handleChangeQuote);

  return (
    <section className="quoteBox">
        <h1>Fortune Cookies</h1>

    <section className="contain">
        <div className="animation">
          <img src="./public/images/chinito.png"/>
        </div>
       <button className="buttonLock" onClick={handleChangeQuote}>TRY MY LUCK</button>
        <article>
            <p className="phrase">
            {quote.phrase}
            </p>
        </article> 
    </section>
    <footer className="footer"><h4>Fuente :{quote.author}</h4></footer>
    </section>
  );
};
export default QuoteBox