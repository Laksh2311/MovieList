import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Genres from '../../components/SingleContent/Genres';
import CustomPagination from '../../components/SingleContent/Pagination/CustomPagination';
import SingleContent from '../../components/SingleContent/SingleContent';
import useGenres from '../../hooks/useGenre';

function Series() {
    
const [page, setPage] = useState(1)
const [content, setcontent] = useState([]);
const [numOfPages, setnumOfPages] = useState();
const [selectedGenres, setSelectedGenres] = useState([])
const [genres,setGenres] = useState([]);
const genreforURL=useGenres(selectedGenres);
const fetchMovies = async() => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);
        
        setcontent(data.results)
        setnumOfPages(data.total_pages)
    }


useEffect(() => {
    fetchMovies();
},[page,genreforURL])

    return (
        <div className='series'>
        <span className="pageTitle">Series</span>
        <Genres
            type='tv'
            selectedGenres={selectedGenres}
            genres = {genres}
            setGenres={setGenres}
            setSelectedGenres={setSelectedGenres}
            setPage={setPage}

        />
         <div className="trending">
            {
                content && content.map((c) => 
                    <SingleContent key={c.id}
                    id = {c.id} poster={c.poster_path}
                    title = {c.title || c.name} 
                        date={c.first_air_date || c.release_date}
                        media_type='tv'
                        vote_average={c.vote_average}
                    />
                )
            }
        </div>   
        {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} /> )}
           
        </div>
    )
}

export default Series;

