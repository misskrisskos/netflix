import React from 'react';

const RowMovie: React.FC<{title: string}> = ({title}) => {
    return (
        <div>
            Row {title}
        </div>
    )
};

export default RowMovie;
