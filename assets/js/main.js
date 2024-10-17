document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('js-typewriter-effect') === null)
        return;

    const skills = ["Creative programmer", "Web developer", "Technology educator", "Interactive media producer", "Indie game maker"];
    let skillIndex = 0;
    let charIndex = 0;
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const delayBetweenSkills = 2000;
    const typewriterElement = document.getElementById('js-typewriter-effect');

    function type() {
        if (charIndex < skills[skillIndex].length) {
            typewriterElement.textContent += skills[skillIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, delayBetweenSkills);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typewriterElement.textContent = skills[skillIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            skillIndex = (skillIndex + 1) % skills.length;
            setTimeout(type, typingSpeed);
        }
    }

    type();
});