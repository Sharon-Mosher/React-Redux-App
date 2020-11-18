import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchJokes } from '../actions/index'
import styled from 'styled-components'


const StyledCard = styled.div`
background-color: aliceBlue;
color:blue;
font-size: 1rem;
display:flex;
justify-content: center;
img{
    margin-left:10%;
 
}
h1{
    font-size: 300%;
    color: blue
    margin-left: 15rem;
}
h4{
    font-size: 200%;
    color: purple;
}

`



const JokesList = (props) => {
    useEffect(() => {
        props.fetchJokes();
    },[]);

    return (
        <StyledCard className='container'>
        <div>
            <h1> Jokes </h1>
            <img src="https://image.shutterstock.com/image-photo/baby-flu-laughing-260nw-697480261.jpg" alt='baby' />

      {props.isLoading ? <p>Loading jokes...</p> : null}
      {props.error ? <p>{props.error}</p> : null}
      {props.jokes.map((joke) => (
        <div>
              <h4>{joke.setup}</h4>
              <p>{joke.punchline}</p>
      </div>
      ))}
            </div>
            </StyledCard>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    jokes: state.jokesData,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchJokes})(JokesList);