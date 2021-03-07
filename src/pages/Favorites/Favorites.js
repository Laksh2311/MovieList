import React, { useState } from 'react';
import CustomPagination from '../../components/SingleContent/Pagination/CustomPagination';
import SingleContent from '../../components/SingleContent/SingleContent';

function Favorites() {
    const [page, setPage] = useState(1)
const [content, setcontent] = useState([]);
const [numOfPages, setnumOfPages] = useState();


    return (
        <div className='favorites'>
        <span className="pageTitle">Favorites</span>
            <div className="trending">
            {
                content && content.map((c) => 
                    <SingleContent key={c.id}
                    id = {c.id} poster={c.poster_path}
                    title = {c.title || c.name} 
                        date={c.first_air_date || c.release_date}
                        media_type='movie'
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

export default Favorites;

