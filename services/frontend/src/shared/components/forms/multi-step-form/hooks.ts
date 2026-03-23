import { useState, useCallback } from "react";

export function useMultiStepForm(stepsCount: number) {
    const [currentStep, setCurrentStep] = useState(0);
    const [transitioning, setTransitioning] = useState(false);

    const nextStep = useCallback(() => {
        setTransitioning(true);
        setTimeout(() => {
            setCurrentStep((s) => Math.min(s + 1, stepsCount - 1));
            setTransitioning(false);
        }, 250);
    }, [stepsCount]);

    const previousStep = useCallback(() => {
        setTransitioning(true);
        setTimeout(() => {
            setCurrentStep((s) => Math.max(s - 1, 0));
            setTransitioning(false);
        }, 250);
    }, []);

    const goToStep = useCallback((step: number) => {
        setTransitioning(true);
        setTimeout(() => {
            setCurrentStep(Math.max(0, Math.min(step, stepsCount - 1)));
            setTransitioning(false);
        }, 250);
    }, [stepsCount]);

    return {
        currentStep,
        transitioning,
        nextStep,
        previousStep,
        goToStep,
    };
}