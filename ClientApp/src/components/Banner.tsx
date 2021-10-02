import React from "react";
import { Button } from "reactstrap";
import './Banner.css';

// type Props = {
//   className?: string;
// };

// const Banner: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({ className }) => {

const Banner: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={`banner ${className}`}>
            <div className="pt-5 ml-4">
                <h1 className="h3 font-weight-bold">Movie Name</h1>
                <div>
                    <Button className="btn-netflix-button px-4 pt-0 pb-1">Play</Button>
                    {' '}
                    <Button className="btn-netflix-button px-4 pt-0 pb-1">My List</Button>
                </div>
                <h6 className="pt-2">This is a test description</h6>
            </div>
            <div className="banner-bottom" />
        </div>
    );
};

export default Banner;
