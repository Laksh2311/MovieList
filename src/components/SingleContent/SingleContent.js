import React from 'react';
import { img_300, unavailable } from '../../config/config';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './SingleContent.css';
import { Badge } from "@material-ui/core"
import ContentModal from '../ContentModal/ContentModal';
import Genres from './Genres';

function SingleContent({id, poster,title,date,media_type,vote_average}) {

    
    return (
        <ContentModal media_type={media_type} id={id}>
        <Badge badgeContent = {vote_average} color={vote_average>6?'primary' : 'secondary'} />
        <img className= 'poster' src={poster ? `${img_300}/${poster}` : unavailable} alt={title}/>
        <b className='title'>{title} </b>
        <span className='sub'><FavoriteIcon /></span>
        
        <span className='sub'>
        {media_type === 'tv' ? "TV Series" : "Movie  " }  </span>
        <span className='sub'>
        
        {date} </span>
           
        </ContentModal>
    )
}

export default SingleContent;

