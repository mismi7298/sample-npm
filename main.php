<?php

require_once __DIR__ . '/vendor/autoload.php';

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use Monolog\Logger;
use Monolog\Handler\StreamHandler;

$log = new Logger('sample');
$log->pushHandler(new StreamHandler('php://stdout', Logger::DEBUG));

$url = getenv('SAMPLE_URL') ?: 'https://httpbin.org/get';

$log->info('Starting sample PHP project');
$log->info('PHP version: ' . PHP_VERSION);

$client = new Client(['timeout' => 10.0]);

try {
    $response = $client->get($url);
    $body     = (string) $response->getBody();
    $preview  = substr($body, 0, 200);

    $log->info('Request successful', [
        'status'  => $response->getStatusCode(),
        'bytes'   => strlen($body),
        'preview' => $preview,
    ]);
} catch (RequestException $e) {
    $log->error('Request failed', ['error' => $e->getMessage()]);
    exit(1);
}
