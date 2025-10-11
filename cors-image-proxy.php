<?php
// CORS Image Proxy for ChatGPT Embedding
// This PHP script serves images with proper CORS headers

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, HEAD, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Cache-Control, User-Agent, Referer, Origin');
header('Access-Control-Max-Age: 86400');
header('Cache-Control: public, max-age=31536000');
header('Referrer-Policy: no-referrer-when-downgrade');

// Handle OPTIONS preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Get the requested image path
$imagePath = $_GET['img'] ?? '';

if (empty($imagePath)) {
    http_response_code(400);
    echo 'Error: No image path specified';
    exit();
}

// Security: Only allow images from builds directory
if (!preg_match('/^builds\//', $imagePath)) {
    http_response_code(403);
    echo 'Error: Access denied';
    exit();
}

// Full path to the image
$fullPath = __DIR__ . '/' . $imagePath;

// Check if file exists and is an image
if (!file_exists($fullPath)) {
    http_response_code(404);
    echo 'Error: Image not found';
    exit();
}

$mimeType = mime_content_type($fullPath);
if (!preg_match('/^image\//', $mimeType)) {
    http_response_code(415);
    echo 'Error: Not an image file';
    exit();
}

// Set proper content type
header('Content-Type: ' . $mimeType);
header('Content-Length: ' . filesize($fullPath));

// Serve the image
readfile($fullPath);
?>
