<?php
// 应用入口文件
ini_set('display_errors', '1');

// 检测PHP环境
if(version_compare(PHP_VERSION,'5.3.0','<'))  die('require PHP > 5.3.0 !');
if(!function_exists('fsockopen')) die('require open fscokopen');
if(!function_exists('exif_imagetype')) die('require exif');

if(!function_exists('show_bug')){
    function show_bug($object){
        echo "<pre style='color:red'>";
        var_dump($object);
        echo "</pre>";
    }
}

//require __DIR__ . '/vendor/tiderjian/think-core/src/Common/functions.php';
//require __DIR__ . '/app/Common/Common/function.php';
require_once __DIR__ . '/vendor/autoload.php';

$dotenv = \Dotenv\Dotenv::create(__DIR__ );
$dotenv->load();

// 引入ThinkPHP入口文件
require 'vendor/tiderjian/think-core/src/ThinkPHP.php';

