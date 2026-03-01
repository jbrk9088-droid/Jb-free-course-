<!DOCTYPE html>
<html>
<head>
  <title>JB Free Course</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    }

    body {
      background: linear-gradient(135deg, #141e30, #243b55);
      color: white;
      text-align: center;
    }

    header {
      padding: 20px;
    }

    header img {
      width: 120px;
      border-radius: 50%;
      border: 3px solid white;
      margin-bottom: 10px;
    }

    h1 {
      font-size: 28px;
      margin-bottom: 10px;
    }

    .container {
      padding: 20px;
    }

    .video-box {
      background: white;
      color: black;
      margin: 15px auto;
      padding: 15px;
      width: 95%;
      max-width: 500px;
      border-radius: 12px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
      transition: 0.3s;
    }

    .video-box:hover {
      transform: scale(1.05);
    }

    .video-title {
      font-weight: 600;
      margin-bottom: 8px;
    }

    .watch-btn {
      display: inline-block;
      padding: 8px 15px;
      background: #ff4b2b;
      color: white;
      border-radius: 20px;
      text-decoration: none;
      font-size: 14px;
      transition: 0.3s;
    }

    .watch-btn:hover {
      background: #ff1e00;
    }

    footer {
      margin-top: 20px;
      padding: 15px;
      font-size: 14px;
      background: rgba(0,0,0,0.3);
    }
  </style>
</head>
<body>

<header>
  <img src="https://files.catbox.moe/427sq3.jpg" alt="JB Logo">
  <h1>🎓 JB Free Course</h1>
  <p>20+ YouTube Free Programming Videos</p>
</header>

<div class="container">

  <div class="video-box">
    <div class="video-title">1️⃣ HTML Full Course</div>
    <a href="https://youtube.com/" target="_blank" class="watch-btn">Watch Now</a>
  </div>

  <div class="video-box">
    <div class="video-title">2️⃣ CSS Full Course</div>
    <a href="https://youtube.com/" target="_blank" class="watch-btn">Watch Now</a>
  </div>

  <div class="video-box">
    <div class="video-title">3️⃣ JavaScript Course</div>
    <a href="https://youtube.com/" target="_blank" class="watch-btn">Watch Now</a>
  </div>

  <!-- এইভাবে ২০+ ভিডিও add করবে -->

</div>

<footer>
  © 2026 JB Free Course | All Rights Reserved
</footer>

</body>
</html>
