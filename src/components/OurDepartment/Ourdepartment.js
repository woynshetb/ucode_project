import React from 'react'
import styled from 'styled-components';


const OurData=[{
    img:'../../image/togather.jpg',
    title:"Breast Cancer",
    desc:" Department that treat the cancer that forms in the cekks of the breast "
},
{
    img:'../../image/togather.jpg',
    title:"Prostate Cancer",
    desc:"Department that treat the cancer in the man's prostate, a small walnut-sized glad that produce seminal fluid"
},
{
    img:'../../image/togather.jpg',
    title:"Basal cell Cancer",
    desc:"Department that treat the  cancer that begins in the basal cells "
},
{
    img:'../../image/togather.jpg',
    title:"Skin Cancer",
    desc:"Department that treat The most serous type of skin cancer"
},
{
    img:'../../image/togather.jpg',
    title:"Colon Cancer",
    desc:"Department that treat the cancer of thee colon or rectum ,located at the digestiv tract's lower end "
},
{
    img:'../../image/togather.jpg',
    title:"Lung Cancer",
    desc:" Department that treat the cancer that begins in the lungs and most often occurs in the people who smoke "
},
{
    img:'../../image/togather.jpg',
    title:"Leukemia",
    desc:"Department that treat the cancer of the blood forming tissues , hindering the body ability to fight infection"
},
{
    img:'../../image/togather.jpg',
    title:"Lymphoma",
    desc:"Department that treat the cancer of the lymphatic system "
},
]
const Ourdepartment = () => {
    return (
        <OurContainer>
            <Heading>
                Our Department
            </Heading>
            <Wrapper>
                  {OurData.map((item,index)=>{
                      return(
                          <OurBox key={index}>
                             
                              <Title>{item.title}</Title>
                              <Description>{item.desc}</Description>


                              

                              
                          </OurBox>
                      )
                  })}
                </Wrapper>
        </OurContainer>
    )
}

export default Ourdepartment;

const OurContainer = styled.div`
width:100%;

color:#000;
display: flex;

flex-direction: column;
justify-content: space-evenly;
padding: 4rem calc((100vw -1330px)/2);

align-items: center;
`
const Heading = styled.h1`
text-align:center;
font-size:clamp(1.5rem,5vm,2rem);
margin-bottom: 3rem;
padding: 0 2rem;
align-self: center;


`
const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(8,1fr);
grid-gap: 25px;
`

const OurBox = styled.div`
height:100%;
width:180px;
padding:2rem;
transition: 0.3s;



`
const Title = styled.div`
font-size: 25px;
margin-bottom:0.5rem;
align-self: center;

`
const Description = styled.p`
align-self: center;
font-size: 20px;
`