import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import './Banner.css';
import axios from '../axios';
import requests from '../requests';

type Movie = {
    backdrop_path?: string;
    first_air_date?: string;
    genre_ids?: number[];
    id?: number;
    name?: string;
    title?: string;
    origin_country?: string[];
    original_language?: string;
    original_name?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    vote_average?: number;
    vote_count?: number;
}

// type Props = {
//   className?: string;
// };

// const Banner: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({ className }) => {

const Banner: React.FC<{ className?: string }> = ({ className }) => {
    const [movie, setMovie] = useState<Movie>({ 
        backdrop_path: "/bKxiLRPVWe2nZXCzt6JPr5HNWYm.jpg",
    });
    useEffect(() => {
        async function fetchdata() {
            const res = await axios.get<any>(requests.fetchNetflixOriginals);
            // console.log(requests.fetchNetflixOriginals);
            setMovie(
                res.data.results[Math.floor(Math.random() * res.data.results.length - 1)]
            );
        }
        fetchdata();
    }, []);
    // console.log(movie);

    return (
        <div className={`banner ${className}`} style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`
        }} >
            <div className="pt-5 ml-4">
                <h1 className="h3 font-weight-bold">{movie.title || movie.name || movie.original_name}</h1>
                <div className="pt-3">
                    <Button className="btn-netflix-button px-4 pt-0 pb-1 font-weight-bold">Play</Button>
                    <Button className="btn-netflix-button px-4 pt-0 pb-1 ml-2 font-weight-bold">My List</Button>
                </div>
                <h6 className="banner-desc pt-3">{truncate(movie.overview??'', 150)}</h6>
            </div>
            <div className="banner-bottom" />
        </div>
    );
};

const truncate = (str: string, len: number): string => {
    return (str.length > len) ? str.substr(0, len - 1) + '...' : str;
};

export default Banner;
