<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/config/defaults/db.php
 */

 return array(
   '*' => array(
     'server' => 'localhost',
     'database' => 'studentmedia_craft',
     'tablePrefix' => 'craft',
     'user' => 'PUT USER NAME HERE',
     'password' => 'PUT PASSWORD HERE',
   ),

   'studentmedia.web' => array(
     'user' => 'root',
     'password' => 'root',
   ),

   // Use IP of your droplet and MySQL credentials of a user you created
   'kentstatestudentmedia.com' => array(
     'user' => 'PUT USER NAME HERE',
     'password' => 'PUT PASSWORD HERE',
   )
 );
