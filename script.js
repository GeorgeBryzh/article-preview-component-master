window.addEventListener('DOMContentLoaded', () => {
    const shareBtn = document.querySelector('.share-button'),
          contact = document.querySelector('.contact'),
          shareLinks = document.querySelector('.share-links')

    window.addEventListener('click', (e) => {
        let target = e.target
        if (target.matches('button.share-button') || target.matches('button.share-button img')) {
            console.log(target)
            shareBtn.classList.toggle('clicked');
            shareLinks.classList.toggle('toggle');
            contact.classList.toggle('onback');
        }

   })
})
