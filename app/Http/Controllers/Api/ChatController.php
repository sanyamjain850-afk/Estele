<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ChatController extends Controller
{
    public function send(Request $request)
    {
        $request->validate([
            'message' => 'required|string',
        ]);

        $apiKey = config('services.gemini.key');
        

        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
        ])->post(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={$apiKey}",
            [
                'contents' => [
                    [
                        'parts' => [
                            ['text' => $request->message],
                        ],
                    ],
                ],
            ]
        );

        if (!$response->successful()) {
            return response()->json(['reply' => 'Sorry, something went wrong.',
            'debug_status'=>$response->status(),
            'debug_body'=>$response->body(),], 500);
        }

        $data = $response->json();
        $reply = $data['candidates'][0]['content']['parts'][0]['text'] ?? 'Sorry, I could not understand that.';

        return response()->json(['reply' => $reply]);
    }
}