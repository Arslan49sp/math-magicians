import useFetch from '../logic/useFetch';

function Quotes() {
  const url = 'https://api.api-ninjas.com/v1/quotes?category=love';
  const {
    data: quote,
    isPending,
    error,
  } = useFetch(url);
  return (
    <div className="quotes-container">
      {error && (
      <div>
        {' '}
        {error}
        {' '}
      </div>
      )}
      {isPending && <div>Loading... </div>}
      { quote && (
      <>
        <div>
          &quot;
          <span>{quote.quote}</span>
          &quot;
        </div>
        <span>by</span>
        <span>{quote.author}</span>
      </>
      )}

    </div>
  );
}

export default Quotes;
