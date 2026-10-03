# index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Boyfriend's Day Website</title>

  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: "Trebuchet MS", Arial, sans-serif;
    }

    body {
      min-height: 100vh;
      color: white;
      overflow-x: hidden;
      background:
        repeating-linear-gradient(
          0deg,
          #8e1425 0px,
          #8e1425 18px,
          #d95869 18px,
          #d95869 36px
        );
    }

    body::before {
      content: "";
      position: fixed;
      inset: 0;
      pointer-events: none;
opacity: 0.15;
      background-image: url("https://www.transparenttextures.com/patterns/paper-fibers.png");
    }

    .stars {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 0;
    }

    .star {
      position: absolute;
      color: #ffd21f;
      font-size: 35px;
      text-shadow: 2px 2px 0 #c18000;
      animation: sparkle 2s infinite ease-in-out;
    }

    .star:nth-child(1) {
      top: 5%;
      left: 9%;
    }

    .star:nth-child(2) {
      top: 8%;
      right: 23%;
    }

    .star:nth-child(3) {
      top: 15%;
      right: 6%;
    }
.star:nth-child(4) {
      top: 43%;
      left: 5%;
    }

    .star:nth-child(5) {
      bottom: 13%;
      right: 18%;
    }

    .star:nth-child(6) {
      bottom: 9%;
      right: 3%;
    }

    @keyframes sparkle {
      0%, 100% {
        transform: scale(1) rotate(0deg);
      }

      50% {
        transform: scale(1.25) rotate(15deg);
      }
    }

    .container {
      position: relative;
      z-index: 1;
      width: min(1100px, 92%);
      margin: auto;
      padding: 35px 0 60px;
      text-align: center;
    }

    header {
      margin-bottom: 30px;
    }
.small-title {
      color: #ffd83d;
      font-size: 1rem;
      letter-spacing: 3px;
      text-transform: uppercase;
      font-weight: bold;
    }

    h1 {
      margin: 8px 0;
      font-size: clamp(2.2rem, 7vw, 5.5rem);
      line-height: 0.95;
      text-transform: uppercase;
      color: #fff;
      text-shadow:
        4px 4px 0 #111,
        7px 7px 0 #ee6980;
    }

    .subtitle {
      max-width: 650px;
      margin: 20px auto;
      font-size: 1.15rem;
      line-height: 1.6;
      color: #fff8ef;
    }

    .browser-window {
      background: #fff;
      border: 8px solid #101010;
      border-radius: 18px;
      box-shadow: 10px 12px 0 rgba(0, 0, 0, 0.3);
      overflow: hidden;
      color: #222;
    }
.browser-top {
      height: 38px;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 0 14px;
      background: #252525;
    }

    .browser-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #ef5d70;
    }

    .browser-dot:nth-child(2) {
      background: #f0c74c;
    }

    .browser-dot:nth-child(3) {
      background: #5fcd77;
    }

    .browser-address {
      flex: 1;
      height: 20px;
      margin-left: 12px;
      border-radius: 10px;
      background: #eeeeee;
    }

    .browser-content {
      padding: 25px;
    }

