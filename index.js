:root {
  --primary-orange: #FF6600;
  --secondary-silver: #C0C0C0;
  --dark-bg: #1A1A1A;
  --light-text: #FFFFFF;
}

/* Update brand colors */
.section-title span,
.brand h1 span,
.cta,
#header .nav-list ul li:hover a {
  color: var(--primary-orange);
}

.cta {
  border: 2px solid var(--primary-orange);
  color: var(--light-text);
}

.cta:hover {
  background-color: var(--primary-orange);
}

/* Background gradients (dark to silver) */
#footer,
#projects .project-info,
#services .service-item::after {
  background-image: linear-gradient(60deg, var(--dark-bg) 0%, var(--secondary-silver) 100%);
}

/* Hero background overlay */
#hero::after {
  background-color: black;
  opacity: 0.85;
}
