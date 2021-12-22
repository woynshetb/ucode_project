import React from 'react'
import {Link } from 'react-router-dom'
import {Container,Button } from '../../globalStyles'
import {InfoRow,InfoSec ,InfoColumn,TextWrapper,TopLine,Heading,Subtitle,Img,ImgWrapper} from './infoSection.element'
const InfoSection = ({
    primary,lightBg,imgStart,lightTopLine,lightTextDesc,buttonLabel,description,headLine,lightText,topLine,start,img,alt
}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                           <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                           <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                           
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start}>
                           <Img src={img} alt={alt}/>

                           
                        </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
            </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection
