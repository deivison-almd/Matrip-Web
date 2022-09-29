// import './carrocel.scss';

import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [
//   {
//     label: 'Recepção',
//     imgPath:
//     '/images/hoteis/SoftWinHotel/foto-1.jpg'
//   },
//   {
//     label: 'Quarto 2 pessoas',
//     imgPath:
//     '/images/hoteis/SoftWinHotel/foto-2.jpg'
//   },
//   {
//     label: 'Sala de Estar',
//     imgPath:
//     '/images/hoteis/SoftWinHotel/foto-3.jpg'
//   },
//   {
//     label: 'Culinária do Hotel',
//     imgPath:
//     '/images/hoteis/SoftWinHotel/foto-4.jpg'
//   },
// ];

function HotelLuzeirosCarrocel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = HotelLuzeiros.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <div>
      <div className="bodyCarousel">
        <AutoPlaySwipeableViews
          className="styleTransition"
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {HotelLuzeiros.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 255,
                    display: 'block',
                    maxWidth: 400,
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </div>
    </div>
  );
}

export default HotelLuzeirosCarrocel;

export const HotelLuzeiros = [
  {
    label: 'Recepção',
    imgPath: '/images/hoteis/HotelLuzeiros/foto-1.jpg',
  },
  {
    label: 'Quarto 2 pessoas',
    imgPath: '/images/hoteis/HotelLuzeiros/foto-2.jpg',
  },
  {
    label: 'Sala de Estar',
    imgPath: '/images/hoteis/HotelLuzeiros/foto-3.jpg',
  },
  {
    label: 'Culinária do Hotel',
    imgPath: '/images/hoteis/HotelLuzeiros/foto-4.jpg',
  },
  {
    label: 'Culinária do Hotel',
    imgPath: '/images/hoteis/HotelLuzeiros/foto-5.jpg',
  },
];
