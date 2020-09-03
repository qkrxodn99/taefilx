import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container= styled.div`
    padding: 20px;
`;

const TVPresenter = ({topRate,popular,airingToday,loading,error}) =>    (
    <>
    <Helmet><title>TV SHOW | Taeflix </title></Helmet>
    {loading ? (<Loader />)
:(
<Container>
    {topRate && topRate.length > 0 && ( 
    <Section title="topRate Show">
        {topRate.map(show => (
              <Poster 
              key={show.id} 
              id={show.id}
              title={show.original_name} 
              imageUrl={show.poster_path} 
              rating={show.vote_average}
              year={show.first_air_date.substring(0,4)}
              />
            ))}
        </Section>
        )};
        {popular && popular.length > 0 && ( 
    <Section title="popular Show">
        {popular.map(show => (
              <Poster 
              key={show.id} 
              id={show.id}
              title={show.original_name} 
              imageUrl={show.poster_path} 
              rating={show.vote_average}
              year={show.first_air_date.substring(0,4)}
              />
            ))}
        </Section>
        )}
        {airingToday && airingToday.length > 0 && ( 
    <Section title="AiringToday">
        {airingToday.map(show => (
             <Poster 
             key={show.id} 
             id={show.id}
             title={show.original_name} 
             imageUrl={show.poster_path} 
             rating={show.vote_average}
             year={show.first_air_date.substring(0,4)}
             />
            ))}
        </Section>
        )}
         {error && <Message color="#e74c3c" text={error}/>}
    </Container>
)}
    </>

) 
    


TVPresenter.propTypes ={
    topRate:PropTypes.array,
    popular:PropTypes.array,
    airingToday:PropTypes.array,
    loading:PropTypes.bool.isRequired,
    error:PropTypes.string
};


export default TVPresenter;