# Original Code Reference

Please paste the original code here to show how it was supposed to look.

## Original CSS for CTA Section

```css
/* Paste the original CTA CSS here */
/* Basic reset */

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Gothic&display=swap');

.noto-sans-gothic-regular {
  font-family: "Noto Sans Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
}


body {
  font-family: "Noto Sans Gothic", sans-serif;
}

.hidden {
  display: none;
}

.hidden>img {
  width: auto;
  height: 100px;
}

header,
.left_nav,
.right_nav {
  display: flex;
  align-items: center;
}

.left_nav,
.right_nav {
  gap: 1rem;
}

header>a>img {
  width: auto;
  height: 100px;
}

header {
  background-color: black;
  color: white;
  padding: 1rem 0;
  gap: 3rem;
  justify-content: center;
}

.left_nav>a>p {
  font-weight: bold;
}

.right_nav>a>p {
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
}

.right_nav>a>p>img {
  width: auto;
  height: 25px;
}

a {
  text-decoration: none;
  color: inherit;
}

.left_nav>a>p,
.right_nav>a>p {
  font-size: 1.2rem;
}

main {
  background-image: url("../images/image5.jpeg");
  height: 1800px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  /* position: relative; */
  color: white;
}

.cta__container {
  min-width: 100vw;
  height: 20vh;
  background-color: black;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta {
  background-color: black;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  position: absolute;
  bottom: 80px;
  width: 40vw;

  z-index: 1000;
}

.cta>h1 {
  font-size: 4rem;
  text-align: center;
}

.cta>h3 {
  font-size: 2rem;
}

.cta>a {
  background-color: black;
  color: white;
  padding: 1rem;
  border-style: solid;
  border-radius: 30px;
  font-size: 1.5rem;
}

.cta>a:hover {
  background-color: #3A3D40;
}

.music_showcase {
  background-color: #333;
  width: 100%;
  min-height: min-content;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 3rem;
  gap: 2rem;
}

.music_showcase>h3 {
  font-size: 1.5rem;
}

/* 3x3 grid that gracefully wraps (3→2→1 columns) */
.yt__showcase {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  width: min(1200px, 100%);
  margin-inline: auto;
}

/* responsive 16:9 boxes for the iframes */
.video {
  width: 100%;
  aspect-ratio: 16 / 9;
}

.video iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

/* responsive breakpoints */
@media (max-width: 1024px) {
  .yt__showcase {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

footer {
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  gap: 1rem;
  padding: 1rem 0;
  font-weight: bold;
}

footer>.foot__icons {
  display: flex;
  gap: 2rem;
}

footer>.foot__icons>a>img {
  width: auto;
  height: 30px;
}

.bio__main {
  min-height: 100vh;
  background-color: #3A3D40;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bio__container {
  display: flex;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  /* flex-direction: column; */
}

.bio__container>img {
  width: auto;
  height: 700px;
  border-radius: 50px;
}

.arrange-con {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.bio__container>.bio__text>.arrange-con>img {
  width: auto;
  height: 500px;
  border-radius: 30px;
}

.bio__container>.bio__text>h1 {
  font-size: 2.5rem;
  color: white;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
}

.bio__text {
  width: 90%;
  background-color: #5E6067;
  padding: 1rem;
  border-radius: 20px;
  color: white;
}

.bio__text>.arrange-con>.text-con {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;
  font-size: 1.3rem;
}

.school__main {
  min-height: 100vh;
}

.school__main>.banner__sec {
  background-image: url("../images/pexels-jake-l-davies-42710276-15262993.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 400px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.school__main>.banner__sec>.banner__text {
  background-color: #5E6067;
  color: white;
  padding: 2rem;
  font-size: 1.5rem;
}

.school__main>.about__school-con {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
}

.school__main>.about__school-con>.about__sessions-con>h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.school__main>.about__school-con>.about__sessions-con>.session-card {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.school__main>.about__school-con>.about__sessions-con>.session-card>img {
  height: 80px;
  width: auto;
}

@media (max-width: 640px) {
  .yt__showcase {
    grid-template-columns: 1fr;
  }
}

/* ==============================================
   DJ SCHOOL PAGE IMPROVEMENTS - Feature Branch
   ============================================== */

/* Courses Section */
.courses__section {
  background-color: #3A3D40;
  padding: 4rem 2rem;
}

.courses__container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.courses__container h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: white;
}

.courses__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.course-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.course-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #4CAF50, #45a049);
}

.course-card.intermediate::before {
  background: linear-gradient(90deg, #FF9800, #F57C00);
}

.course-card.advanced::before {
  background: linear-gradient(90deg, #f44336, #d32f2f);
}

.course-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.course-header {
  margin-bottom: 1.5rem;
}

.course-header h3 {
  font-size: 1.8rem;
  margin: 0 0 0.5rem 0;
  color: #333;
}

.course-badge {
  display: inline-block;
  background-color: #e9ecef;
  color: #6c757d;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
}

.course-features {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  text-align: left;
}

.course-features li {
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;
  color: #555;
}

.course-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #4CAF50;
  font-weight: bold;
}

.course-duration {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  color: #666;
}

/* Location & Hours Section */
.location__section {
  background-color: white;
  padding: 4rem 2rem;
}

.location__container {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.location__container h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

.location__grid {
  display: flex;
  /* grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); */
  gap: 3rem;
}

.location-card,
.hours-card {
  background: #f8f9fa;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.location-card h3,
.hours-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
  text-align: center;
}

.address p {
  margin: 0.3rem 0;
  color: #555;
  line-height: 1.6;
}

.contact-info {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #dee2e6;
}

.contact-info p {
  margin: 0.5rem 0;
  color: #555;
}

.hours-list {
  margin-bottom: 1.5rem;
}

.hours-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid #dee2e6;
}

.hours-item:last-child {
  border-bottom: none;
}

.day {
  font-weight: bold;
  color: #333;
}

.time {
  color: #666;
}

.booking-note {
  background-color: #fff3cd;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #ffc107;
}

.booking-note p {
  margin: 0;
  color: #856404;
  text-align: center;
}

/* Override existing session card styles with improved design */
.school__main>.about__school-con>.about__sessions-con>.session-card {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.school__main>.about__school-con>.about__sessions-con>.session-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.school__main>.about__school-con>.about__sessions-con>.session-card>img {
  height: 60px;
  width: auto;
  flex-shrink: 0;
}

/* Style for the new card content wrapper */
.session-card .card-content {
  flex: 1;
}

.session-card .card-content h3 {
  font-size: 1.2rem;
  color: #333;
  margin: 0 0 0.5rem 0;
}

.session-card .card-content p {
  font-size: 0.95rem;
  color: #666;
  margin: 0;
  line-height: 1.5;
}

/* Better container spacing */
.school__main>.about__school-con>.about__sessions-con {
  max-width: 800px;
  width: 100%;
}

.school__main>.about__school-con {
  background-color: white;
  padding: 4rem 2rem;
}

.school__main>.about__school-con h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
  text-align: center;
}

/* Improved banner responsiveness */
.school__main>.banner__sec>.banner__text {
  background-color: rgba(94, 96, 103, 0.9);
  color: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  max-width: 90%;
}

.school__main>.banner__sec>.banner__text>h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 1rem;
}

.school__main>.banner__sec>.banner__text>p {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
}

/* Remove bottom margin from last card */
.school__main>.about__school-con>.about__sessions-con>.session-card:last-child {
  margin-bottom: 0;
}

/* ==============================================
   RESPONSIVE IMPROVEMENTS
   ============================================== */

@media (max-width: 768px) {
  .courses__section {
    padding: 3rem 1rem;
  }

  .courses__grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .location__section {
    padding: 3rem 1rem;
  }

  .location__grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .school__main>.about__school-con {
    padding: 3rem 1rem;
  }

  .school__main>.about__school-con>.about__sessions-con>.session-card {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    align-items: center;
  }

  .school__main>.about__school-con>.about__sessions-con>.session-card>img {
    height: 50px;
  }
}

.cta-section {
  /* background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("../images/dj-school-cta.jpg") center/cover no-repeat; */
  background-color: #f8f9fa;
  color: black;
  text-align: center;
  padding: 5rem 2rem;
  width: 100%;
}

.cta-container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}

.cta-section h2 {
  font-size: 2.5rem;
  color: inherit !important;
}

.cta-section p {
  font-size: 1.2rem;
}

.cta-button {
  background-color: #ff3d3d;
  /* pick an accent color */
  color: white;
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  transition: background 0.3s ease;
}

.cta-button:hover {
  background-color: #cc2e2e;
}

.contact-info>p {
  display: flex;
  gap: .5rem;
}

.contact-info>p>img {
  height: 20px;
  width: auto;
}

.contact-con {
  min-height: 100vh;
}

.contact-section {
  background: #1c1c1c;
  color: white;
  text-align: center;
  padding: 4rem 2rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.contact-section h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.contact-section p {
  margin-bottom: 2rem;
  color: #ccc;
}

.contact-form {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.contact-form input,
.contact-form select,
.contact-form textarea {
  flex: 1;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  outline: none;
}

.contact-form textarea {
  resize: none;
}

.contact-form button {
  background: #ff3d3d;
  /* Accent color */
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 30px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.contact-form button:hover {
  background: #cc2e2e;
}

.showcase {
  background: #1c1c1c;
  color: white;
  text-align: center;
  padding: 4rem 2rem;
}

.carousel {
  position: relative;
  margin: 2rem auto 4rem;
  max-width: 300px;
  overflow: hidden;
}

.carousel h3 {
  margin-bottom: 1rem;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-track img {
  width: 300px;
  height: 200px;
  object-fit: contain;
  flex-shrink: 0;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  font-size: 2rem;
  color: white;
  padding: 0.2rem 0.6rem;
  cursor: pointer;
  border-radius: 50%;
  transition: background 0.3s;
}

.carousel-btn:hover {
  background: rgba(255, 61, 61, 0.8);
}

.carousel-btn.prev {
  left: 10px;
}

.carousel-btn.next {
  right: 10px;
}

.showcase-con {
  display: flex;
}

/* Section background */
.bookings-section {
  background: linear-gradient(to right, #111, #000);
  color: #fff;
  padding: 4rem 1rem;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Container */
.bookings-container {
  max-width: 1100px;
  margin: 0 auto;
}

/* Title */
.bookings-section-title {
  text-align: center;
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 3rem;
}

/* Grid layout */
.bookings-contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: center;
}

/* Image styling */
.contact-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  object-fit: cover;
}

/* Contact info */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 1.3rem;
}

.contact-block h3 {
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
}

.contact-block p {
  margin: 0;
  line-height: 1.6;
}

.contact-block a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-block a:hover {
  color: #ff3b3b;
  /* red hover accent */
}

/* Responsive */
@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (width <=950px) {
  .hidden {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-style: solid;
    border-color: white;
    gap: .5rem;
    position: relative;
  }

  .dropdown__nav {
    display: none;
    flex-direction: column;
    gap: .5rem;
    padding: 1rem;
  }

  .left_nav,
  .right_nav {
    display: none !important;
  }

  .cta>h1 {
    font-size: 3rem;
  }
}
```

