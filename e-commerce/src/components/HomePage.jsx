import React from 'react'

import { Discount } from './Discount';
import { FeaturedAndArrivals } from './FeaturedAndArrivals';
import { Hero } from './Hero';
import { Services } from './Services';

export const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <FeaturedAndArrivals title="Featured Prodcuts" descr="Summer Collection New Modern Design"></FeaturedAndArrivals>
            <Discount></Discount>
            <FeaturedAndArrivals title="New Arrivals" descr="Summer Collection New Modern Design"></FeaturedAndArrivals>
        </div>
    )
}
