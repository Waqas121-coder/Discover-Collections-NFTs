import React from 'react'
import HeroDiscover from './HeroDiscover'
import LogoText from './LogoText'
import Meta from './Meta'
import UseCasses from './UseCasses'
import Token from './Token'
// import Roadmap from './Roadmap'
import RoadMapfile from './RoadMapfile'
import Document from './Document'
import Question from './Question'
import Comunity from './Comunity'

const Discover = () => {
  return (
    <div>
        <HeroDiscover />
        <LogoText />
        <Meta />
        <UseCasses />
        <Token />
        {/* <Roadmap /> */}
        <RoadMapfile />
        <Document />
        <Question />
        <Comunity />
    </div>
  )
}

export default Discover