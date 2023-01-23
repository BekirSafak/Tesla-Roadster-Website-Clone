const menuBTN = document.querySelector('.menuBTN');
const menuBTNmobile = document.querySelector('.menuBTNmobile')

const sidebar = document.querySelector('.sidebar');
const closeBTN = document.querySelector('.closeBTN');
const sidebarBackdrop = document.querySelector('.sidebarBackdrop');
const navbarMenu = document.querySelector('.navbarMenu');

const roofText = document.querySelector('.roofText');
const roofImg = document.querySelector('.bannerImg');

// AOS Animate On Scroll Library 
AOS.init();

menuBTN.addEventListener('click', sidebarOpen);
menuBTNmobile.addEventListener('click', sidebarOpen);


//* Sidebar açan fonksiyon.
function sidebarOpen() {
  sidebar.style.right = '0';
  sidebarBackdrop.style.display = 'block';

  setTimeout(() => {
    sidebarBackdrop.style.opacity = '1'
  }, 50);

  document.body.classList.add('.sidebarOpenBody');
}

//* Sidebar kapatan fonksiyon.
closeBTN.addEventListener('click', () => {
  sidebar.style.right = '-20em';
  sidebarBackdrop.style.opacity = '0';

  setTimeout(() => {
    sidebarBackdrop.style.display = 'none';
  }, 300);

  document.body.classList.remove('sidebarBackdrop')
})

//* Sayfa scroll olduğunda sidebar kapatan fonksiyon.
window.addEventListener('scroll', () => {
  sidebar.style.right = '-20em';
  sidebarBackdrop.style.opacity = '0';

  setTimeout(() => {
    sidebarBackdrop.style.display = 'none';
  }, 300);

  document.body.classList.remove('sidebarBackdrop')
})


//* Sayfa scroll olduğunda resim değiştiren fonksiyon.
window.addEventListener('scroll', () => {
  if (roofText.classList.contains('aos-animate')) {
    roofImg.classList.add('roofOpen');
  } else {
    roofImg.classList.remove('roofOpen');
  }
})