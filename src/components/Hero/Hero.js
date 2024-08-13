import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import "./Hero.css"
import hero_image from "../Assets/hero_image.png"

const Hero = () => {
    return (
        <Box className="hero">
            <Box className="hero-left">
                <Typography  variant='h2' fontSize="26px" color="#090909">NEW ARRIVALS</Typography>
                <Typography className='para'>New  </Typography>
                <Typography className='para'>Collections  </Typography>
                <Typography className='para'>For Everyone</Typography>
                <Button variant='contained' >Latest Collections</Button>

            </Box>
            <Box className="hero-right">
              <img src={hero_image} alt='hero-img' />
            </Box>
        </Box>
    )
}

export default Hero