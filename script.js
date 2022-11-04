window.addEventListener('DOMContentLoaded', () => {
    const shareBtn = document.querySelector('.share-button'),
          contact = document.querySelector('.contact'),
          shareLinks = document.querySelector('.share-links')
    console.log(shareBtn.style);

    function toggleTooltip(e) {
        let target = e.target
        if (shareBtn.contains(target) || e.target.matches('.share-links .toggle') ) { 
            shareBtn.classList.toggle('clicked');
            shareLinks.classList.toggle('toggle');
            contact.classList.toggle('onback');
        }
        
        
    }
    window.addEventListener('click', toggleTooltip)
    
})
