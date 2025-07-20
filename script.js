// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {
  // Animate blog cards on load
  const cards = document.querySelectorAll('.blog-card');
  cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }, 150 * index);
  });

  // Simple hover effect for nav links (optional enhancement)
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.color = '#c0c0c0';
    });
    link.addEventListener('mouseleave', () => {
      link.style.color = '#757575';
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.blog-card');
  const searchInput = document.getElementById('search-input');

  // Initial animation for cards (optional)
  cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }, 150 * index);
  });

  // Nav link hover effect (optional)
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.color = '#c0c0c0';
    });
    link.addEventListener('mouseleave', () => {
      link.style.color = '#757575';
    });
  });

  // Search filter functionality
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();

    cards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const desc = card.querySelector('p').textContent.toLowerCase();
      const match = title.includes(query) || desc.includes(query);

      card.style.display = match ? 'block' : 'none';
    });
  });
});
