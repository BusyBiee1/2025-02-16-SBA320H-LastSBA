import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    //const API_KEY = "cd171968";

    return (
        <div>
        </div>
      );
    };