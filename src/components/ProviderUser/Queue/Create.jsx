import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import BasicInfo from './QueueForm/BasicInfo'
import DaySchedule from './QueueForm/DaySchedule'
import TimeSchedule from './QueueForm/TimeSchedule'
import Confirm from './QueueForm/Confirm'

function getSteps() {
    return ['Datos basicos', 'Dias','Horarios', 'Finalizar'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <BasicInfo></BasicInfo>;
        case 1:
            return <DaySchedule></DaySchedule>;
        case 2:
            return <TimeSchedule></TimeSchedule>;
        case 3:
            return <Confirm></Confirm>
        default:
            return 'FAIL';
    }
}

export default function CreateQueue() {
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    function handleNext() {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    }

    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    }

    function handleReset() {
        setActiveStep(0);
    }

    return (
        <div>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <Typography>{getStepContent(index)}</Typography>

                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                            >
                                Back
                  </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}

                            >
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleReset}>
                        Reset
          </Button>
                </Paper>
            )}
        </div>
    );
}