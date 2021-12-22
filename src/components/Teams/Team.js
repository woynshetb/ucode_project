import React from 'react'
import styled from 'styled-components'

import team1 from '../../image/doc1.png';
import team2 from '../../image/doc2.png';
import team3 from '../../image/togather.jpg';

export const teamData = [
  {
    img:team1,
    alt:'Service',
    name:'Dr Liya ',
    desc:' Breast Cancer Specialist',
    button:'Read More',
    
  },
  {
    img:team2,
    alt:'Service',
    name:'Dr Woynshrt ',
    desc:' Breast Cancer Specialist ',
    button:'Read More',
    
  },
  {
    img:team1,
    alt:'Service',
    name:'Dr Rediet ',
    desc:' Breast Cancer Specialist',
    button:'Read More',
    
  },

]
const Team = ({heading,data}) => {

  return (
    <TeamContainer>
      <TeamHeading>{heading}<Teamtitle>Our Specialist</Teamtitle> </TeamHeading>
      
        <TeamWrapper>
         {teamData.map((service,index)=>{
           return(
             <TeamCard key={index}>
               <TeamImg src={service.img} alt={service.alt} />
               <TeamInfo>
                 <TeamTitle>
                   {service.name}
                 </TeamTitle>
                 <TeamDesc>
                   {service.desc}
                 </TeamDesc>
               
               </TeamInfo>
               </TeamCard>
           )
         })}
          
        </TeamWrapper>
      
    </TeamContainer>
  )
}

export default Team;
 const TeamContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #413939;
  color: #fff;
  
`;

 const TeamWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
// 
`;

const TeamCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
  
`;

 const TeamImg = styled.img`
  height: 400px;
  min-width: 300px;
  max-width: 100%;
  
  border-radius: 50%;
`;


const TeamHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

 const TeamTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

 const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  background: grey;
`;

const TeamDesc = styled.p`
  margin-bottom: 1rem;
`;


 const TeamButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
const Teamtitle = styled.h2`

align-items: center;
`;

