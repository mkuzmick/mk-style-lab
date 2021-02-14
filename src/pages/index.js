import React from 'react'
import { Link } from 'gatsby'
import Landing from '../components/layout/landing'
import Links from "../components/layout/links"
import GridLinks from "./20210214/grid"


export default () => (
    <div>
        <Landing title='styleLab' text="experiments go here" />
        <GridLinks />
    </div>
)