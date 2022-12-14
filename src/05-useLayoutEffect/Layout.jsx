import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-example";

export const Layout = () => {

    const { increment, counter } = useCounter(); 

    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0];
    
    return (

        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />


            {
                isLoading
                ? <LoadingQuote />
                : <Quote author={author} quote={quote}/>
            }
            
 
            
            <button 
                className="btn btn-primary"
                disabled={ isLoading }
                onClick={ () => increment() }>
                Next Quote
            </button>

        </div>
    )
}
