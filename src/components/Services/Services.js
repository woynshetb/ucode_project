import React from 'react'
import {
  ServicesContainer,
  ServicesHeading,
  ServicesWrapper,
  ServiceCard,
  ServiceImg,
  ServiceInfo,ServiceTitle,ServiceDesc,ServiceButton
} from './Services.styled'
const Services = ({heading,data}) => {

  return (
    <ServicesContainer>
      <ServicesHeading>{heading}</ServicesHeading>
        <ServicesWrapper>
         {data.map((service,index)=>{
           return(
             <ServiceCard key={index}>
               <ServiceImg src={service.img} alt={service.alt} />
               <ServiceInfo>
                 <ServiceTitle>
                   {service.name}
                 </ServiceTitle>
                 <ServiceDesc>
                   {service.desc}
                 </ServiceDesc>
               
               </ServiceInfo>
               </ServiceCard>
           )
         })}
          
        </ServicesWrapper>
      
    </ServicesContainer>
  )
}

export default Services
