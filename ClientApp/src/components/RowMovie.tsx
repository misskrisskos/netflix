import React, { useEffect, useState } from 'react';
import axios from '../axios';
import './RowMovie.css';

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

const RowMovie: React.FC<{ title: string, fetchURL: string, isLargeRow?: boolean }> = ({ title, fetchURL, isLargeRow }) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const baseImgURL = "https://image.tmdb.org/t/p/original";
    useEffect(() => {
        async function fetchdata() {
            const res = await axios.get<any>(fetchURL);
            setMovies(res.data.results);
            return res;
        }
        fetchdata();
    }, [fetchURL]);
    // console.log(movies);
    return (
        <div className="rowmovie">
            <h2>{title}</h2>
            <div className="rowmovie_posters">
                {
                    movies.map((movie) => (
                        ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                            <img
                                key={movie.id}
                                className={`rowmovie_poster ${isLargeRow && "rowmovie_poster_large"}`}
                                src={`${baseImgURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                alt={movie.name}
                            />
                        )
                    ))
                }
            </div>

        </div>
    )
};

export default RowMovie;
