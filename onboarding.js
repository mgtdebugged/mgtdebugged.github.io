document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step');
    const firstStep = document.getElementById('step1');

    // Initially show the first step
    firstStep.classList.add('active');
    firstStep.style.display = 'block';

    // Event listener for next buttons
    document.querySelectorAll('.next-step').forEach(button => {
        button.addEventListener('click', (event) => {
            // Change style of other buttons in the current step except the one clicked
            const currentStep = button.closest('.step');
            Array.from(currentStep.querySelectorAll('.next-step')).forEach(btn => {
                if (btn !== event.target) {
                    btn.style.backgroundColor = 'white';
                }
            });

            const nextStepNumber = button.getAttribute('data-next-step');
            navigateToStep(nextStepNumber);
        });
    });

    // Event listener for back buttons
    document.querySelectorAll('.back-step').forEach(button => {
        button.addEventListener('click', () => {
            const current = document.querySelector('.step.active');
            const currentStepNumber = parseInt(current.id.replace('step', ''));
            const previousStepNumber = currentStepNumber - 1;
            navigateToStep(previousStepNumber);
        });
    });

    function navigateToStep(stepNumber) {
        const current = document.querySelector('.step.active');
        current.classList.add('exit');
        setTimeout(() => {
            current.classList.remove('active', 'exit');
            current.style.display = 'none'; // Hide the current step
            const next = document.getElementById('step' + stepNumber);
            if (next) {
                next.style.display = 'block'; // Ensure it's visible for animation
                setTimeout(() => {
                    next.classList.add('active');
                    // Reset style for buttons in the new step
                    Array.from(next.querySelectorAll('.next-step')).forEach(btn => {
                        btn.style.backgroundColor = '#0b6a8d'; // Reset to original styles
                    });
                }, 20); // Delay to allow the browser to render the display change
            }
        }, 500); // Match this with the CSS transition duration
    }

});
