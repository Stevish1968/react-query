import { useQuery } from 'react-query'
import Card from './UI/Card'

const Joke = () => {

    const fetchJoke = async () => {
        const res = await fetch('https://official-joke-api.appspot.com/jokes/programming/random')
        return res.json();
    }

    const { data, error, isLoading, refetch } = useQuery('randomJoke', fetchJoke, { enabled: false });

    if (error) return <div>There was an error {error.message}</div>
    if (isLoading) return <div>Loading....</div>

    const onRefetchHandler = () => {
        refetch();
    }


    return (
        <>
            {!data ? (
                <Card
                    header="Welcome to Joke Time"
                    body="Click on the button below to start"
                    onClick={onRefetchHandler}
                />
            ) : (
    <Card
        header="Joke of the Day!"
        body={data[0].setup}
        punch={data[0].punchline}
        onClick={onRefetchHandler}
    />

)}
        </>
    )
}

export default Joke;