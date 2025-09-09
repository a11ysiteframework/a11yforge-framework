

function copyLink() {
  const toast = document.getElementById("copy-toast");
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(window.location.href)
      .then(() => { if (toast) { toast.classList.add("show"); setTimeout(() => toast.classList.remove("show"), 2000); } })
      .catch(() => { alert("Failed to copy link."); });
  } else {
    const temp = document.createElement('input');
    temp.value = window.location.href;
    document.body.appendChild(temp);
    temp.select();
    try { document.execCommand('copy'); if (toast) { toast.classList.add("show"); setTimeout(() => toast.classList.remove("show"), 2000); } }
    catch(e) { alert("Failed to copy link."); }
    document.body.removeChild(temp);
  }
}


// Avatar fallback
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll("img[data-fallback]").forEach(img => {
    img.addEventListener('error', () => {
      img.onerror = null;
      img.src = img.getAttribute("data-fallback");
    });
  });
});

const TEAM_AVATARS = {'Alex Lee': 'images/headshots/avatar5.jpg', 'Marianne Weird': 'images/headshots/avatar9.jpg', 'John Doe': 'images/headshots/avatar3.jpg', 'Jane Smith': 'images/headshots/avatar1.jpg', 'Emily Davis': 'images/headshots/avatar8.jpg', 'Michael Brown': 'images/headshots/avatar4.jpg', 'Sarah Johnson': 'images/headshots/avatar10.jpg', 'David Wilson': 'images/headshots/avatar2.jpg', 'Laura Martinez': 'images/headshots/avatar6.jpg', 'James Anderson': 'images/headshots/avatar7.jpg'};

document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll(".team-card");
  cards.forEach(card => {
    const nameEl = card.querySelector("h3");
    const imgEl = card.querySelector("img");
    const linkEl = card.querySelector("a");
    if (!nameEl) return;
    const name = nameEl.textContent.trim();
    const slug = name.toLowerCase().replace(/\s+/g, '-');
    if (linkEl && (!linkEl.getAttribute('href') || linkEl.getAttribute('href').includes('#'))) {
      linkEl.setAttribute('href', `profiles/${slug}.html`);
    }
    if (imgEl) {
      const mapped = TEAM_AVATARS[name];
      if (mapped) imgEl.setAttribute('src', mapped);
      imgEl.setAttribute('data-fallback', 'images/fallback-avatar.svg');
    }
  });
});
