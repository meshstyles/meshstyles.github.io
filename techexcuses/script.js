const excuses = [
    "We're addressing some unexpected integration issues.",
    "We're working through a few last-minute environment inconsistencies.",
    "We're experiencing some instability in the deployment pipeline.",
    "We're running into some unexpected edge cases.",
    "We're validating a few critical dependencies that surfaced late in testing.",
    "We're seeing some unexpected latency under load.",
    "We're resolving some challenges with third-party service compatibility.",
    "We're conducting additional QA based on recent findings.",
    "We're fine-tuning configuration settings to ensure system reliability.",
    "We're resolving some issues with versioning across services.",
    "We're working with security to close out a few concerns before go-live.",
    "We're running extended compliance verification.",
    "There are a few open items flagged in the security review.",
    "We're implementing some additional safeguards around data handling.",
    "We're aligning across teams to finalize the release timeline.",
    "We're waiting on final sign-off from a few stakeholders.",
    "We uncovered some gaps in the deployment checklist that need to be addressed.",
    "There's a cross-team dependency that's still being resolved.",
    "We're re-evaluating a few architectural decisions based on feedback.",
    "We're adjusting our rollout plan to minimize potential impact."
];

const display = document.getElementById("excuse-display");
const button = document.getElementById("spin-button");

let spinning = false;

function spinExcuse() {
    if (spinning) return; // Prevent double spins
    spinning = true;

    let spinCount = 0;
    const maxSpins = Math.floor(Math.random() * 10) + 30; // Between 30-40 spins
    let delay = 50;

    function doSpin() {
        const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];
        display.textContent = randomExcuse;

        spinCount++;
        if (spinCount < maxSpins) {
            setTimeout(doSpin, delay);
            delay += 15; // Increase delay each spin to simulate slowing
        } else {
            spinning = false; // Done spinning
        }
    }

    doSpin();
}

button.addEventListener("click", spinExcuse);