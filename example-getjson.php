<?php
  $example = array(
    'name' => $_GET['name'],
    'method' => $_GET['method'],
  );
  echo json_encode($example);
 ?>
