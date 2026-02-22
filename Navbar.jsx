/* Basic navbar styling */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0077b6;
  padding: 10px 20px;
}

/* Logo text */
.logo {
  color: white;
  font-size: 24px;
  font-weight: bold;
}

/* Links */
.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
}

.nav-links li a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s ease;
}

/* Hover effect */
.nav-links li a:hover {
  color: #ffd166;
}

/* Responsive for small screens */
@media (max-width: 600px) {
  .nav-links {
    flex-direction: column;
    gap: 10px;
  }
}
