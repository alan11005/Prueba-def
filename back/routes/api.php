<?php

use App\Http\Controllers\MovieController;
use App\Http\Controllers\ShowingController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TicketController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('movies', [MovieController::class,'index']);
Route::post('movies', [MovieController::class,'store']);
Route::get('movies/{movie}', [MovieController::class,'show']);
Route::put('movies/{movie}', [MovieController::class,'update']);
Route::delete('movies/{movie}', [MovieController::class,'destroy']);

Route::get('tickets',[TicketController::class,'index']);
Route::post('tickets',[TicketController::class,'store']);
Route::get('tickets/{ticket}',[TicketController::class,'show']);
Route::put('tickets/{ticket}',[TicketController::class,'update']);
Route::delete('tickets/{ticket}',[TicketController::class,'destroy']);

Route::get('showings',[ShowingController::class,'index']);
Route::post('showings',[ShowingController::class,'store']);
Route::get('showings/{showing}',[ShowingController::class,'show']);
Route::put('showings/{showing}',[ShowingController::class,'update']);
Route::delete('showings/{showing}',[ShowingController::class,'destroy']);

Route::get('users',[UserController::class,'index']);
Route::post('users',[UserController::class,'store']);
Route::get('users/{user}',[UserController::class,'show']);
Route::put('users/{user}',[UserController::class,'update']);
Route::delete('users/{user}',[UserController::class,'destroy']);
