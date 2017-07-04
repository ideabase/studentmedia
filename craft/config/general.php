<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(
  '*' => array(
	       'extraAllowedFileExtensions' => 'eps',
         'siteUrl' => 'https://kentstatestudentmedia.com',
         'enableCsrfProtection' => true,
         'omitScriptNameInUrls' => true,
         'cpTrigger' => 'admin',
         'environmentVariables' => array(
          'basePath' => '',
          'baseUrl'  => 'https://kentstatestudentmedia.com',
        )
	),
	'studentmedia.web' => array(
	    'devMode' => true,
      'siteUrl' => 'http://studentmedia.web',
      'environmentVariables' => array(
       'basePath' => '',
       'baseUrl'  => 'http://studentmedia.web',
     )
	)
);