.browser-content h2 {
      color: #e75677;
      margin-bottom: 12px;
    }

    .bouquets {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
      margin-top: 18px;
    }

    .bouquet {
      min-height: 180px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      border: 3px dashed #ef7190;
      border-radius: 14px;
      background: repeating-linear-gradient(
        90deg,
        #e9f8ff 0px,
        #e9f8ff 12px,
        #ffffff 12px,
        #ffffff 25px
      );
      cursor: pointer;
      transition: 0.3s ease;
    }

    .bouquet:hover {
      transform: translateY(-8px) rotate(-2deg);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
.flower {
      font-size: 5rem;
      filter: drop-shadow(3px 5px 0 rgba(0, 0, 0, 0.2));
    }

    .bouquet p {
      margin-top: 8px;
      font-weight: bold;
      color: #c53f61;
    }

    .message-section {
      margin: 45px auto;
      max-width: 850px;
    }

    .message-card {
      background: #fff;
      color: #222;
      padding: 30px;
      border-radius: 20px;
      border: 6px solid #111;
      box-shadow: 9px 10px 0 #e7687d;
      transform: rotate(-1deg);
    }

    .message-card h2 {
      color: #dd5070;
      font-size: 2rem;
      margin-bottom: 15px;
    }

    .message-card p {
      font-family: Georgia, serif;
      font-size: 1.2rem;
      line-height: 1.7;
    }
 .coupons-section {
      margin-top: 40px;
    }

    .coupons-section h2 {
      font-size: 2.2rem;
      margin-bottom: 20px;
      text-shadow: 3px 3px 0 #111;
    }

    .coupons {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
    }

    .coupon {
      position: relative;
      padding: 25px 15px;
      color: #fff;
      background: #174c9b;
      border: 3px dashed white;
      border-radius: 12px;
      box-shadow: 6px 7px 0 #092553;
      transition: 0.3s ease;
    }

    .coupon:hover {
      transform: translateY(-6px) rotate(2deg);
    }
     .coupon::before,
    .coupon::after {
      content: "";
      position: absolute;
      top: 50%;
      width: 20px;
      height: 20px;
      background: #98192b;
      border-radius: 50%;
      transform: translateY(-50%);
    }

    .coupon::before {
      left: -12px;
    }

    .coupon::after {
      right: -12px;
    }

    .coupon h3 {
      font-size: 1.3rem;
      margin-bottom: 8px;
    }

    .coupon p {
      font-size: 0.95rem;
    }

    .buttons {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 15px;
      margin-top: 25px;
    }
 button {
      border: 3px solid #111;
      border-radius: 30px;
      padding: 13px 28px;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      transition: 0.25s ease;
    }

    button:hover {
      transform: scale(1.08);
    }

    .yes-button {
      background: #ed4e63;
      color: white;
    }

    .no-button {
      background: white;
      color: #222;
    }

    .song-button {
      background: #ffd83d;
      color: #222;
      box-shadow: 4px 5px 0 #9d6c00;
    }

    footer {
      margin-top: 50px;
      font-size: 1rem;
      color: #ffeef0;
    }

    .modal {
      position: fixed;
       inset: 0;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 20px;
      background: rgba(0, 0, 0, 0.7);
      z-index: 10;
    }

    .modal.active {
      display: flex;
    }

    .modal-box {
      width: min(450px, 100%);
      padding: 30px;
      text-align: center;
      color: #222;
      background: #fff;
      border: 6px solid #111;
      border-radius: 20px;
      animation: pop 0.35s ease;
    }

    .modal-box .gift {
      font-size: 5rem;
      margin-bottom: 12px;
    }

    .modal-box h2 {
      color: #e2516d;
      margin-bottom: 12px;
    }

    .modal-box p {
      line-height: 1.6;
      margin-bottom: 18px;
    }
@keyframes pop {
      from {
        transform: scale(0.6);
        opacity: 0;
      }

      to {
        transform: scale(1);
        opacity: 1;
      }
    }

    .close-button {
      background: #222;
      color: white;
      padding: 10px 20px;
      border-radius: 22px;
      border: none;
    }

    @media (max-width: 700px) {
      .bouquets,
      .coupons {
        grid-template-columns: 1fr;
      }

      .browser-content {
        padding: 15px;
      }

      .flower {
        font-size: 4rem;
      }

      h1 {
        text-shadow:
          3px 3px 0 #111,
          5px 5px 0 #ee6980;
        }
    }
  </style>
</head>

<body>
  <div class="stars">
    <span class="star">★</span>
    <span class="star">★</span>
    <span class="star">★</span>
    <span class="star">★</span>
    <span class="star">★</span>
    <span class="star">★</span>
  </div>

  <main class="container">
    <header>
      <div class="small-title">A little surprise for you</div>
      <h1>Boyfriend's Day</h1>
      <p class="subtitle">
        Welcome to your special website, made with love, flowers,
        unlimited hugs, and a few surprises.
      </p>
    </header>

    <section class="browser-window">
      <div class="browser-top">
        <span class="browser-dot"></span>
        <span class="browser-dot"></span>
        <span class="browser-dot"></span>
        <div class="browser-address"></div>
      </div>

      <div class="browser-content">
 <h2>Click on any bouquet to open</h2>

        <div class="bouquets">
          <div class="bouquet" onclick="openBouquet('Roses')">
            <div>
              <div class="flower">💐</div>
              <p>Romantic Roses</p>
            </div>
          </div>

          <div class="bouquet" onclick="openBouquet('Tulips')">
            <div>
              <div class="flower">🌷</div>
              <p>Sweet Tulips</p>
            </div>
          </div>

          <div class="bouquet" onclick="openBouquet('Sunflowers')">
            <div>
              <div class="flower">🌻</div>
              <p>Happy Sunflowers</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="message-section">
      <div class="message-card">
        <h2>A Letter For You</h2>
        <p>
          You make ordinary days feel special. Thank you for being my safe
          place, my favourite person, and the one who makes me smile even
   when I do not feel like smiling.
        </p>
        <p style="margin-top: 15px;">
          I love you more than words can explain.
        </p>
      </div>
    </section>

    <section class="coupons-section">
      <h2>Your Love Coupons</h2>

      <div class="coupons">
        <div class="coupon">
          <h3>Unlimited Hugs</h3>
          <p>Redeem whenever you need comfort.</p>
        </div>

        <div class="coupon">
          <h3>Date Night</h3>
          <p>One special date planned just for you.</p>
        </div>

        <div class="coupon">
          <h3>Unlimited Kisses</h3>
          <p>Valid forever and without limits.</p>
        </div>
      </div>

      <div class="buttons">
        <button class="song-button" onclick="playSong()">
          ▶️ Play Our Song
        </button>
 <button class="yes-button" onclick="openGift()">
          Accept Your Gift
        </button>
      </div>
    </section>

    <footer>
      Made especially for my favourite person ❤️
    </footer>
  </main>

  <div class="modal" id="modal">
    <div class="modal-box">
      <div class="gift">🎁</div>
      <h2 id="modalTitle">Please accept the gift</h2>
      <p id="modalText">
        This gift contains all my love, hugs, kisses, and beautiful memories
        with you.
      </p>

      <div class="buttons">
        <button class="yes-button" onclick="acceptGift()">Yes</button>
        <button class="no-button" onclick="rejectGift()">No</button>
      </div>

      <button class="close-button" onclick="closeModal()">
        Close
      </button>
    </div>
  </div>
<audio id="loveSong">
    <!-- Replace this with your own song file -->
    <source src="song.mp3" type="audio/mpeg" />
  </audio>

  <script>
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");
    const loveSong = document.getElementById("loveSong");

    function openBouquet(type) {
      modalTitle.textContent = ⁠ ${type} bouquet for you ⁠;
      modalText.textContent =
        ⁠ These flowers represent how much happiness and love you bring into my life. Happy Boyfriend's Day! ⁠;
      modal.classList.add("active");
    }

    function openGift() {
      modalTitle.textContent = "Please accept the gift";
      modalText.textContent =
        "This gift contains all my love, hugs, kisses, and beautiful memories with you.";
      modal.classList.add("active");
    }
 function acceptGift() {
      modalTitle.textContent = "Gift accepted!";
      modalText.textContent =
        "Yay! You have officially accepted unlimited love, hugs, kisses, and date nights.";
    }

    function rejectGift() {
      modalTitle.textContent = "Are you sure?";
      modalText.textContent =
        "The gift is too cute to reject. Please try clicking Yes!";
    }

    function closeModal() {
      modal.classList.remove("active");
    }

    function playSong() {
      if (loveSong.src.endsWith("song.mp3")) {
        alert("Add a file named song.mp3 to your GitHub repository.");
        return;
      }

      loveSong.play();
    }

    window.addEventListener("click", function(event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  </script>
</body>
</html>


      
