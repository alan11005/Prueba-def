<?php

namespace App\Http\Controllers;

use App\Http\Requests\SaveMovieRequest;
use App\Http\Requests\UpdateMovieRequest;
use App\Models\Movie;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Movie::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SaveMovieRequest $request)
    {
        $movie = Movie::create($request->all());
        return response() -> json([
            'res' => true,
            'msg' => 'Pelicula guardada correctamente',
            'data' => $movie
        ],200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Movie $movie)
    {
        return response() -> json([
            'res' => true,
            'pelicula' => $movie
        ],200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Movie $movie)
    {
        $movie->update($request->all());
        return response()->json([
            'res' => true,
            'msg' => 'Pelicula actualizada correctamente',
            'Pelicula' => $movie
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Movie $movie)
    {
        $movie -> delete();
        return response()->json([
            'res' => true,
            'msg' => 'Pelicula eliminada correctamente'
        ], 200);
    }
}
