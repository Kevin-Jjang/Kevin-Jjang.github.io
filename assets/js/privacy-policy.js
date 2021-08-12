window.addEventListener('DOMContentLoaded', () => {
    let privacyPopup = document.getElementById('privacy-policy-popup');
    privacyPopup.classList.remove('hidden');
    let hidePrivacyPolicy = window.localStorage.getItem('hidePrivacyPolicy081021');
    if(hidePrivacyPolicy === 'true' || document.getElementById('privacy-policy')) {
        closePrivacyPopup();
    }
});

function hidePrivacyPopup() {
    window.localStorage.setItem('hidePrivacyPolicy081021', true);
    let privacyPopup = document.getElementById('privacy-policy-popup');
    privacyPopup.classList.remove('visible');
    privacyPopup.classList.add('hidden');
}

function closePrivacyPopup() {
    let privacyPopup = document.getElementById('privacy-policy-popup');
    privacyPopup.classList.remove('visible');
    privacyPopup.classList.add('hidden');
}