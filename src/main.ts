import { bootstrapApplication } from '@angular/platform-browser';
    import { StepperVerticalDemo } from './app/stepper-vertical-demo';
    import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

    bootstrapApplication(StepperVerticalDemo, {
    providers: [provideAnimationsAsync()],
    }).catch((err) => console.error(err));