## Original HTML Structure (if needed)

```html
<!-- Paste original HTML here if needed -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/index.css">
    <script src="./assets/js/index.js" defer></script>
    <title>DJ Dino Bravo</title>
</head>

<body>
    <header>
        <!-- <div class="hidden">
            <img src="./assets/images/interface-ui-menu-list-hamburger-svgrepo-com.svg" alt="Mobile Menu">
            <div class="dropdown__nav">
                <a href="./biography.html">
                    <p>Biography</p>
                </a>
                <a href="./dj_school.html">
                    <p>DJ School</p>
                </a>
                <a href="./contact.html">
                    <p>Bookings</p>
                </a>
            </div>
        </div> -->
        <div class="left_nav">
            <a href="./biography.html">
                <p>Biography</p>
            </a>
            <a href="./dj_school.html">
                <p>DJ School</p>
            </a>
            <a href="./contact.html">
                <p>Bookings</p>
            </a>
        </div>
        <a href="./index.html">
            <img src="./assets/images/logo.svg" alt="Logo" class="logo">
        </a>
        <div class="right_nav">
            <a href="https://www.youtube.com/user/djdinobravo">
                <p><img src="./assets/images/hero_tube.svg" alt="YouTube Icon">YouTube</p>
            </a>
            <a href="https://www.facebook.com/djdinobravo/">
                <p><img src="./assets/images/hero_fb.svg" alt="Facebook Icon Link">Facebook</p>
            </a>
            <a href="https://soundcloud.com/djdinobravo">
                <p><img src="./assets/images/hero_sc.svg" alt="SoundCloud Icon">SoundCloud</p>
            </a>
        </div>
    </header>
    <main>
        <div class="cta__container">
            <div class="cta">
                <h1>Book of Bravo Vol: I</h1>
                <!-- <h3>Coming Soon!</h3> -->
                <a href="https://open.spotify.com/album/0qwaNAzbJ2cjQ8JEcxGacg" class="chkout_btn">
                    Listen Here
                </a>
            </div>
        </div>
        <div class="music_showcase">
            <h3>Latest Music</h3>
            <div class="yt__showcase">
                <div class="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ITZ0jqpMg_o?si=BjK4IZBTK_6HAiqs"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                    </iframe>
                </div>
                <div class="video">
                    <iframe src="https://www.youtube.com/embed/208SEJo_LU0?si=8oxZxAp-whNjqxrR"
                        title="DJ Dino Bravo – Video 2" loading="lazy" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                    </iframe>
                </div>
                <div class="video">
                    <iframe src="https://www.youtube.com/embed/1Objz7dx0kY?si=SgugOOc0yXtyrCdq"
                        title="DJ Dino Bravo – Video 3" loading="lazy" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                    </iframe>
                </div>
                <div class="video">
                    <iframe src="https://www.youtube.com/embed/Hx4xIxeQBlo?si=QqpoS3g6w4PY5shd"
                        title="DJ Dino Bravo – Video 4" loading="lazy" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                    </iframe>
                </div>
                <div class="video">
                    <iframe src="https://www.youtube.com/embed/iC6eOWoKopE?si=hnNNb04h4ggYK_U2"
                        title="DJ Dino Bravo – Video 5" loading="lazy" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                    </iframe>
                </div>
                <div class="video">
                    <iframe src="https://www.youtube.com/embed/7ssunJzEvl0?si=YnnjxbhVJMqy08Mv"
                        title="DJ Dino Bravo – Video 6" loading="lazy" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>
    </main>
    <footer>
        <h3>Connect</h3>
        <div class="foot__icons">
            <a href="https://www.facebook.com/djdinobravo/">
                <img src="./assets/images/hero_fb.svg" alt="Facebook Icon">
            </a>
            <a href="https://www.instagram.com/djdinobravo/?hl=en">
                <img src="./assets/images/hero_insta.svg" alt="Instagram Icon">
            </a>
            <a href="https://soundcloud.com/djdinobravo">
                <img src="./assets/images/hero_sc.svg" alt="SoundCloud Icon">
            </a>
            <a href="https://open.spotify.com/artist/6ph0EJhjqYJzgjKZk6dgCG">
                <img src="./assets/images/hero_spot.svg" alt="Spotify Icon">
            </a>
            <a href="https://www.youtube.com/user/djdinobravo">
                <img src="./assets/images/hero_tube.svg" alt="YouTube Icon">
            </a>
        </div>
        <p>All Rights Reserved djdinobravo.music 2025</p>
    </footer>
</body>

</html>
```

## Notes

Add any notes about how it should look or behave:

- 
- 
- 
