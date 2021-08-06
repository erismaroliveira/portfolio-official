import React from 'react';
import ServicesSection from '../Components/ServicesSection';
import SkillsSection from '../Components/SkillsSection';
import Title from '../Components/Title';
import ImageSection from './ImageSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
  return (
    <div className="AboutPage">
      <Title title={"Sobre Mim"} span={"Sobre Mim"} />
      <ImageSection />
      <Title title={"Minhas Skills"} span={"Minhas Skills"} />
      <div className="skill-container">
        <SkillsSection skill={'JavaScript'} progress={'100%'} width={'100%'} />
        <SkillsSection skill={'TypeScript'} progress={'50%'} width={'50%'} />
        <SkillsSection skill={'React Js'} progress={'100%'} width={'100%'} />
        <SkillsSection skill={'HTML5'} progress={'100%'} width={'100%'} />
        <SkillsSection skill={'CSS3'} progress={'100%'} width={'100%'} />
        <SkillsSection skill={'SASS'} progress={'80%'} width={'80%'} />
        <SkillsSection skill={'Java'} progress={'25%'} width={'25%'} />
        <SkillsSection skill={'Python'} progress={'20%'} width={'20%'} />
      </div>
      <Title title={"Serviços"} span={"Serviços"} />
      <div className="services-container">
        <ServicesSection 
          image={design} 
          title={'Web Design'} 
          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} 
        />
        <ServicesSection 
          image={intelligence} 
          title={'Intelligence'} 
          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} 
        />
        <ServicesSection 
          image={gamedev} 
          title={'Game Dev'} 
          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} 
        />
      </div>
    </div>
  )
}

export default AboutPage;
