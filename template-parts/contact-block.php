<div class="contact-block section-padding">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h3>Stay tuned</h3>
        <p>We’ll send you emails when we have new places for you to explore, or we’ve updated an existing place.</p>
      </div>

      <div class="col-md-4">
        <?php
          session_start(); // place it on the top of the script

          $statusMsg = !empty($_SESSION['msg'])?$_SESSION['msg']:'';
          unset($_SESSION['msg']);
          echo $statusMsg;
        ?>

        <form method="post" action="mailinglist/action.php" id="form">
          <p><label>Email: </label><input type="text" name="email" id="email" /></p>
          <p><input type="submit" name="submit" value="SUBSCRIBE"/></p>
        </form>
      </div>

      <div class="col-md-4">
        <p>Help us spread the word about List Ten.</p>
        <ul>
          <li>Social link here</li>
          <li>Social link here</li>
          <li>Social link here</li>
        </ul>
      </div>
    </div>
  </div>
</div>
