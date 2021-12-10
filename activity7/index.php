<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="style.css">
    <title>form validator</title>
</head>
<body>
    <div class="container">
        <form id='form' class='form' action="">
        <h2>register with us</h2>
            <div class="form-control">
              <label for="username" >username</label>
              <input type="text" id="username" placeholder="enter username">
              <small>error message</small>
            </div>

            <div class="form-control">
              <label for="email" >email</label>
              <input type="text" id="email" placeholder="enter email">
              <small>error message</small>
             </div>

            <div class="form-control">
              <label for="password" >password</label>
              <input type="text" id="password" placeholder="enter password">
              <small>error message</small>
             </div>

            <div class="form-control">
              <label for="password2" >confirm password</label>
              <input type="text" id="password2" placeholder="confirm password">
              <small>error message</small>
            </div>
            <button type='submit'>submit</button>
        </form>
    </div>
<script src="script.js"></script>
</body>
</html>