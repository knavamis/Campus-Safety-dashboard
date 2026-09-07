const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', function() {

    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }

});


const emergencyContacts = document.getElementById('emergency-contacts');
const emergencyInfo = document.getElementById('emergency-info');

emergencyContacts.addEventListener('click', function() {

    if (emergencyInfo.style.display === 'block') {
        emergencyInfo.style.display = 'none';
    } else {
        emergencyInfo.style.display = 'block';
        emergencyInfo.scrollIntoView({ behavior: 'smooth' });
    }

});

const medicalHelp = document.getElementById('medical-help');
const medicalInfo = document.getElementById('medical-info');

medicalHelp.addEventListener('click', function() {

    if (medicalInfo.style.display === 'block') {
        medicalInfo.style.display = 'none';
    } else {
        medicalInfo.style.display = 'block';
        medicalInfo.scrollIntoView({ behavior: 'smooth' });
    }

});

const fireSafety = document.getElementById('fire-safety');
const fireInfo = document.getElementById('fire-info');

fireSafety.addEventListener('click', function() {

    if (fireInfo.style.display === 'block') {
        fireInfo.style.display = 'none';
    } else {
        fireInfo.style.display = 'block';
        fireInfo.scrollIntoView({ behavior: 'smooth' });
    }

});

const campusSecurity = document.getElementById('campus-security');
const securityInfo = document.getElementById('security-info');

campusSecurity.addEventListener('click', function() {

    if (securityInfo.style.display === 'block') {
        securityInfo.style.display = 'none';
    } else {
        securityInfo.style.display = 'block';
        securityInfo.scrollIntoView({ behavior: 'smooth' });
    }

});

const safeLocations = document.getElementById('safe-locations');
const locationsInfo = document.getElementById('locations-info');

safeLocations.addEventListener('click', function() {

    if (locationsInfo.style.display === 'block') {
        locationsInfo.style.display = 'none';
    } else {
        locationsInfo.style.display = 'block';
        locationsInfo.scrollIntoView({ behavior: 'smooth' });
    }

});

const safetyTips = document.getElementById('safety-tips');
const tipsInfo = document.getElementById('tips-info');

safetyTips.addEventListener('click', function() {

    if (tipsInfo.style.display === 'block') {
        tipsInfo.style.display = 'none';
    } else {
        tipsInfo.style.display = 'block';
        tipsInfo.scrollIntoView({ behavior: 'smooth' });
    }

});
const about = document.getElementById('about');
const aboutInfo = document.getElementById('about-info');

about.addEventListener('click', function() {

    if (aboutInfo.style.display === 'block') {
        aboutInfo.style.display = 'none';
    } else {
        aboutInfo.style.display = 'block';
        aboutInfo.scrollIntoView({ behavior: 'smooth' });
    }

});

const quickHelpButton = document.getElementById('emergency-button');
const quickHelp = document.getElementById('quick-help');

quickHelpButton.addEventListener('click', function() {

    if (quickHelp.style.display === 'block') {
        quickHelp.style.display = 'none';
        quickHelpButton.textContent = 'Emergency Help';
    } else {
        quickHelp.style.display = 'block';
        quickHelpButton.textContent = '✕ Close Emergency Help';
    }

});

const securityCard = document.getElementById('security-card');
const medicalCard = document.getElementById('medical-card');
const locationsCard = document.getElementById('locations-card');

securityCard.addEventListener('click', function() {

    if (securityInfo.style.display === 'block') {
        securityInfo.style.display = 'none';
    } else {
        securityInfo.style.display = 'block';
        securityInfo.scrollIntoView({ behavior: 'smooth' });
    }

});

medicalCard.addEventListener('click', function() {

    if (medicalInfo.style.display === 'block') {
        medicalInfo.style.display = 'none';
    } else {
        medicalInfo.style.display = 'block';
        medicalInfo.scrollIntoView({ behavior: 'smooth' });
    }

});

locationsCard.addEventListener('click', function() {

    if (locationsInfo.style.display === 'block') {
        locationsInfo.style.display = 'none';
    } else {
        locationsInfo.style.display = 'block';
        locationsInfo.scrollIntoView({ behavior: 'smooth' });
    }

});

function updateDateTime() {
    const now = new Date();

    document.getElementById('date').textContent =
        now.toLocaleDateString();

    document.getElementById('time').textContent =
        now.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
}

updateDateTime();
setInterval(updateDateTime, 1000);

const closeMenu = document.getElementById('close-menu');

closeMenu.addEventListener('click', function() {
    menu.style.display = 'none';
});


